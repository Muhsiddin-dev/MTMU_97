'use client'
import { Config, routes } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import { config } from 'process'
import React, { useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler'

export const Pages = {
    Home: 'Асоси',
    Teachers: "Муаллимон",
    Students: "Хонандагон",
    celebrations: 'Чашнхо',
    About: "Дар бораи мо"
}
const Header = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    return (
        <header className={`fixed font-sans top-0 left-0 right-0 z-50 bg-white/80 dark:bg-${Config.DarkColorProject} backdrop-blur-md border-b border-green-100 dark:border-b dark:border-gray-900 dark:shadow-sm`}>
            <nav className='md:flex hidden max-w-7xl mx-auto justify-between items-center py-3 '>

                <Link href="/">
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

                <ul className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-900 dark:text-white'>

                    <Link href="/">
                        <li className={`relative group cursor-pointer transition-colors duration-300 ${pathname === "/" ? "text-green-600" : "text-gray-700 dark:text-white hover:text-green-600"}`}>
                            {Pages.Home}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </li>
                    </Link>

                    <Link href="/teachers">
                        <li className={`relative group cursor-pointer transition-colors duration-300 ${pathname === "/teachers" ? "text-green-600" : "text-gray-700 dark:text-white hover:text-green-600"}`}>
                            {Pages.Teachers}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300 ${pathname === "/teachers" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </li>
                    </Link>

                    <Link href="/celebrations">
                        <li className={`relative group cursor-pointer transition-colors duration-300 ${pathname === "/celebrations" ? "text-green-600" : "text-gray-700 dark:text-white hover:text-green-600"}`}>
                            {Pages.celebrations}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300 ${pathname === "/celebrations" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </li>
                    </Link>

                    <Link href="/about">
                        <li className={`relative group cursor-pointer transition-colors duration-300 ${pathname === "/about" ? "text-green-600" : "text-gray-700 dark:text-white hover:text-green-600"}`}>
                            {Pages.About}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </li>
                    </Link>

                </ul>

                <div className='flex gap-3 items-center'>
                    <AnimatedThemeToggler />

                    <button className="text-sm font-semibold text-gray-600 dark:text-gray-300 bg-transparent border border-gray-300/50 dark:border-neutral-800 px-5 py-2.5 rounded-full transition-all duration-300 hover:border-green-600 hover:text-green-600 dark:hover:text-green-500 dark:hover:border-green-500 hover:shadow-sm active:scale-95 cursor-pointer">
                        Ворид Шудан
                    </button>

                    <button className="text-sm font-semibold text-white bg-green-600 px-7 py-2.5 rounded-full shadow-lg shadow-green-200/50 dark:shadow-none transition-all duration-300 hover:bg-green-700 hover:shadow-green-300/60 active:scale-95 cursor-pointer">
                        Бақайдгирӣ
                    </button>
                </div>
            </nav>
            <nav className='flex md:hidden  justify-between items-center py-3 px-4'>
                <Link href="/">
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
                    <SheetTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                        <Menu className="dark:text-white" />
                    </SheetTrigger>

                    <SheetContent className="bg-white dark:bg-[#0a0a0a] border-l dark:border-neutral-800 p-0">
                        <SheetHeader className="text-left flex flex-col gap-4 py-6 px-6 border-b border-gray-100 dark:border-neutral-800">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-600 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md  overflow-hidden border border-green-50 dark:border-green-900/30">
                                    <Image
                                        src="/mtmu_97.png"
                                        alt="Logo"
                                        width={50}
                                        height={50}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <SheetTitle className="dark:text-white text-lg">
                                        {Config.NameSchool}
                                    </SheetTitle>
                                    <SheetDescription className="dark:text-gray-400">
                                        О. А. Мансурович
                                    </SheetDescription>
                                </div>
                            </div>
                        </SheetHeader>

                        <div className='px-6 py-8 flex flex-col justify-between h-[calc(100vh-120px)]'>
                            {/* Менюи пайвандҳо */}
                            <ul className='flex flex-col gap-4'>
                                {[
                                    { href: "/", label: Pages.Home },
                                    { href: "/teachers", label: Pages.Teachers },
                                    { href: "/celebrations", label: Pages.celebrations },
                                    { href: "/about", label: Pages.About },
                                ].map((link) => (
                                    <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                                        <li className={`text-base font-semibold py-2 transition-all duration-300 ${pathname === link.href
                                                ? "text-green-600 dark:text-green-500 translate-x-2"
                                                : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 hover:translate-x-2"
                                            }`}>
                                            {link.label}
                                        </li>
                                    </Link>
                                ))}
                            </ul>

                            {/* Қисмати поёнӣ: Theme Toggler ва Тугмаҳо */}
                            <div className='flex flex-col gap-6'>
                                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-neutral-900 rounded-2xl">
                                    <span className="text-sm font-medium dark:text-gray-300">Намуди зоҳирӣ</span>
                                    <AnimatedThemeToggler />
                                </div>

                                <div className='grid grid-cols-2 gap-3'>
                                    <button className="text-sm font-bold text-gray-600 dark:text-gray-300 bg-transparent border border-gray-300/50 dark:border-neutral-800 py-3 rounded-xl transition-all active:scale-95">
                                        Ворид Шудан
                                    </button>
                                    <button className="text-sm font-bold text-white bg-green-600 py-3 rounded-xl shadow-lg shadow-green-200/50 dark:shadow-none transition-all active:scale-95">
                                        Бақайдгирӣ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header >
    )
}

export default Header