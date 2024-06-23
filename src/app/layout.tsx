import NavBar from "@/components/NavBar"
import { Metadata } from "next"
import "../index.css";
import ModalProvider from "@/components/Providers/modal-provider";

export const metadata: Metadata = {
    title: 'VGMTable',
    description: 'Manager app for VGMs',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="w-full h-screen bg-slate-900 flex flex-col ">
                <ModalProvider />
                <NavBar />
                {children}
            </body>
        </html>
    )
}