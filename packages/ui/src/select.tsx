"use client"
import { type JSX } from "react";

interface SelectProps {
    options: {
        key: string,
        value: string
    }[],
    onSelect: (value: string) => void
}


export function SelectElement({options, onSelect}: SelectProps): JSX.Element {
    return (
        <select className="border-none rounded-lg bg-gray-100 h-9 pl-2 text-sm font-semibold" onChange={(e) => onSelect(e.target.value)}>
            {options.map((option, index) => <option key={index} value={option.key}>{option.value}</option>)}
        </select>
        
    )
}