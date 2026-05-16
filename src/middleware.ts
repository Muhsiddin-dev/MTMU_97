import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Мачер барои муайян кардани он ки дар кадом саҳифаҳо кор кунад
  matcher: ['/', '/(tj|en|ru)/:path*']
};