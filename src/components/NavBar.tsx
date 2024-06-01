import Link from "next/link";


export default function NavBar() {
    return (
        <div className="w-full justify-center flex h-20 bg-orange-300 p-4 text-white ">
            {/* <h1 className="h-full">VGMTable</h1> */}
            <p className="flex gap-4 items-center justify-center">
                <Link href="/sheets">
                    sheets
                </Link>
                <Link href="/sheets">
                    sheets
                </Link>
                <Link href="/sheets">
                    sheets
                </Link>
            </p>
        </div>
    );
}