
import { type JSX } from "react"

type InputProps = {
    label : string,
    type: string,
    placeholder: string,
    onChange: (value: string) => void
}

export function InputBox({label, type, placeholder, onChange}: InputProps): JSX.Element {
    return (
        <div className="grid gap-2">
            <label>{label}</label>
            <input type={type} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="pl-2 py-2 border border-zinc-300 h-30% rounded-sm focus:outline-blue-400/80"/>
        </div>
    )
} 

export function SecondaryInputBox({label, type, placeholder, onChange}: InputProps): JSX.Element {
    return (
        <div className="grid gap-2">
            <label>{label}</label>
            <input type={type} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="border-none rounded-lg bg-gray-100 h-9 pl-2"/>
        </div>
    )
}