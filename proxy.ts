import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/cn" || pathname.startsWith("/cn/")) {
    const url = request.nextUrl.clone();

    url.pathname = pathname.replace(/^\/cn(?=\/|$)/, "/zh");
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cn/:path*"]
};
