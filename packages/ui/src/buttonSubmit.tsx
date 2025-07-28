"use client"

import { type JSX } from "react";

// import { ReactNode } from "react";

interface ButtonProps {
  label: string,
  type: string
}

export function Button({label, type}: ButtonProps): JSX.Element {
  return (
    <div className="text-xl font-semibold border-none rounded-md  py-2 bg-green-600 hover:bg-green-700">
      <button type={type} className="w-full text-white hover:cursor-pointer">{label}</button>
    </div>
  );
};
