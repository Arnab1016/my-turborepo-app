import type { NextAuthOptions } from "next-auth";
import  CredentialsProvider from "next-auth/providers/credentials";
// import GitHubProvider from "next-auth/providers/github";
import { prisma } from "@repo/db";
import bcrypt from "bcrypt";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                number: {label: "Phone No", type:"text", placeholder: "Enter your number", required: true},
                password: {label: "Password", type: "password", placeholder: "Enter your password", required: true}
            },
            async authorize(credentials) {

                if(!credentials?.number || !credentials?.password) {
                    return null;
                }

                const userExists =  await prisma.user.findUnique({
                    where: { number: credentials.number}
                });

                if(!userExists){
                    console.log("User not found");
                    return null;
                }

                const passwordMatched = await bcrypt.compare(credentials.password, userExists.password);

                if(!passwordMatched) {
                    console.log("Incorrect password");
                    return null;
                }
                console.log("User signed in successfully", userExists.id);
                return {
                    id: userExists.id,
                    email: userExists.email,
                    name: userExists.name
                }
            }
        })
    ],
    secret: process.env.NEXT_SECRET_KEY,
    callbacks: {
        async redirect({url, baseUrl}) {
            return '/dashboard';
        },
        async jwt({token, user}) {
            if(user) {
            console.log(user);
            token.sub = user.id
            }
            return token;
        },
        async session({session, token}) {
            session.user.id = token.sub as string
            return session
        }
    }
}