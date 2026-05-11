import { Config } from '@/config'
import React from 'react'

function HeroSectionAbout() {
    return (
        <section className='h-[70vh] bg-gray-50 md:h-[80vh] w-full pt-20 relative md:px-0 px-3'>
            <div className='max-w-7xl m-auto relative h-full w-full overflow-hidden rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100' >
                <div
                    className="absolute inset-0 bg-[url('/mtmu_97.png')] bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                >
                </div>
            </div>
        </section>
    )
}

export default HeroSectionAbout