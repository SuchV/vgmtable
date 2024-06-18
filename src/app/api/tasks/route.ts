import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// change completed2 to something humane

export async function POST(req: Request) {
    try {
        const { title, completed } = await req.json();
        const completed2 = Boolean(completed);
        const todotask = await db.todoTask.create({
            data: {
                title,
                completed: completed2,
            }
        });
        return NextResponse.json(todotask);
    } catch (error) {
        console.log(error);
        return new NextResponse("internal error", { status: 500 });
    }
}

// export async function GET() {
//     try {
//         const todos = await db.todoTask.findMany({
//             where: {},
//         });
//         return NextResponse.json(todos);
//     } catch (error) {
//         console.log(error);
//         return new NextResponse("internal error", { status: 500 });
//     }
// }