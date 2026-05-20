import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
 
const handleI18nRouting = createMiddleware({
  locales: ['en', 'ru', 'tj'],
  defaultLocale: 'tj',
  localeDetection: true
});


export default function proxy(request: NextRequest) {

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|.well-known|.*\\..*).*)']
};