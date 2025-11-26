import "./globals.css";
import React from "react";
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "CyberLearn",
  description: "Plataforma de estudio en ciberseguridad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* El fondo degradado lo controla globals.css */}
      <body className="min-h-screen">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
