import TransferComp from "../../components/TransferPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { prisma } from "@repo/db";







const getOnRampTransactions = async() => {
    const session = await getServerSession(authOptions);
    if(!session){
        return null;
    }
    const txns =  await prisma.onRampTransaction.findMany({
        where: { userId: session.user.id }
    })

    return txns.map(t => ({
        time: t.startTime.toISOString(),
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

const getUserBalance = async() => {
    const session = await getServerSession(authOptions);
    if(!session){
        return null;
    }
    const balance = await prisma.balance.findFirst({
        where: {
            userId: session.user.id
        }
    })

     return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

export default async function Page() {

    const session = await getServerSession(authOptions);
    const transactions = await getOnRampTransactions();
    const balance = await getUserBalance();

    if(!session || !transactions || !balance){
        return <div>Please log in to view your transactions.</div>
    }
    return (
        <div>
            <TransferComp transactions={transactions} balance={balance} user={session?.user?.name ?? ""}/>
        </div>
    )
}