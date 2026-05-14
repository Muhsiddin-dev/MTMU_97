import React from 'react'
import { Users, GraduationCap, School, Award } from 'lucide-react'
import { Config } from '@/config'
import { NumberTicker } from '../ui/number-ticker'

function Stats() {
    return (
        <section className="bg-gray-50 dark:bg-[#0a0a0a] py-10 relative transition-colors duration-300">
            <div className="relative z-20 mx-auto max-w-6xl w-full px-4">
                {/* Контейнери асосӣ */}
                <div className="-mt-20 md:-mt-24 bg-white dark:bg-[#0f0f0f] rounded-3xl shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-neutral-800 p-6 md:p-10 transition-all">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-0 text-center">

                        {[
                            { id: 1, label: 'Таҷриба', value: 13, suffix: 'сол', Icon: Award },
                            { id: 2, label: 'Хонандагон', value: 1200, suffix: '+', Icon: Users },
                            { id: 3, label: 'Омӯзгорон', value: 85, suffix: '+', Icon: GraduationCap },
                            { id: 4, label: 'Синфхонаҳо', value: 40, suffix: '+', Icon: School },
                        ].map(({ id, label, value, suffix, Icon }) => (
                            <div key={id} className="space-y-3 px-4 flex flex-col items-center group border-gray-100 dark:border-neutral-800 border-r last:border-r-0 odd:border-r">
                                <div className="p-3 rounded-2xl bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform">
                                    <Icon size={28} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-center gap-1">
                                        <NumberTicker
                                            value={value}
                                            className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100"
                                        />
                                        <span className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100">{suffix}</span>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{label}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Stats