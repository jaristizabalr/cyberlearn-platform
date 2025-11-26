import { SignJWT, jwtVerify } from "jose";

const RAW_SECRET = process.env.JWT_SECRET;

if (!RAW_SECRET || RAW_SECRET.trim().length === 0) {
  throw new Error("JWT_SECRET no está definido o está vacío");
}

const secret = new TextEncoder().encode(RAW_SECRET);

export async function signToken(payload: Record<string, any>): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(secret);
}

export async function verifyToken<T = any>(token: string): Promise<T> {
  const { payload } = await jwtVerify(token, secret);
  return payload as T;
}
