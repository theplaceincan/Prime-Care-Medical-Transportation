import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only allow users who are logged in to visit these pages 
  const token = request.cookies.get("access_token")?.value
  if (!token) return NextResponse.redirect(new URL("/sign-in", request.url))
  return NextResponse.next()
}

export const config = {
  matcher: ["/book-ride", "/dashboard/:path*"]
}