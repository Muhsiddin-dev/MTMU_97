import React from 'react'
import { Users, GraduationCap, School, Award } from 'lucide-react'
import { Config } from '@/config'

function Stats() {
    return (
        <section className='bg-gray-50 py-15 relative'>
            <div className="relative z-20 mx-auto max-w-6xl w-full px-4 " >
                <div className="-mt-16 md:-mt-24 bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-6 md:p-10" >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-0 text-center">

                        <div className="space-y-3 px-4 flex flex-col items-center group border-r-0 md:border-r border-gray-100">
                            <div className={`p-3 rounded-2xl bg-green-50 ${Config.TextColor} group-hover:scale-110 transition-transform`}>
                                <Award size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800">11 сол</h3>
                                <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Таҷриба</p>
                            </div>
                        </div>

                        <div className="space-y-3 px-4 flex flex-col items-center group border-r-0 md:border-r border-gray-100">
                            <div className={`p-3 rounded-2xl bg-green-50 ${Config.TextColor} group-hover:scale-110 transition-transform`}>
                                <Users size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800">1200+</h3>
                                <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Хонандагон</p>
                            </div>
                        </div>

                        <div className="space-y-3 px-4 flex flex-col items-center group border-r-0 md:border-r border-gray-100">
                            <div className={`p-3 rounded-2xl bg-green-50 ${Config.TextColor} group-hover:scale-110 transition-transform`}>
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800">85</h3>
                                <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Омӯзгорон</p>
                            </div>
                        </div>

                        <div className="space-y-3 px-4 flex flex-col items-center group">
                            <div className={`p-3 rounded-2xl bg-green-50 ${Config.TextColor} group-hover:scale-110 transition-transform`}>
                                <School size={28} />
                            </div>
                            <div>
                                <h3 className="text-2   xl md:text-3xl font-extrabold text-gray-800">40+</h3>
                                <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Синфхонаҳо</p>
                            </div>
                        </div>

                    </div>
                </div >
            </div>
        </section >
    )
}

export default Stats