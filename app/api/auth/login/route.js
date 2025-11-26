import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/hash";
import { signToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return new Response(JSON.stringify({ error: "Usuario no encontrado" }), {
      status: 401,
    });
  }

  const valid = await verifyPassword(password, user.password);

  if (!valid) {
    return new Response(JSON.stringify({ error: "Contraseña incorrecta" }), {
      status: 401,
    });
  }

  const token = await signToken({ id: user.id, email: user.email });

  cookies().set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return Response.json({ message: "Login exitoso" });
}
