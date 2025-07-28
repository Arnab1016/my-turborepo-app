import { type JSX } from "react";

export default function BalanceCard({amount, locked}: {
    amount: number;
    locked: number;
}): JSX.Element {
    
    return (
        <div className='flex flex-col justify-around gap-y-6 bg-white border-none rounded-lg w-lg h-48'>
            <div className="flex justify-center place-items-center">
                <h4 className="text-center border-none rounded-full bg-gray-200 p-2 font-bold text-purple-600 w-5/12">Balance</h4>
            </div>
            <div className="mx-4">
                <ul>
                    <li className="flex justify-between border-b-1">
                        <span className="text-gray-500 font-semibold">Unlocked Balance</span>
                        <span className="font-mono">{amount/100}</span>
                    </li>
                    <li className="flex justify-between border-b-1">
                        <span className="text-gray-500 font-semibold">Locked Balance</span>
                        <span className="font-mono">{locked/100}</span>
                    </li>
                    <li className="flex justify-between border-b-1">
                        <span className="text-gray-500 font-semibold">Total Balance</span>
                        <span className="font-mono">{(locked+amount)/100}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}