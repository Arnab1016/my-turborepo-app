"use client"

import { type JSX } from "react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { DashboardAppbar } from "@repo/ui/dashboardAppbar"
import { DashboardSidebar } from "@repo/ui/dashboardSidebar"
import { SendCard } from "./SendCard"
import { PeerTranxCard } from "./PeerTranxCard"

type PeerTransaction = {
    amount: number,
    time: string,
    toUserId: string
}

export type PeerTranxProps = {
    peerTransactions: PeerTransaction[],
    toUsers: Record<string, string>
}

export function PeerTranxComp({peerTransactions, toUsers}: PeerTranxProps): JSX.Element {
    return(
        <div className="h-screen bg-gray-100">
            <DashboardAppbar onSignOut={() => {
                signOut({callbackUrl: "http://localhost:3000"}) 
            }}/>
            <DashboardSidebar LinkComponent={Link}/>
            <div className='mt-12 ml-60 flex justify-around items-center h-screen'>
                <SendCard/>
                <PeerTranxCard peerTransactions={peerTransactions} toUsers={toUsers}/>
            </div>
        </div>
    )
}