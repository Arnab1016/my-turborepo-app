import { type JSX } from "react";

interface ButtonProps {
    label: string,
    onClick: () => void
}

export function PrimaryButton({label, onClick}: ButtonProps): JSX.Element {
    return (
        <button className="w-full hover:cursor-pointer" onClick={onClick}>{label}</button>
    )
}

export function SecondaryButton({label, onClick}: ButtonProps): JSX.Element {
    return (
        <button className="w-full text-zinc-900 hover:text-purple-500 hover:cursor-pointer" onClick={onClick}>{label}</button>
    )
}