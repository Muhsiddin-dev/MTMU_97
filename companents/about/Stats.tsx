import React from 'react'
import { Users, GraduationCap, School, Award } from 'lucide-react'

function Stats() {
    return (
        <section className="absolute top-175 md:left-40 bg-gray-50 z-10 max-w-6xl m-auto w-full rounded-2xl  shadow-2xl shadow-gray-200/50 border border-gray-100 p-3 md:p-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-8 text-center divide-x-0 md:divide-x md:divide-gray-100">

                    <div className="space-y-3 px-4 flex flex-col items-center group">
                        <div className="p-3 rounded-2xl bg-green-50 text-green-600 group-hover:scale-110 transition-transform">
                            <Award size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">11 сол</h3>
                            <p className="text-sm md:text-base text-gray-500 font-medium tracking-wider mt-1">Таҷрибаи таълимӣ</p>
                        </div>
                    </div>

                    <div className="space-y-3 px-4 flex flex-col items-center group">
                        <div className="p-3 rounded-2xl bg-green-50 text-green-600 group-hover:scale-110 transition-transform">
                            <Users size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">1200+</h3>
                            <p className="text-sm md:text-base text-gray-500 font-medium  tracking-wider mt-1">Хонандагон</p>
                        </div>
                    </div>

                    <div className="space-y-3 px-4 flex flex-col items-center group">
                        <div className="p-3 rounded-2xl bg-green-50 text-green-600 group-hover:scale-110 transition-transform">
                            <GraduationCap size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">85</h3>
                            <p className="text-sm md:text-base text-gray-500 font-medium tracking-wider mt-1">Омӯзгорон</p>
                        </div>
                    </div>

                    <div className="space-y-3 px-4 flex flex-col items-center group">
                        <div className="p-3 rounded-2xl bg-green-50 text-green-600 group-hover:scale-110 transition-transform">
                            <School size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">40+</h3>
                            <p className="text-sm md:text-base text-gray-500 font-medium tracking-wider mt-1">Синфхонаҳо</p>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Stats