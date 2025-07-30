import { PeerTranxComp } from "../../components/PeerTranxPage"; 
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { prisma } from "@repo/db"

const getPeerToPeerTranxs = async() => {
    const session = await getServerSession(authOptions);
    if(!session) {
        return null;
    }
    const peerTrnxs = await prisma.p2PTransaction.findMany({
        where: {
            fromUserId: session.user.id
        }
    })

    return peerTrnxs.map(tx => ({
        amount: tx.amount,
        time: tx.timeStamp.toISOString(),
        toUserId: tx.toUserId
    }));
}

const getToUserInfo = async(userIds: string[]) => {
    const users = await prisma.user.findMany({
        where: {
            id: { in: userIds }
        },
        select: {
            id: true,
            name: true
        }
    })

    return Object.fromEntries(users.map(u => [u.id, u.name ?? ""]));
}


export default async function () {
    const peerTrnxs = await getPeerToPeerTranxs();
    if(!peerTrnxs){
        return <div>Please log in to view your transactions.</div>
    }
    const toUsers = await getToUserInfo(peerTrnxs.map(t => t.toUserId));
    return (
        <div>
            <PeerTranxComp peerTransactions={peerTrnxs} toUsers={toUsers}/>
        </div>
    )
}