import { Adventure } from "@prisma/client";

interface AdventurePageProps {
    params: {
        adventureID: string,
    }
}


export default function Page({
    params,
}: AdventurePageProps) {
    return (
        <div className="text-cyan-600 w-full h-full">
            {params.adventureID}
        </div>
    );
}