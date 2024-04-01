import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const autenticado = token ? true : false;

  if (!autenticado && request.nextUrl.pathname.startsWith("/conta")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (autenticado && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/conta", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/conta:path*", "/login"],
};
