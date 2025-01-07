"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (!pathname.includes("/studio")) {
    return (
      <nav className="border-b sticky top-0 bg-darkgreen text-primary-100 border-primary-800 z-10">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 p-4 mx-auto md:px-10 items-center justify-between">
          <Link href="/" className="font-semibold text-xl md:hover:underline">
            Tina's Terrarium
          </Link>
          <ul className="hidden md:flex items-center justify-end space-x-4 text-sm font-medium">
            <li className="md:hover:underline">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/art">Art</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/miniProj">Mini Projects</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
