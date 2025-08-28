// middleware.js
import { NextResponse } from 'next/server';

// Pass-through middleware (you can add auth/redirects later)
export function middleware() {
  return NextResponse.next();
}

// Exclude SWA internal paths (health checks, etc.)
export const config = {
  matcher: ['/((?!.swa).*)'],
};
