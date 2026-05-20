import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['tj', 'en', 'ru'], 
  defaultLocale: 'tj'       
});
 
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);