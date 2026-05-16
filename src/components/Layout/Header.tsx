'use client'
import { Config, routes } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import  { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/src/components/ui/sheet"
import { ChevronDown, Menu} from 'lucide-react'
import { usePathname, useRouter } from "next/navigation";
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'

export const Pages = {
    Home: 'Асоси',
    Teachers: "Омӯзгорон",
    Students: "Хонандагон",
    celebrations: 'Чашнхо',
    About: "Дар бораи мо"
}
const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const FlagTJ = "/tj.jpg";
    const FlagEN = "/america.jpg"
    const FlagRu = "/russia.jpg";
    const languages = [
        { code: "tj", label: "Тоҷикӣ", flag: FlagTJ },
        { code: "ru", label: "Русский", flag: FlagRu },
        { code: "en", label: "English", flag: FlagEN },
    ];
    const currentLocale = pathname.split("/")[1] || "tj";
    const currentLang = languages.find((l) => l.code === currentLocale) || languages[0];
    const changeLanguage = (newLocale: string) => {
        const segments = pathname.split("/");
        segments[1] = newLocale;
        const newPath = segments.join("/");
        router.push(newPath);
    };
    return (
        <header className={`fixed font-sans top-0 left-0 right-0 z-50 bg-white/80 dark:bg-${Config.DarkColorProject} backdrop-blur-md   border-b border-green-100 dark:border-b dark:border-gray-900 dark:shadow-sm`}>
            <nav className='md:flex hidden max-w-7xl mx-auto justify-between items-center py-3 '>

                <Link href={routes.Home}>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <div className='bg-${Config.ColorProject} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-100 dark:shadow-none'>
                            <Image
                                src="/mtmu_97.png"
                                alt="Logo"
                                width={50}
                                height={50}
                                className='w-full h-full rounded-xl '
                            />
                        </div>
                        <div>
                            <h1 className='text-sm font-bold text-gray-800 dark:text-white uppercase tracking-tight leading-none'>
                                {Config.NameSchool}
                            </h1>
                            <p className={`text-[10px] ${Config.TextColor} font-medium uppercase mt-1`}>
                                Оев Абдулҳақ Мансурович
                            </p>
                        </div>
                    </div>
                </Link>

                <ul className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-600  dark:text-white'>

                    <Link href={routes.Home}>
                        <li className={`relative group cursor-pointer transition-colors duration-300 ${pathname === "/" ? "text-green-600" : "text-gray-700 dark:text-white hover:text-green-600 duration-300"}`}>
                            {Pages.Home}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </li>
                    </Link>

                    <Link href={routes.Teachers}>
                        <li className={`relative group cursor-pointer transition-colors duration-300 ${pathname === "/teachers" ? "text-green-600" : "text-gray-700 dark:text-white hover:text-green-600 duration-300"}`}>
                            {Pages.Teachers}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300 ${pathname === "/teachers" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </li>
                    </Link>

                    <Link href={routes.Celebrations}>
                        <li className={`relative group cursor-pointer transition-colors duration-300 ${pathname === "/celebrations" ? "text-green-600" : "text-gray-700 dark:text-white hover:text-green-600 duration-300"}`}>
                            {Pages.celebrations}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300 ${pathname === "/celebrations" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </li>
                    </Link>

                    <Link href={routes.About}>
                        <li className={`relative group cursor-pointer transition-colors duration-300 ${pathname === "/about" ? "text-green-600" : "text-gray-700 dark:text-white hover:text-green-600 duration-300"}`}>
                            {Pages.About}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </li>
                    </Link>

                </ul>

                <div className='flex gap-3 items-center'>
                    <Menubar className="border-none bg-transparent shadow-none p-0">
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer font-semibold text-gray-600 dark:text-gray-300 bg-transparent text-sm p-2 dark:border-neutral-800 hover:border-green-600 duration-300 border-gray-300/50 border   hover:text-green-600 dark:hover:text-green-500 hover:shadow-sm active:scale-95 dark:hover:bg-slate-800 rounded-2xl transition-all focus:bg-green-100 dark:focus:bg-slate-800 outline-none">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={currentLang.flag}
                                        alt={currentLang.code}
                                        width={15}
                                        height={15}
                                        className="rounded-sm w-4 h-4"
                                    />
                                    <span className="text-xs font-bold uppercase  text-slate-600 dark:text-slate-400 hidden sm:inline">
                                        {currentLang.code}
                                    </span>
                                    <ChevronDown size={14} className="text-slate-400" />
                                </div>
                            </MenubarTrigger>

                            <MenubarContent className="bg-white/80 backdrop-blur-md dark:bg-[#0f1115]  border-green-50 border dark:border-slate-800 min-w-35 p-1">
                                {languages.map((lang) => (
                                    <MenubarItem
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={`flex items-center gap-3 cursor-pointer rounded-md px-3 py-2 text-sm transition-colors ${currentLocale === lang.code
                                            ? "bg-green-50 dark:bg-green-900/20 text-green-600 font-bold"
                                            : "text-slate-600 dark:text-slate-300 hover:bg-green-100 dark:hover:bg-slate-800"
                                            }`}
                                    >
                                        <Image
                                            src={lang.flag}
                                            alt={currentLang.code}
                                            width={30}
                                            height={68}
                                            className="rounded-full w-4 h-4"
                                        />
                                        <span>{lang.label}</span>
                                    </MenubarItem>
                                ))}
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                    <AnimatedThemeToggler className='active:scale-85 duration-200' />
                    <Link href={routes.Login}>
                        <button className="text-sm font-semibold text-gray-600 dark:text-gray-300 bg-transparent border border-gray-300/50 dark:border-neutral-800 px-5 py-2.5 rounded-2xl transition-all duration-300 hover:border-green-600 hover:text-green-600  dark:hover:text-green-500 dark:hover:border-green-500 hover:shadow-sm active:scale-95 cursor-pointer">
                            Ворид Шудан
                        </button>
                    </Link>
                    <Link href={routes.Register}>
                        <button className="text-sm font-semibold text-white bg-green-600 px-7 py-2.5 rounded-2xl shadow-lg shadow-green-200/50 dark:shadow-none transition-all duration-300 hover:bg-green-700 hover:shadow-green-300/60 active:scale-95 cursor-pointer">
                            Бақайдгирӣ
                        </button>
                    </Link>

                </div>
            </nav>
            <nav className='flex md:hidden  justify-between items-center py-3 px-4'>
                <Link href={routes.Home}>
                    <div className='flex items-center gap-2.5 cursor-pointer'>
                        <div className={`bg-${Config.ColorProject} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-100 dark:shadow-none`}>
                            <Image
                                src="/mtmu_97.png"
                                alt="Logo"
                                width={45}
                                height={45}
                                className='w-full h-full rounded-xl '
                            />
                        </div>
                        <div>
                            <h1 className='text-sm font-bold text-gray-800 dark:text-white uppercase tracking-tight leading-none'>
                                {Config.NameSchool}
                            </h1>
                            <p className={`text-[10px] ${Config.TextColor} font-medium uppercase mt-1`}>
                                О. А. Мансурович
                            </p>
                        </div>
                    </div>
                </Link>

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors outline-none">
                        <Menu className="h-6 w-6 dark:text-white" />
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="bg-white dark:bg-[#0a0a0a] border-l dark:border-neutral-800 p-0 flex flex-col w-75 sm:w-95"
                    >
                        <SheetHeader className="text-left flex flex-row items-center gap-3 py-4 px-4 border-b border-gray-100 dark:border-neutral-800 space-y-0">
                            <div className="bg-green-600 w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm overflow-hidden border border-green-50 dark:border-green-900/30 shrink-0">
                                <Image
                                    src="/mtmu_97.png"
                                    alt="Logo"
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col justify-center overflow-hidden">
                                <SheetTitle className="dark:text-white text-base font-bold truncate">
                                    {Config.NameSchool}
                                </SheetTitle>
                                <SheetDescription className="dark:text-gray-400 text-xs font-medium">
                                    О. А. Мансурович
                                </SheetDescription>
                            </div>
                        </SheetHeader>

                        <div className="flex flex-col grow overflow-y-auto px-3 py-4">
                            <nav>
                                <ul className="flex flex-col gap-1">
                                    {[
                                        { href: "/", label: Pages.Home },
                                        { href: "/teachers", label: Pages.Teachers },
                                        { href: "/celebrations", label: Pages.celebrations },
                                        { href: "/about", label: Pages.About },
                                    ].map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                                                <li
                                                    className={`text-sm font-semibold px-4 py-3 rounded-xl transition-all flex items-center cursor-pointer ${isActive
                                                        ? "bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-500"
                                                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-900"
                                                        }`}
                                                >
                                                    {link.label}
                                                </li>
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>

                        <div className="px-4 py-6 border-t border-gray-100 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] flex flex-col gap-5">

                            <div className="flex flex-col gap-3">
                                <p className="text-[10px] font-black uppercase tracking-[1px] text-gray-400 px-1">
                                    Танзимот ва Намуд
                                </p>

                                <div className="grid grid-cols-1 gap-2">
                                    <Menubar className="border-none bg-gray-50 dark:bg-neutral-900 rounded-2xl shadow-none p-1 h-auto w-full">
                                        <MenubarMenu>
                                            <MenubarTrigger className="w-full cursor-pointer p-3 hover:bg-gray-100 hover:border-green-600 border dark:hover:bg-neutral-800 rounded-xl transition-all outline-none">
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center gap-3">
                                                        <Image
                                                            src={currentLang?.flag || "/flags/tj.png"}
                                                            alt="flag"
                                                            width={20}
                                                            height={20}
                                                            className="rounded-full object-cover w-5 h-5"
                                                        />
                                                        <span className="text-sm font-bold dark:text-white uppercase">
                                                            {currentLang?.label || "Тоҷикӣ"}
                                                        </span>
                                                    </div>
                                                    <ChevronDown size={16} className="text-gray-400" />
                                                </div>
                                            </MenubarTrigger>
                                            <MenubarContent align="end" className="bg-white dark:bg-[#0f1115] border-gray-100 dark:border-neutral-800 min-w-50 rounded-2xl p-2 shadow-2xl">
                                                {languages.map((lang) => (
                                                    <MenubarItem
                                                        key={lang.code}
                                                        onClick={() => {
                                                            changeLanguage(lang.code);
                                                            setOpen(false);
                                                        }}
                                                        className={`flex items-center gap-3 cursor-pointer rounded-xl px-3 py-3 text-sm mb-1 ${currentLocale === lang.code ? "bg-green-50 dark:bg-green-900/20 text-green-600 font-bold" : ""
                                                            }`}
                                                    >
                                                        <Image src={lang.flag} alt={lang.code} width={20} height={20} className="rounded-full w-5 h-5" />
                                                        <span>{lang.label}</span>
                                                    </MenubarItem>
                                                ))}
                                            </MenubarContent>
                                        </MenubarMenu>
                                    </Menubar>

                                    <div className="flex items-center justify-between hover:border-green-600 border p-3.5 bg-gray-50 dark:bg-neutral-900 rounded-2xl  border-transparent dark:border-neutral-800/50">
                                        <span className="text-sm font-bold dark:text-gray-300">Намуди зоҳирӣ</span>
                                        <AnimatedThemeToggler />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="w-full text-sm font-bold hover:border-green-600  text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 py-3.5 rounded-2xl transition-all active:scale-[0.98] hover:bg-gray-50 dark:hover:bg-neutral-800"
                                >
                                    Ворид Шудан
                                </button>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="w-full text-sm font-bold text-white bg-green-600 py-3.5 rounded-2xl shadow-md shadow-green-600/20 transition-all active:scale-[0.98] hover:bg-green-700"
                                >
                                    Бақайдгирӣ
                                </button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header >
    )
}

export default Header