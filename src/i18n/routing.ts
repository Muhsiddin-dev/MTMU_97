import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['tj', 'en', 'ru'], // Забонҳое, ки дастгирӣ мешаванд
  defaultLocale: 'tj'          // Забони асосӣ
});
 
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);