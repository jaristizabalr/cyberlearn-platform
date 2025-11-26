import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export async function GET() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return new Response(JSON.stringify({ user: null }), { status: 401 });
  }

  try {
    const payload = await verifyToken(token);
    return Response.json({ user: payload });
  } catch (err) {
    return new Response(JSON.stringify({ user: null }), { status: 401 });
  }
}
