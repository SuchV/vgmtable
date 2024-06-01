import { NextResponse } from "next/server";
import * as fs from "fs";

export async function POST(req: Request) {
    try {
        const { pdfBytes, url } = await req.json();
        fs.writeFile(url, new Uint8Array(pdfBytes), () => {});
        return NextResponse.json({});
    } catch (error) {
        console.log(error);
        return new NextResponse("internal error", { status: 500 });
    }
}