import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({"Message" : "Hello"});
    } catch (error) {
        console.log(error);
        return new NextResponse("internal error", {status:500});
    }
}