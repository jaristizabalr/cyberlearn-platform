import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const pass = await bcrypt.hash("admin123", 10);
    await prisma.user.upsert({
      where: { email: "admin@cyberlearn.test" },
      update: {},
      create: { name: "Admin", email: "admin@cyberlearn.test", password: pass, role: "admin" }
    });

    await prisma.course.createMany({
      data: [
        { title: "Ciberseguridad Básica", description: "Fundamentos", category: "Fundamentos" },
        { title: "Protección de Datos (Ley 1581)", description: "Normativa", category: "Legal" },
        { title: "Gestión de Incidentes", description: "Respuesta", category: "Operacional" }
      ]
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message });
  } finally {
    await prisma.$disconnect();
  }
}
