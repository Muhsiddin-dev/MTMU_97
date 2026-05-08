import { Config, routes } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import { config } from 'process'
import React from 'react'
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

export const Pages = {
    Home: 'Асоси',
    Teachers: "Муаллимон",
    Students: "Хонандагон",
    Parti: 'Чашнхо',
    About: "Дар бораи мо"
}
const Header = () => {
    return (
        <header className="fixed font-sans top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
            <nav className='md:flex hidden max-w-7xl mx-auto justify-between items-center py-3 '>

                <Link href="/">
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <div className='bg-${Config.ColorProject} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-100'>
                            <Image
                                src="/mtmu_97.png"
                                alt="Logo"
                                width={50}
                                height={50}
                                className='w-full h-full rounded-xl '
                            />
                        </div>
                        <div>
                            <h1 className='text-sm font-bold text-gray-800 uppercase tracking-tight leading-none'>
                                {Config.NameSchool}
                            </h1>
                            <p className={`text-[10px] ${Config.TextColor} font-medium uppercase mt-1`}>
                                Оев Абдулҳақ Мансурович
                            </p>
                        </div>
                    </div>
                </Link>

                <ul className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-600'>
                    <Link href="/">
                        <li className={`relative group cursor-pointer text-gray-700 transition-colors duration-300 hover:text-green-600`}>
                            {Pages.Home}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </Link>
                    <li className={`relative group cursor-pointer text-gray-700 transition-colors duration-300 hover:text-green-600`}>
                        {Pages.Teachers}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className={`relative group cursor-pointer text-gray-700 transition-colors duration-300 hover:text-green-600`}>
                        {Pages.Parti}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <Link href="/about">
                        <li className={`relative group cursor-pointer text-gray-700 transition-colors duration-300 hover:text-green-600`}>
                            {Pages.About}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </Link>
                </ul>

                <div className='flex gap-3 items-center'>
                    <button className="text-sm font-semibold text-gray-600 bg-transparent border border-gray-300/50 px-5 py-2.5 rounded-full transition-all duration-300 hover:border-green-600 hover:text-green-600 hover:shadow-sm active:scale-95 cursor-pointer">
                        Ворид Шудан
                    </button>

                    <button className="text-sm font-bold text-white bg-green-600 px-7 py-2.5 rounded-full shadow-lg shadow-green-200/50 transition-all duration-300 hover:bg-green-700 hover:shadow-green-300/60 active:scale-95 cursor-pointer">
                        Бақайдгирӣ
                    </button>
                </div>
            </nav>
            <nav className='flex md:hidden  justify-between items-center py-3 px-4'>
                <Link href="/">
                    <div className='flex items-center gap-2.5 cursor-pointer'>
                        <div className={`bg-${Config.ColorProject} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-100`}>
                            <Image
                                src="/mtmu_97.png"
                                alt="Logo"
                                width={45}
                                height={45}
                                className='w-full h-full rounded-xl '
                            />
                        </div>
                        <div>
                            <h1 className='text-sm font-bold text-gray-800 uppercase tracking-tight leading-none'>
                                {Config.NameSchool}
                            </h1>
                            <p className={`text-[10px] ${Config.TextColor} font-medium uppercase mt-1`}>
                                О. А. Мансурович
                            </p>
                        </div>
                    </div>
                </Link>

                <Sheet>
                    <SheetTrigger><Menu /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader className="text-left flex flex-col gap-4 py-4">
                            <div className="flex items-center gap-3">
                                <div className={`bg-green-600 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md overflow-hidden border border-green-50`}>
                                    <Image
                                        src="/mtmu_97.png"
                                        alt="Logo"
                                        width={50}
                                        height={50}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <SheetTitle>
                                        {Config.NameSchool}
                                    </SheetTitle>
                                    <SheetDescription>
                                        О. А. Мансурович
                                    </SheetDescription>
                                </div>
                            </div>

                            {/* Хатти ҷудокунанда (опционально) */}
                            <div className="h-px bg-gray-100 w-full mt-2" />
                        </SheetHeader>
                        <div className='px-4'>
                            <ul className='flex flex-col items-start gap-6 text-sm font-medium text-gray-600 mt-4'>
                                <Link href="/">
                                    <li className={`relative group cursor-pointer text-gray-700 transition-colors duration-300 hover:text-green-600`}>
                                        {Pages.Home}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                                    </li>
                                </Link>
                                <Link href="/teachers">
                                    <li className={`relative group cursor-pointer text-gray-700 transition-colors duration-300 hover:text-green-600`}>
                                        {Pages.Teachers}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                                    </li>
                                </Link>
                                <Link href="/students">
                                    <li className={`relative group cursor-pointer text-gray-700 transition-colors duration-300 hover:text-green-600`}>
                                        {Pages.Students}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                                    </li>
                                </Link>
                                <Link href="/about">
                                    <li className={`relative group cursor-pointer text-gray-700 transition-colors duration-300 hover:text-green-600`}>
                                        {Pages.About}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header >
    )
}

export default Header