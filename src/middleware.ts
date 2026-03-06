import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, Locale } from './i18n';

function getLocaleFromHeaders(request: NextRequest): Locale {
  // Check for Brazil DNS/geo (via Vercel headers)
  const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || '';
  if (country === 'BR') return 'pt-br';

  // Check Accept-Language header
  const acceptLang = request.headers.get('accept-language') || '';
  if (acceptLang.includes('pt-BR') || acceptLang.includes('pt')) return 'pt-br';
  if (acceptLang.includes('es')) return 'es';
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Skip static files and api routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return;
  }

  // Detect locale and redirect
  const locale = getLocaleFromHeaders(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|images|favicon.ico).*)'],
};
