
import { type JSX } from "react"

export function Header({title}: {title: string}): JSX.Element {
    return(
        <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold">{title}</h1>
        </div>
    );
}