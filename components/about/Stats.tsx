import React from 'react'
import { Users, GraduationCap, School, Award } from 'lucide-react'
import { Config } from '@/config'
import { NumberTicker } from '../ui/number-ticker'

function Stats() {
    return (
        <section className='bg-gray-50 py-10 relative'>
            <div className="relative z-20 mx-auto max-w-6xl w-full px-4">
                {/* Контейнери асосӣ */}
                <div className="-mt-20 md:-mt-24 bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-6 md:p-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-0 text-center">

                        {/* 1. Таҷриба */}
                        <div className="space-y-3 px-4 flex flex-col items-center group border-r border-gray-100 last:border-r-0 md:border-r">
                            <div className={`p-3 rounded-2xl bg-green-50 ${Config.TextColor} group-hover:scale-110 transition-transform`}>
                                <Award size={28} />
                            </div>
                            <div>
                                <div className="flex items-center justify-center gap-1">
                                    <NumberTicker value={13} className="text-2xl md:text-3xl font-extrabold text-gray-800" />
                                    <span className="text-2xl md:text-3xl font-extrabold text-gray-800">сол</span>
                                </div>
                                <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Таҷриба</p>
                            </div>
                        </div>

                        <div className="space-y-3 px-4 flex flex-col items-center group border-r-0 md:border-r border-gray-100">
                            <div className={`p-3 rounded-2xl bg-green-50 ${Config.TextColor} group-hover:scale-110 transition-transform`}>
                                <Users size={28} />
                            </div>
                            <div>
                                <div className="flex items-center justify-center gap-1">
                                    <NumberTicker value={1200} className="text-2xl md:text-3xl font-extrabold text-gray-800" />
                                    <span className="text-2xl md:text-3xl font-extrabold text-gray-800">+</span>
                                </div>
                                <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Хонандагон</p>
                            </div>
                        </div>

                        <div className="space-y-3 px-4 flex flex-col items-center group border-r border-gray-100 last:border-r-0 md:border-r">
                            <div className={`p-3 rounded-2xl bg-green-50 ${Config.TextColor} group-hover:scale-110 transition-transform`}>
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <div className="flex items-center justify-center gap-1">
                                    <NumberTicker value={85} className="text-2xl md:text-3xl font-extrabold text-gray-800" />
                                    <span className="text-2xl md:text-3xl font-extrabold text-gray-800">+</span>
                                </div>
                                <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Омӯзгорон</p>
                            </div>
                        </div>

                        {/* 4. Синфхонаҳо */}
                        <div className="space-y-3 px-4 flex flex-col items-center group">
                            <div className={`p-3 rounded-2xl bg-green-50 ${Config.TextColor} group-hover:scale-110 transition-transform`}>
                                <School size={28} />
                            </div>
                            <div>
                                <div className="flex items-center justify-center gap-1">
                                    <NumberTicker value={40} className="text-2xl md:text-3xl font-extrabold text-gray-800" />
                                    <span className="text-2xl md:text-3xl font-extrabold text-gray-800">+</span>
                                </div>
                                <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Синфхонаҳо</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Stats