"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Avenor
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Product
          </Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Solutions
          </Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Resources
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}