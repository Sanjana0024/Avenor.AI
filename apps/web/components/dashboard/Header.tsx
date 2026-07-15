"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-8">
        <div className="relative w-96">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Search projects..."
            className="pl-10"
          />
        </div>

        <div className="flex items-center gap-5">
          <Bell className="h-5 w-5 cursor-pointer" />

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
            S
          </div>
        </div>
      </div>
    </header>
  );
}