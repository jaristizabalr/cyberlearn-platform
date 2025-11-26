"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@/hooks/useUser";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser() as { user: any };

  const [open, setOpen] = useState(false);

  const displayName: string = user?.name
    ? user.name
    : user?.email
    ? String(user.email).split("@")[0]
    : "Invitado";

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/courses", label: "Cursos" },
    { href: "/library", label: "Biblioteca" },
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // ignoramos errores de red
    } finally {
      router.push("/");
    }
  };

  return (
    <nav className="w-full bg-sky-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo + nombre */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-amber-400 flex items-center justify-center text-xs font-bold text-slate-900">
            CL
          </div>
          <div className="leading-tight">
            <h1 className="text-sm font-semibold">CyberLearn</h1>
            <p className="text-[11px] text-sky-100">
              Estudio y validación en ciberseguridad
            </p>
          </div>
        </div>

        {/* Navegación + usuario */}
        <div className="flex items-center gap-4">
          {/* Links principales */}
          <div className="hidden md:flex items-center gap-4 text-xs">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href
                    ? "font-semibold text-white border-b border-amber-400 pb-0.5"
                    : "text-sky-100 hover:text-white hover:border-b hover:border-sky-100 pb-0.5 transition"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Usuario + dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-2"
            >
              <div className="hidden sm:flex flex-col items-end leading-tight">
                <span className="text-xs font-semibold">{displayName}</span>
                <span className="text-[11px] text-sky-100">
                  {user ? "Usuario" : "Invitado"}
                </span>
              </div>
              <div className="h-8 w-8 rounded-full bg-sky-900 flex items-center justify-center text-xs font-bold border border-sky-600">
                {displayName.charAt(0).toUpperCase()}
              </div>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white text-slate-800 shadow-lg border border-slate-200 text-sm z-20">
                <Link
                  href="/profile"
                  className="block px-3 py-2 text-xs hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-xs text-red-600 hover:bg-slate-100"
                >
                  Salir
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nav compacto para móvil */}
      <div className="md:hidden border-t border-sky-700">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-around text-[11px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "font-semibold text-white"
                  : "text-sky-100 hover:text-white transition"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
