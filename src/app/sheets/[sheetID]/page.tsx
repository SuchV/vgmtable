"use client";

import { Button } from "@/components/ui/button";
import { PDFDocument } from "pdf-lib";
import * as fs from "fs";

async function modifyPdf(url: string) {
    const formPdfBytes = await fetch(url).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const pdfBytes = await pdfDoc.save();
    await fetch("/api/sheets",{
        method: "POST",
        body: JSON.stringify({pdfBytes: pdfBytes, url: "/sheet3.pdf"})
    });
}


interface SheetPageProps {
    params: {
        sheetID: string,
    }
}


export default function Page({
    params,
}: SheetPageProps) {
    return (
        <div className="text-cyan-600 w-full h-full">
            <Button onClick={() => modifyPdf(`/${params.sheetID}.pdf`)}>Save</Button>
            <object className="w-full h-full" data={`/${params.sheetID}.pdf`} type="application/pdf">
            </object>
        </div>
    );
}