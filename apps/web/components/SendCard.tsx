"use client"

import { SecondaryInputBox } from "@repo/ui/input"
import { Header } from "@repo/ui/header"
import { PrimaryButton } from "@repo/ui/button"
import { PeerTransaction } from "../app/lib/actions/p2pTransaction"
import { useState } from "react"

export function SendCard() {

    const[amount, setAmount] = useState(0);
    const[number, setNumber] = useState("");

    return (
        <div className="flex flex-col justify-center gap-y-4 w-2/6 h-72 border-none rounded-lg bg-white px-4 py-2">
            <Header title={"Send Money"}/>
            <SecondaryInputBox label={"Phone No"} type={"text"} onChange={(value) => setNumber(value)} placeholder={""}/>
            <SecondaryInputBox label={"Amount"} type={"number"} onChange={(value) => setAmount(Number(value))} placeholder={""}/>
            <div className="bg-cyan-600 text-white font-semibold border-none rounded-lg p-2 hover:bg-cyan-700">
                <PrimaryButton label={"Send"} onClick={async() => {
                    await PeerTransaction(number, amount * 100)
                }}/>
            </div>
        </div>
    )
}