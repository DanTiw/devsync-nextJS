"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-foreground">
          DevSync
        </Link>
        
        <nav className="flex items-center space-x-4 text-foreground">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/settings">Settings</Link>
          <Button
            variant="outline"
            onClick={() => {
              // TODO: Implement logout
            }}
          >
            Logout
          </Button>
        </nav>
      </div>
    </header>
  );
} 