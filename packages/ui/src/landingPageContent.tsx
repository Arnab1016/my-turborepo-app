import { type JSX } from "react";
import { PrimaryButton } from "./button";

export function Content({onSignUp}: {onSignUp: () => void}): JSX.Element {
    return (
        <div className="h-screen bg-gradient-to-b from-purple-950 to-white">
            <div className="flex flex-col justify-center items-center space-y-4 text-white">
                <div className="text-xs font-light my-4">INTRODUCING</div>
                <div className="text-2xl font-bold font-mono">PhonePe</div>
                <div className="grid gap-y-1 place-items-center">
                    <div className="text-2xl text-[#cfb94a] font-bold">ACCEPT PAYMENTS FOR YOUR ONLINE BUSINESS AT ZERO COST</div>
                    <div className="text-white font-sans font-semibold text-base">Sign up for PhonePe Payment Gateway</div>
                </div>
                <div className="bg-white border-none rounded-full text-black font-semibold text-sm px-3 py-2">
                    <PrimaryButton label={"Get Started"} onClick={onSignUp}/>
                </div>
            </div>
        </div>
    )
}