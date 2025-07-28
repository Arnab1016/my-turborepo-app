import { type JSX } from "react";
import { Transaction } from "./TransferPage";

export default function DisplayTransaction({transactions}: {transactions: Transaction[]
}): JSX.Element {
    if(!transactions.length) {
            return (
            <div className="flex flex-col justify-around gap-y-6 bg-white border-none rounded-lg w-lg h-36">
                <div className="mx-4">
                    <h3 className="text-zinc-600 text-lg font-semibold font-mono">No recent transactions</h3>
                </div>
            </div>
            )
        }
    return (
        <div className="flex flex-col justify-around overflow-y-auto gap-y-6 bg-white border-none rounded-lg w-lg h-36 pt-2">
            <div className="border-b-1 mx-4">
                <h3 className="text-zinc-600 text-lg font-semibold font-mono">Recent transactions</h3>
            </div>
            <div className="mx-4">
                {transactions.map((t, index) => {
                    
                if(t.status === "Success") {
                return(    
                <div key={index} className="flex justify-between place-items-center space-y-2">
                    <div className="grid gap-1">
                        <div className="font-semibold">
                            Received INR
                        </div>
                        <div className="text-slate-600 text-xs font-semibold">
                            {new Date(t.time).toDateString()}
                        </div>
                    </div>
                    <div className="text-center text-sm font-semibold font-mono">
                        +Rs {t.amount/100}
                    </div>
                </div>)
                } else if(t.status === "Processing") {
                return(    
                <div key={index} className="flex justify-between place-items-center space-y-2">
                    <div className="grid gap-1">
                        <div className="font-semibold">
                            Processing INR
                        </div>
                        <div className="text-slate-600 text-xs font-semibold">
                            {new Date(t.time).toDateString()}
                        </div>
                    </div>
                    <div className="text-center text-sm font-semibold font-mono">
                        +Rs {t.amount/100}
                    </div>
                </div>)
                }
                return(
                <div key={index} className="flex justify-between place-items-center space-y-2">
                    <div className="grid gap-1">
                        <div className="font-semibold">
                           Transaction Failed
                        </div>
                        <div className="text-slate-600 text-xs font-semibold">
                            {new Date(t.time).toDateString()}
                        </div>
                    </div>
                    <div className="text-center text-sm font-semibold font-mono">
                        +Rs {t.amount/100}
                    </div>
                </div>
                )
            }    
            )}
            </div>
        </div>
    )
}