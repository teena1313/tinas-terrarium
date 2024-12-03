import Link from "next/link";

export default function Navbar() {
    return (
        <ul className="hidden md:flex items-center justify-center space-x-4 text-lg font-medium">
            <li className="md:hover:underline">
            <Link href="/miniProj/deepSkyObjects">DSOs</Link>
            </li>
            <li className="md:hover:underline">
            <Link href="/miniProj/dogFacts">Dogs</Link>
            </li>
        </ul>
    );
}