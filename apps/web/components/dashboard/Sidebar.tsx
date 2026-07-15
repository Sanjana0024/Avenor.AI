"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BrainCircuit,
  FolderKanban,
  Workflow,
  Settings,
} from "lucide-react";

const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "AI Workspace",
    icon: BrainCircuit,
    href: "/workspace",
  },
  {
    title: "Projects",
    icon: FolderKanban,
    href: "/projects",
  },
  {
    title: "Workflows",
    icon: Workflow,
    href: "/workflows",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-background p-6">
      <h1 className="mb-10 text-2xl font-bold">Avenor</h1>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-accent"
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}