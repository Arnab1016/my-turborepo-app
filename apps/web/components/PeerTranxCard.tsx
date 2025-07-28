import { type JSX } from "react";
import { type PeerTranxProps } from "./PeerTranxPage";

export function PeerTranxCard({peerTransactions, toUsers}: PeerTranxProps): JSX.Element{
    if(!peerTransactions.length) {
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
                 <h3 className="text-zinc-600 text-lg font-semibold font-mono">Transaction history</h3>
            </div>
            <div className="mx-4">
                {peerTransactions.map((tx, index) => (
                    <div key={index} className="flex justify-between place-items-center space-y-2">
                    <div className="grid gap-1">
                        <div className="font-semibold">
                            Paid to {toUsers[tx.toUserId] ?? "Unknown"}
                        </div>
                        <div className="text-slate-600 text-xs font-semibold">
                            {new Date(tx.time).toDateString()}
                        </div>
                    </div>
                    <div className="text-center text-sm font-semibold font-mono">
                        Rs {tx.amount/100}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}