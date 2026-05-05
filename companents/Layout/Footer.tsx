import React from 'react'
import { Pages } from './Header'

const Footer = () => {
  return (
    <footer className=' px-3 py-6 bg-white'>
      <div className='flex max-w-7xl m-auto justify-between items-start'>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-2.5 cursor-pointer'>
            <div className='bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-200'>
              <span className="text-white font-bold text-xl">97</span>
            </div>
            <div>
              <h1 className='text-md font-bold text-gray-800 uppercase tracking-tight leading-none'>
                МТМУ №97
              </h1>
              <p className='text-[12px] text-green-600 font-medium  '>
                Оев Абдуллхақ Мансурович
              </p>
            </div>
          </div>

          <div>
            <p className='text-black text-sm font-medium'>Муассисаи Таҳсилоти Миёнаи Умумии №97 <br /> Ба Номи Прафесор Оев Абдулхақ Мансурович</p>
          </div>

          <div  className='flex gap-1 text-black'>
            <button>Fc</button>
            <button>In</button>
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
          <h1 className='text-black font-semibold '>Сахифахо</h1>
          <ul className='text-black ml-3'>
            <li>Асоси</li>
            <li>Муаллимон</li>
            <li>Довталабон</li>
            <li></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer