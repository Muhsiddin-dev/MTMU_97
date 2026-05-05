import { routes } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Pages = {
    Home: 'Асоси',
    Teachers: "Муаллимон",
    Parti: 'Чашнхо',
    About: "Дар бораи мо"
}
const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
            <nav className='md:flex hidden max-w-7xl mx-auto justify-between items-center py-3 '>

                <div className='flex items-center gap-3 cursor-pointer'>
                    <div className='bg-green-700/80 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-200'>
                        <span className="text-white font-bold text-xl">97</span>
                    </div>
                    <div>
                        <h1 className='text-sm font-bold text-gray-800 uppercase tracking-tight leading-none'>
                            МТМУ №97
                        </h1>
                        <p className='text-[10px] text-green-600 font-medium uppercase mt-1'>
                            Оев Абдулҳақ Мансурович
                        </p>
                    </div>
                </div>

                <ul className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-600'>
                    <li className='hover:text-green-600 transition-colors cursor-pointer'>{Pages.Home}</li>
                    <li className='hover:text-green-600 transition-colors cursor-pointer'>{Pages.Teachers}</li>
                    <li className='hover:text-green-600 transition-colors cursor-pointer'>{Pages.Parti}</li>
                    <li className='hover:text-green-600 transition-colors cursor-pointer'>{Pages.About}</li>
                </ul>

                <div className='flex gap-3 items-center'>
                    <button className='text-sm font-semibold text-gray-700 hover:text-green-700/80 px-4 py-2 transition-all'>
                        Log In
                    </button>
                    <button className=' bg-green-700/80 hover:bg-green-700/60 hover:cursor-pointer text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-md shadow-green-200 transition-all active:scale-95'>
                        Sign In
                    </button>
                </div>
            </nav>
            <nav className='flex md:hidden  justify-between items-center py-3 px-4'>

                <div className='flex items-center gap-2.5 cursor-pointer'>
                    <div className='bg-green-700/80 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-200'>
                        <span className="text-white font-bold text-xl">97</span>
                    </div>
                    <div>
                        <h1 className='text-sm font-bold text-gray-800 uppercase tracking-tight leading-none'>
                            МТМУ №97
                        </h1>
                        <p className='text-[10px] text-green-600 font-medium uppercase mt-1'>
                            О. А. Мансурович
                        </p>
                    </div>
                </div>

                <div className='flex gap-1 items-center'>
                    <button className='text-sm font-semibold text-gray-700 hover:text-green-700/80 px-4 py-2 transition-all'>
                        Log In
                    </button>
                    <button className=' bg-green-700/80 hover:bg-green-700/80 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-md shadow-green-200 transition-all active:scale-95'>
                        Sign In
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header