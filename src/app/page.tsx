import Link from "next/link";
import { Button } from "@/components/ui/button"


export default function Page() {
    return (
        <main className="h-full">
                <Button variant="outline" className="">
                    <Link href="/sheets/1">
                        Sheets
                    </Link>
                </Button>
                <Button variant="outline" className="">
                    <Link href="/tasks">
                        Tasks
                    </Link>
                </Button>
                <Button variant="outline" className="">
                    <Link href="/adventures">
                        Adventures
                    </Link>
                </Button>
                <Button variant="outline" className="">
                    <Link href="/">
                        Placeholder
                    </Link>
                </Button>
        </main>
    );
};