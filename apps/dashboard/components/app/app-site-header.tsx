"use client";

import { ThemeToggle } from "./theme-toggler";

export function TopNavbar() {
  return (
    <header className="rounded shadow-2xs relative left-0 top-0 z-40 w-full h-16 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-6 h-full">
        <div className="text-xl font-bold flex">Sectopia</div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
