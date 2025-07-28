"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { prisma } from "@repo/db";
import crypto from 'crypto';

export const onRampTransaction = async(amount: number, provider: string) => {
    const session = await getServerSession(authOptions);

    if(!session.user){
        return {
            message: "Unauthenticated request"
        }
    }

    const userId = session?.user?.id;
    const token = crypto.randomBytes(32).toString('hex');

    await prisma.onRampTransaction.create({
        data: {
            provider: provider,
            status: "Processing",
            startTime: new Date(),
            userId: userId,
            token: token,
            amount: amount
        }
    })

    return {
        message: "Done"
    }
}

