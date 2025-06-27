'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinkClass = (path: string) =>
    `px-4 py-2 rounded ${
      pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-blue-600 hover:bg-blue-100'
    }`;

  return (
    <nav className="flex justify-center gap-4 py-4 border-b mb-6">
      <Link href="/" className={navLinkClass('/')}>
        Home
      </Link>
      <Link href="/contact" className={navLinkClass('/contact')}>
        Contact
      </Link>
    </nav>
  );
}
