import { PrismaClient } from "@prisma/client";
import { hashPassword } from "@/lib/hash";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password, name } = await req.json();

    const hashed = await hashPassword(password);

    await prisma.user.create({
      data: {
        email,
        password: hashed,
        name,
        role: "student"
      }
    });

    return new Response(
      JSON.stringify({ message: "Usuario creado" }),
      { status: 201 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error al registrar usuario" }),
      { status: 400 }
    );
  }
}
