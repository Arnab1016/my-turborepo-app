"use client"

import { type JSX } from "react"
import { DashboardAppbar } from "@repo/ui/dashboardAppbar"
import { DashboardSidebar } from "@repo/ui/dashboardSidebar"
import { Card } from "@repo/ui/dashboardCard"
import Link from "next/link"
import { signOut } from "next-auth/react"

export default function Dashboard({user}: {user: string}): JSX.Element {

    return(
        <div className="h-screen bg-gray-100">
            <DashboardAppbar onSignOut={() => {
                signOut({callbackUrl: "http://localhost:3000"}) 
            }}/>
            <DashboardSidebar LinkComponent={Link}/>
            <Card label={`Good afternoon, ${user}`}/>
        </div>
    );
}