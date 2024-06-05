import NavBar from "@/components/NavBar"
import { Metadata } from "next"
import "../index.css";

export const metadata: Metadata = {
    title: 'VGMTable',
    description: 'Fine app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="w-full h-screen bg-slate-900 flex flex-col ">
                <NavBar />
                {children}
            </body>
        </html>
    )
}