import { Config } from '@/config';
import Image from 'next/image';
import React from 'react'

function StudentsSelect() {
    const Students = [
        {
            id: 1,
            title: "Назаров Муҳсиддин",
            description: "Шогирди синфи 8-и мо, ки ба барномасозӣ шавқи зиёд дорад. Ӯ дар олимпиадаҳои шаҳрӣ ва ҷумҳуриявӣ борҳо сазовори ҷойҳои намоён гаштааст. Муҳсиддин ҳоло фаъолона ба омӯзиши Frontend ва технологияҳои Next.js машғул аст.",
            experience: "1",
            grade: "8",
            slogan: "Оянда дар дасти технология аст",
            date: "25.04.2026",
            img: "/IMG_0271.JPG"
        },
        {
            id: 2,
            title: "Тилоева Оиша",
            description: "Шогирди синфи 11-и мо, ки дар олимпиадаҳои фаннии шаҳрӣ ва ҷумҳуриявӣ борҳо сазовори ҷойҳои намоён гаштааст. Оиша бо шавқи зиёд ба омӯзиши фанҳои дақиқ машғул аст ва нақша дорад, ки дар оянда дар соҳаи муҳандисӣ таҳсил кунад.",
            grade: "11",
            slogan: "Илм чароғи ақл аст",
            date: "01.05.2026",
            img: "/student2.jpg" 
        },
        {
            id: 3,
            title: "Хақназарова Майрам",
            description: "Шогирди фаъоли мактаб ва ғолиби олимпиадаҳои фанни забони англисӣ. Майрам бо дониши аъло ва ахлоқи намунавии худ байни ҳамсинфон ва омӯзгорон эҳтироми зиёд дорад.",
            grade: "10",
            slogan: "Омӯзиш калиди муваффақият аст",
            date: "10.05.2026",
            img: "/student3.jpg"
        },
        {
            id: 4,
            title: "Солиев Мухаммад", 
            description: "Варзишгари боистеъдод ва фаъоли мактаб. Таҳти роҳбарии мураббиён ӯ дар мусобиқаҳои шаҳрӣ оид ба футбол ва варзиши сабук сазовори медалҳои тилло гардидааст.",
            grade: "9",
            slogan: "Тансиҳатӣ — давлати бебаҳо",
            date: "12.05.2026",
            img: "/student4.jpg"
        }
    ];
    return (
        <section className="pb-20 md:px-0 px-3  bg-gray-50">
            <div className="max-w-7xl mx-auto ">
                <div className="flex md:flex-row flex-col justify-between md:items-end items-start md:gap-0 gap-4 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Шогирдони Мо</h2>
                        <div className={`h-1 w-20 bg-${Config.ColorProject} mt-2`}></div>
                    </div>
                    <button className={`${Config.TextColor} font-semibold hover:underline`}>Ҳамаи шогирдонон →</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Students.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100">
                            <div className="relative h-64 w-full overflow-hidden">
                                {/* <div className="absolute inset-0 bg-gray-200 group-hover:scale-110 transition-transform duration-500" /> */}
                                <Image
                                    src={item?.img || '/placeholder.jpg'}
                                    alt={item.title}
                                    width={500}
                                    height={256}
                                    className="w-full h-full object-cover  group-hover:scale-110 transition-transform duration-500"
                                />

                                <div className='absolute top-4 left-4 right-4 flex justify-between items-center z-10'>
                                    <span className="bg-white/90 backdrop-blur-sm text-green-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm border border-green-100">
                                        {item.date}
                                    </span>
                                    <span className={`bg-${Config.ColorProject} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md`}>
                                        Чои {item.experience} 🎖️
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

export default StudentsSelect