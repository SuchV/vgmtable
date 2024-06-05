import Link from "next/link";
import Image from "next/image";
import NavBarIcon from "@/src/app/assets/navbarIcon.svg";

export default function NavBar() {
    return (
        <nav className="w-full h-20 flex items-center justify-between flex-shrink-0 bg-green-600 p-4 text-white ">
            <div className="max-w-40 h-full">
                <span className="h-full font-semibold text-4xl tracking-tight">
                    <Link href="/" className="h-full flex gap-1 items-center">
                        <Image
                            src={NavBarIcon}
                            alt="Navbar Logo"
                            className="h-full"
                        />
                        VGMTable
                    </Link>
                </span>
            </div>
            <div className="flex gap-4">
                <Link href="/sheets">
                    Sheets
                </Link>
                <Link href="/tasks">
                    Tasks
                </Link>
                <Link href="/adventures">
                    Adventures
                </Link>
            </div>
        </nav>
    );
}