import { Config, routes } from '@/config'
import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <section className='relative h-screen  w-full overflow-hidden'>
      <div
        className="absolute inset-0 bg-[url('/mtmu_97.png')] bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className='relative z-10 flex flex-col max-w-7xl mx-auto px-6 h-full justify-center text-white '>
        <div className='max-w-2xl space-y-6'>

          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl">
            М.Т.М.У <span className={`${Config.TextColor}`}>№97</span>
          </h1>

          <p className="text-lg md:text-2xl font-light text-gray-200 max-w-xl leading-relaxed">
            Ба номи профессор <span className="font-semibold text-white">Оев Абдулҳақ Мансурович</span>. Макони илму адаб ва ояндаи дурахшони фарзандони шумо.
          </p>

          <div className='flex flex-wrap gap-4 pt-4'>
            <Link href={routes.About}>
              <button className={`px-8 py-4 bg-${Config.ColorProject} hover:bg-green-700 text-white rounded-xl font-bold shadow-lg shadow-green-900/20 transition-all active:scale-95`}>
                Маълумоти бештар
              </button>
            </Link>
            <button className={`px-8 py-4 bg-${Config.ColorProject}/10 hover:bg-${Config.ColorProject}/20 backdrop-blur-md border border-${Config.ColorProject}/80 text-white rounded-xl font-bold transition-all`}>
              Чашнҳои мо
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection