import { type JSX } from "react";
import { PrimaryButton } from "./button";

export function DashboardAppbar({onSignOut}: {onSignOut: () => void}): JSX.Element {
    return (
        <div className="fixed top-0 left-0 right-0 z-40 flex justify-between bg-white p-2 border-b-1">
            <div className="flex justify-center m-2 mx-6">
                <h3 className="ml-4 text-2xl text-purple-800 font-sans font-bold">PhonePe</h3>
            </div>
            <div className="flex place-items-center space-x-6">
                <div className="bg-purple-700 hover:bg-purple-800 text-white border-none rounded-full font-semibold text-xs px-2 py-1.5">
                    <PrimaryButton label={"Buy crypto"}/>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-zinc-700 hover:cursor-pointer hover:text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-zinc-700 hover:cursor-pointer hover:text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5  text-zinc-700 hover:cursor-pointer hover:text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
                <div className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold border-none rounded-lg p-2">
                    <PrimaryButton label={"Log out"} onClick={onSignOut}/>
                </div>
            </div>
        </div>
    )
}