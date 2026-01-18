import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const user = request.cookies.get("user");
    const { pathname } = request.nextUrl;

    // Protect /add-item route
    if (pathname.startsWith("/add-item") && !user) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Redirect to items if already logged in and trying to access login
    if (pathname === "/login" && user) {
        return NextResponse.redirect(new URL("/items", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/add-item/:path*", "/login"],
};
