import { NextResponse } from "next/server";

export function middleware(req: any) {
  const token = req.cookies.get("token")?.value;
  const isAuthPage = req.nextUrl.pathname === "/";

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/courses/:path*", "/library/:path*", "/profile/:path*"],
};
