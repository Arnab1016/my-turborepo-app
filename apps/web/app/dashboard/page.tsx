import Dashboard  from "../../components/DashboardComp";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";



export default async function Page() {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <Dashboard user={session.user.name}/>
        </div>
    )
}