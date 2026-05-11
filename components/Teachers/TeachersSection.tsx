import { Config } from '@/config';
import React from 'react'

function TeachersSection() {
    const teachers = [
        {
            id: 1,
            title: "Ашурова Хайринисо",
            description: "Аълочии маорифи Тоҷикистон, омӯзгори дараҷаи олӣ. Мутахассиси фанни забони русси, ки шогирдонаш ҳамасола дар олимпиадаҳои ҷумҳуриявӣ ҷойҳои намоёнро ишғол мекунанд.",
            experience: "25 сол",
            slogan: "Забон ҳастии миллат аст",
            date: "25.04.2026",
            img: "/teacher1.jpg"
        },
        {
            id: 2,
            title: "Афзалова Саломат",
            description: "Омӯзгори фанни математика ва физика, Муаллифи зиёда аз 10 дастури методӣ барои хонандагони синфҳои болои.",
            experience: "30 сол",
            slogan: "Илм чароғи ақл аст",
            date: "01.05.2026",
            img: "/teacher2.jpg"
        },
        {
            id: 3,
            title: "Раҳимова Малика",
            description: "Мутахассиси фаъоли фанни технологияи иттилоотӣ. Роҳбари маҳфили 'Барномасозони ҷавон', ки дар он хонандагон асосҳои Web-development-ро меомӯзанд.",
            experience: "5 сол",
            slogan: "Оянда дар дасти технология аст",
            date: "10.05.2026",
            img: "/teacher3.jpg"
        },
        {
            id: 4,
            title: "Қурбонов Фирӯз",
            description: "Мураббии варзиш ва омӯзгори таълими мудофиаи ҳарбӣ. Таҳти роҳбарии ӯ дастаи варзишии мактаб қаҳрамони чандинкаратаи мусобиқаҳои шаҳрӣ гардидааст.",
            experience: "5 сол",
            slogan: "Оянда дар дасти технология аст",
            date: "12.05.2026",
            img: "/teacher4.jpg"
        }
    ];
    return (
        <section className="pb-20 md:px-0 px-3 bg-gray-50">
            <div className="max-w-7xl mx-auto ">
                <div className="flex md:flex-row flex-col justify-between md:items-end items-start md:gap-0 gap-4 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Омӯзгорони соҳибтаҷриба</h2>
                        <div className={`h-1 w-20 bg-${Config.ColorProject} mt-2`}></div>
                    </div>
                    <button className={`${Config.TextColor} font-semibold hover:underline`}>Ҳамаи омӯзгорон соҳибтаҷриба →</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teachers.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100">
                            <div className="relative h-64 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gray-200 group-hover:scale-110 transition-transform duration-500" />

                                <div className='absolute top-4 left-4 right-4 flex justify-between items-center z-10'>
                                    <span className="bg-white/90 backdrop-blur-sm text-green-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm border border-green-100">
                                        {item.date}
                                    </span>
                                    <span className={`bg-${Config.ColorProject} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md`}>
                                        {item.experience} таҷриба
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className={`text-xl font-bold text-gray-800 group-hover:${Config.TextColor} transition-colors duration-300`}>
                                    {item.title}
                                </h3>

                                <p className={`${Config.TextColor} italic text-xs font-medium mt-1`}>
                                   <span className='text-black'>Шиор:</span> "{item.slogan}"
                                </p>

                                <div className="h-px w-full bg-gray-100 my-4" />

                                <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeachersSection