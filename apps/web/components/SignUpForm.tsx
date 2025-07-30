"use client"

import { useState, type JSX } from "react"
import { InputBox } from "@repo/ui/input";
import { Header } from "@repo/ui/header";
import { Button } from "@repo/ui/buttonSubmit";
import { BottomPara } from "@repo/ui/bottomPara"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const submitUser = async(email: string, name: string, number: string, password: string) => {
    

    const response = await fetch('/api/signup',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            name: name,
            number: number,
            password: password
        })
    })

    if(response.ok){
        const data = await response.json();
        console.log(data);
    } else{
        console.error("Registration failed");
    }
    console.log("submitUser fn called");
};



export default function SignUpForm(): JSX.Element {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="bg-zinc-200 h-screen flex flex-col justify-center items-center">
            <div className="grid gap-4 px-6 py-8 w-94 h-80% border rounded-lg border-none shadow-lg bg-white">
                <Header title={"Create an account"}></Header>
                <form className="space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    submitUser(email, name, number, password);
                    router.push('/');
                }}>
                    <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} type={"email"} onChange={(value) => setEmail(value)}></InputBox>
                    <InputBox label={"Name"} placeholder={"John Doe"} type={"text"} onChange={(value) => setName(value)}></InputBox>
                    <InputBox label={"Phone no"} placeholder={"0-123-456-789"} type={"text"} onChange={(value) => setNumber(value)}></InputBox>
                    <InputBox label={"Password"} placeholder={"••••••••••"} type={"password"} onChange={(value) => setPassword(value)}></InputBox>
                    <Button label={"Sign up"} type={"submit"}></Button>
                </form>
                <BottomPara label={"Already have an account? "} linkText={"Login here"} onClick={() => {signIn()}}/>
            </div>
        </div>
    );
}