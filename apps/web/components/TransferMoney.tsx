"use client"

import { useState, type JSX } from "react";
import { SecondaryInputBox } from "@repo/ui/input"
import { SelectElement } from "@repo/ui/select"
import { PrimaryButton } from "@repo/ui/button"
import { onRampTransaction } from "../app/lib/actions/createOnRampTxn";
import { useRouter } from "next/navigation";

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}, {
    name: "SBI",
    redirectUrl: "https://www.onlinesbi.sbi/"
}, {
    name: "ICICI Bank",
    redirectUrl: "https://www.icicibank.com/"
}]


export default function TransferMoney(): JSX.Element {

    const router = useRouter();

    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0].redirectUrl || "");
    const [amount, setAmount] = useState(0);
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0].name || "");

    return (
        <div className="mx-4">
            <ul className="space-y-4">
                <li className="flex flex-col justify-between">
                    <SecondaryInputBox label={"Amount"}  type={"number"} onChange={(value) => setAmount(Number(value))}/>
                </li>
                <li className="flex flex-col justify-between">
                    <span className="text-gray-500 font-semibold">Bank</span>
                    <SelectElement onSelect={(value) => {
                    setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "");
                    setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || "");
                    }} options={SUPPORTED_BANKS.map(x => ({
                        key: x.name,
                        value: x.name
                    }))}/>
                </li>
                <li className="bg-purple-700 border-none rounded-full text-white text-sm w-1/4 p-2">
                    <PrimaryButton label={"Transfer"} onClick={async() => {
                        await onRampTransaction(amount * 100, provider);
                        router.push(redirectUrl);
                    }}/>
                </li>
            </ul>
        </div>
    )
}