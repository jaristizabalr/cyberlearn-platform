"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import React from "react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Página de login (inicio) → no navbar
  const isLogin = pathname === "/";

  return (
    <>
      {!isLogin && <Navbar />}
      {/* El main se mantiene igual para todas las páginas */}
      <main className="max-w-6xl mx-auto p-4 md:p-6">{children}</main>
    </>
  );
}
