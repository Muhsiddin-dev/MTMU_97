import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Config, routes } from '@/config'
import { Pages } from './Header'

const Footer = () => {
  return (
    <footer className={` px-3 py-6 bg-white dark:border-t dark:border-neutral-800 dark:bg-${Config.DarkColorProject} font-sans border border-t-gray-100 `}>
      <div className='flex md:flex-row flex-col md:gap-0 gap-5 max-w-7xl m-auto justify-between items-start'>
        <div className='flex flex-col gap-5'>
          <Link href={routes.Home}>
            <div className='flex items-center gap-2.5 cursor-pointer'>
              <div className={`bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg dark:shadow shadow-green-100 dark:shadow-${Config.DarkColorProject}`}>
                <Image
                  src="/mtmu_97.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className='w-full h-full rounded-xl '
                />
              </div>
              <div>
                <h1 className='text-md font-bold text-gray-800 dark:text-white  uppercase tracking-tight leading-none'>
                  {Config.NameSchool}
                </h1>
                <p className={`text-[12px] ${Config.TextColor} font-medium  `}>
                  Оев Абдуллхақ Мансурович
                </p>
              </div>
            </div>
          </Link>

          <div>
            <p className='text-black dark:text-white dark:text-white text-sm font-medium'>Муассисаи Таҳсилоти Миёнаи Умумии №97 <br /> Ба Номи Прафесор Оев Абдуллхақ Мансурович</p>
          </div>

          <div className='flex gap-4 text-black dark:text-white '>
            <button>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 text-gray-600 dark:hover:${Config.TextColor} dark:text-white cursor-pointer hover:${Config.TextColor} transition-colors`}
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            <button>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-6 h-6 text-gray-600 dark:hover:${Config.TextColor} dark:text-white cursor-pointer hover:${Config.TextColor} transition-colors`}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>

        <div>
          <h1 className='text-black dark:text-white font-semibold '>Сахифахо</h1>
          <ul className='text-black dark:text-white ml-3 space-y-2'>
            <li className='text-sm hover:text-green-600 duration-300 cursor-pointer transition-colors'>
              <Link href={routes.Home}>{Pages.Home}</Link>
            </li>
            <li className='text-sm hover:text-green-600 duration-300 cursor-pointer transition-colors'>
              <Link href={routes.Teachers}>{Pages.Teachers}</Link>
            </li>
            <li className='text-sm hover:text-green-600 duration-300 cursor-pointer transition-colors'>
              <Link href={routes.Celebrations}>{Pages.celebrations}</Link>
            </li>
            <li className='text-sm hover:text-green-600 duration-300 cursor-pointer transition-colors'>
              <Link href={routes.About}>{Pages.About}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className='text-black dark:text-white font-semibold '>Сахифахо</h1>
          <ul className='text-black dark:text-white ml-3 space-y-2'>
            <li>Асоси</li>
            <li>Муаллимон</li>
            <li>Довталабон</li>
            <li></li>
          </ul>
        </div>

        <div>
          <h1 className='text-black dark:text-white font-semibold '>Тамос</h1>
          <ul className='text-black dark:text-white ml-3 space-y-2'>
            <li className='cursor-pointer text-sm hover:text-green-600 duration-300 '><a href="m_t_m_u_97@gmail.com">m_t_m_u_97@gmail.com</a></li>
            <li className='cursor-pointer text-sm hover:text-green-600 duration-300'>(+992) 907195993</li>
            <li className='cursor-pointer text-sm hover:text-green-600 duration-300'>Н.Сино, Куч.Обoдкорон</li>
          </ul>
        </div>

      </div>
    </footer >
  )
}

export default Footer