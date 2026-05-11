import React from 'react'
import { Pages } from './Header'
import Image from 'next/image'
import Link from 'next/link'
import { Config } from '@/config'

const Footer = () => {
  return (
    <footer className=' px-3 py-6 bg-white font-sans border border-t-gray-100 '>
      <div className='flex md:flex-row flex-col md:gap-0 gap-5 max-w-7xl m-auto justify-between items-start'>
        <div className='flex flex-col gap-5'>
          <Link href="/">
            <div className='flex items-center gap-2.5 cursor-pointer'>
              <div className='bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-100'>
                <Image
                  src="/mtmu_97.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className='w-full h-full rounded-xl '
                />
              </div>
              <div>
                <h1 className='text-md font-bold text-gray-800 uppercase tracking-tight leading-none'>
                  {Config.NameSchool}
                </h1>
                <p className={`text-[12px] ${Config.TextColor} font-medium  `}>
                  Оев Абдуллхақ Мансурович
                </p>
              </div>
            </div>
          </Link>

          <div>
            <p className='text-black text-sm font-medium'>Муассисаи Таҳсилоти Миёнаи Умумии №97 <br /> Ба Номи Прафесор Оев Абдуллхақ Мансурович</p>
          </div>

          <div className='flex gap-4 text-black'>
            <button>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 text-gray-600  cursor-pointer hover:${Config.TextColor} transition-colors`}
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
                className={`w-6 h-6 text-gray-600 cursor-pointer hover:${Config.TextColor} transition-colors`}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>

        <div>
          <h1 className='text-black font-semibold '>Сахифахо</h1>
          <ul className='text-black ml-3'>
            <li>{Pages.Home}</li>
            <li>{Pages.Teachers}</li>
            <li>{Pages.Parti}</li>
            <li>{Pages.About}</li>
          </ul>
        </div>

        <div>
          <h1 className='text-black font-semibold '>Сахифахо</h1>
          <ul className='text-black ml-3'>
            <li>Асоси</li>
            <li>Муаллимон</li>
            <li>Довталабон</li>
            <li></li>
          </ul>
        </div>

        <div>
          <h1 className='text-black font-semibold '>Тамос</h1>
          <ul className='text-black ml-3'>
            <li>m_t_m_u_97@gmail.com</li>
            <li>(+992) 907195993</li>
            <li>Н.Сино, Куч.Обoдкорон</li>
            <li></li>
          </ul>
        </div>

      </div>
    </footer >
  )
}

export default Footer