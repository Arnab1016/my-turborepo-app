// import { getServerSession } from "next-auth";
// import { authOptions } from "../../lib/auth";
// import { prisma } from "@repo/db"
// import { NextResponse } from "next/server";

// export async function GET() {
//     const session = await getServerSession(authOptions);

//     if(!session || !session.user) {
//         return NextResponse.json({transactions:[], error: "User not found"}, {status: 401});
//     }

//     const transactions = await prisma.onRampTransaction.findMany({
//         where: { userId: session.user.id }
//     });

//     return NextResponse.json({transactions});
// }