import Link from "next/link";
import { Button } from "@/components/ui/button"
import { FaShoePrints, FaHammer, FaTasks, FaPortrait } from "react-icons/fa";

export default function Page() {
    return (
        <main className="h-screen m-8 flex flex-wrap flex-grow overflow-auto gap-4 justify-center items-center">
            <div className="flex flex-col gap-4 flex-grow h-full w-full sm:w-1/2 md:w-1/4">
                <Button variant="secondary" className="p-0 flex-grow bg-slate-800 hover:bg-slate-700 text-white font-semibold text-4xl tracking-tight">
                    <Link href="/sheets/sheet2" className="flex h-full w-full justify-center items-center">
                        <FaPortrait />
                        <span className="px-2">Sheets</span>
                    </Link>
                </Button>
                <Button variant="secondary" className="flex-grow bg-slate-800 hover:bg-slate-700 text-white font-semibold text-4xl tracking-tight">
                    <Link href="/tasks" className="flex h-full w-full justify-center items-center">
                        <FaTasks />
                        <span className="px-2">Tasks</span>
                    </Link>
                </Button>
            </div>
            <div className="flex flex-col gap-4 flex-grow h-full w-full sm:w-1/2 md:w-1/4 bg">
                <Button variant="secondary" className="flex-grow bg-slate-800 hover:bg-slate-700 text-white font-semibold text-4xl tracking-tight">
                    <Link href="/adventures" className="flex h-full w-full justify-center items-center">
                        <FaShoePrints />
                        <span className="px-2">Adventures</span>
                    </Link>
                </Button>
                <Button variant="secondary" className="flex-grow bg-slate-800 hover:bg-slate-700 text-white font-semibold text-4xl tracking-tight">
                    <Link href="/" className="flex h-full w-full justify-center items-center">
                        <FaHammer  />
                        <span className="px-2">Placeholder</span>
                    </Link>
                </Button>
            </div>
        </main>
    );
};