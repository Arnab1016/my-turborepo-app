"use client"

type BottomParaProps = {
    label: string,
    linkText: string,
    onClick: () => void
}

export function BottomPara({label, linkText, onClick}: BottomParaProps) {
    return(
        <div className="flex justify-center">
           <p className="text-sm font-sans text-gray-500">{label}<span className="text-xs text-blue-400 font-medium hover: cursor-pointer" onClick={onClick}>{linkText}</span></p>
        </div>
    );
}