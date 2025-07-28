import { PrismaClient } from "../generated/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.upsert({
        where: { number: "7850648578"},
        update: {},
        create: {
            email: "sumanadas@gmail.com",
            name: "Sumana Das",
            number: "7850648578",
            password: await bcrypt.hash("dassumana", 10),
            balance: {
                create: {
                    amount: 2500,
                    locked: 0
                }
            },
            onRampTrans: {
                create: {
                    status: "Success",
                    amount: 900,
                    token: "token-1",
                    provider: "HDFC Bank",
                    startTime: new Date()
                }
            },
        }
    })

    await prisma.user.upsert({
        where: { number: "8596484547" },
        update: {},
        create: {
            email: "anikbiswas@gmail.com",
            name: "Anik Biswas",
            number: "8596484547",
            password: await bcrypt.hash("biswasanik", 10),
            balance: {
                create: {
                    amount: 58000,
                    locked: 0
                }
            },
            onRampTrans: {
                create: {
                    status: "Success",
                    amount: 12000,
                    token: "token-2",
                    provider: "Axis Bank",
                    startTime: new Date(),
                }
            }
        }
        
    })
}

main()
.then(async() => {
    await prisma.$disconnect();
})
.catch(async(e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})
