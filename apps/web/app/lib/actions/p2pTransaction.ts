"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import { prisma } from "@repo/db"



export const PeerTransaction = async (toNumber: string, amount: number) => {
    const session = await getServerSession(authOptions);
    const fromUser = await prisma.user.findUnique({
        where: {
            id: session.user.id
        }
    })
    if(!fromUser) {
        return {
            message: "Error while sending money"
        }
    }

    const toUser = await prisma.user.findUnique({
        where: {
            number: toNumber
        }
    })
    if(!toUser) {
        return {
            message: "User not found"
        }
    }

    await prisma.$transaction( async(tx) => {
        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${fromUser.id} FOR UPDATE`;

        const fromBalance = await tx.balance.findUnique({
            where: { userId: fromUser.id}
        })
        console.log("Transaction Initiated");
        if(!fromBalance || fromBalance.amount < amount){
            throw new Error("Insufficient balance")
        }

        await tx.balance.update({
            where: {
                userId: fromUser.id
            },
            data: {
                amount: {decrement: amount}
            }
        });

        await tx.balance.update({
            where: {
                userId: toUser.id
            },
            data: {
                amount: {increment: amount}
            }
        });

        await tx.p2PTransaction.create({
            data:{
                amount: amount,
                fromUserId: fromUser.id,
                toUserId: toUser.id,
                timeStamp: new Date()
            }
        });
})
} 