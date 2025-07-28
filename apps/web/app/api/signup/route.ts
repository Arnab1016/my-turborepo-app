import { NextResponse } from "next/server";
import { prisma } from "@repo/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
try{    
    const body = await req.json();
    const { email, name, number, password} = body;

    const userExists = await prisma.user.findUnique({
        where: { number: number}
    });

    if(userExists){
        return NextResponse.json({user: null, message: "User with this number already exists"}, {status: 409});
    }

    // const generateHashedPassword = (password: string, salt: string): Promise<string> => {
    //     return new Promise((resolve, reject) => {
    //         crypto.scrypt(password.normalize(), salt, 64, (error: any, hash: any) => {
    //             if(error) {
    //                 reject(error);
    //             }
    //             resolve(hash.toString('hex').normalize());    
    //         })
    //     });
    // }

    // const generateSalt = () => {
    //     return crypto.randomBytes(10).toString('hex').normalize();
    // }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            email: email,
            name: name,
            number: number,
            password: hashedPassword,
            balance: {
                create: {
                    amount: Math.floor(Math.random()*100000),
                    locked: 0
                }
            }
        },
    });


    return NextResponse.json({message: "User created successfully"}, {status: 201});
} catch(error){
    return NextResponse.json({message: "Something went wrong", error}, {status: 500}); 
}
}