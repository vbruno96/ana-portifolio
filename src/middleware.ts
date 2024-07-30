import createMiddleware from 'next-intl/middleware'
import { localePrefix, locales } from '@/navigation'

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'pt-br',
})

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)', '/(pt-br|en)/:path*'],
}
