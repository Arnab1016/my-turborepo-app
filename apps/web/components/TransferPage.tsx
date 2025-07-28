"use client"

import { type JSX } from "react"
import { DashboardAppbar } from "@repo/ui/dashboardAppbar"
import { DashboardSidebar } from "@repo/ui/dashboardSidebar"
import Link from "next/link"
import { signOut } from "next-auth/react"
import TransferMoney from "./TransferMoney"
import BalanceCard from "./BalanceCard"
import DisplayTransaction from "./TranxCard"
// import { getServerSession } from "next-auth"
// import { authOptions } from "../app/lib/auth"
// import { prisma } from "@repo/db"


export type Transaction = {
    time: string,
    amount: number,
    provider: string,
    status: string
}

export type Balance = {
    locked: number,
    amount: number
}

export default function TransferComp({transactions, balance, user}: {transactions: Transaction[], balance: Balance, user: string}): JSX.Element {


    return (
        <div className="h-screen bg-gray-100">
            <DashboardAppbar onSignOut={() => {
                signOut({callbackUrl: "http://localhost:3000"}) 
            }}/>
            <DashboardSidebar LinkComponent={Link}/>
            <div>
            <div className='mt-12 ml-60 grid gap-y-2 h-screen'>
                <div className='flex place-items-center'>
                    <h1 className='text-2xl text-purple-800 font-bold'>Good afternoon, {user}</h1>
                </div>
                <div className='flex space-x-6'>
                    <div className='flex flex-col justify-center gap-y-6 w-3/6 h-96 border-none rounded-lg bg-white p-4'>
                        <div className="flex justify-center place-items-center">
                                <h4 className="text-center border-none rounded-full bg-gray-200 p-2 font-bold text-purple-600 w-5/12">Transfer Money</h4>
                        </div>
                        <TransferMoney/>
                    </div>
                    <div className="flex flex-col justify-around">
                        <BalanceCard amount={balance.amount} locked={balance.locked}/>
                        <DisplayTransaction transactions={transactions}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}