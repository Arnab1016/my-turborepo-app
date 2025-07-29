"use client"

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Appbar } from "@repo/ui/appbar";
import { Content } from '@repo/ui/landingPageContent' 




export function LandingPage() {
    const router = useRouter();

    return(
        <div className='grid'> 
            <Appbar onSignIn={signIn} onSignUp={() => {router.push('/sign-up')}}/>
            <Content onSignUp={() => {router.push('/sign-up')}}/>
        </div>
    )
}