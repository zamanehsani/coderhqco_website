"use client";

import Link from "next/link";

export function FooterLogo() {
  return (
    <Link href="/" className="text-2xl font-bold tracking-tighter">
      CODERHQ<span className="text-neutral-400">.CO</span>
    </Link>
  );
}
