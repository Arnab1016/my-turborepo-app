import express , { Request, Response }  from "express";
import { prisma } from "@repo/db";

const app = express();

app.use(express.json());

app.post("/bank-webhook", async(req: Request, res: Response) => {

    const paymentInfo: {
        token: string,
        amount: number,
        userId: string
    } = {
        token: req.body.token,
        amount: req.body.amount,
        userId: req.body.userId
    }


try{
    const response = await prisma.onRampTransaction.findFirst({
        where: {
            token: paymentInfo.token
        },
        select:{
            status: true
        }
    })

    if(response.status === "Processing") {

    await prisma.$transaction([
    prisma.balance.update({
        where: {
            userId: paymentInfo.userId
        },
        data: {
            amount: {
                increment: paymentInfo.amount*100
            }
        }
    }),

    prisma.onRampTransaction.update({
        where: {
            token: paymentInfo.token
        },
        data: {
            status: "Success"
        }
    })
]);
    return  res.status(200).json({message: "Captured"});
}
    return res.status(200).json({message: "Transaction already completed"});
} catch(error) {
try{
    await prisma.onRampTransaction.update({
        where: {
            token: paymentInfo.token
        },
        data: {
            status: "Failure"
        }
    })
} catch(innerErr){
    console.error({message: "Failed to mark transaction as failed:", innerErr})
}
    console.error("Transaction failed", error);
    res.status(411).json({error: "Failed to capture payment"})
}
})

app.listen(3003, () => { console.log("web-hook server is running on port 3003")})