"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Config } from "@/config";
import { useRouter } from "next/navigation";

export default function SwipperTeachersSection() {
    const router = useRouter()

    const isLoading = false
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
        <div className={`w-full md:px-0 px-1  bg-gray-50  dark:bg-${Config.DarkColorProject}`}>
            <div className="max-w-350  m-auto ">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20} // Фосилаи байни суратҳо
                    slidesPerView={1.3} // Дар мобилӣ чанд сурат намояд
                    loop={true} // Беохир чарх задан
                    autoplay={{
                        delay: 5000, // Суръати ҳаракати худкор (2.5 сония)
                        disableOnInteraction: true, // Баъди бо муш даст расондан ҳам давом диҳад
                    }}
                    breakpoints={{
                        // Вақте экран калон мешавад (Desktop)
                        768: {
                            slidesPerView: 3.4,
                            centeredSlides: false,

                        },
                        320: {
                            slidesPerView: 1.2,
                            centeredSlides: true,
                        },
                    }}
                    className="mySwiper"
                >
                    {isLoading ?
                        (
                            <div className="bg-white animate-pulse w-full h-full dark:bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-neutral-800">

                            </div>
                        ) : (teachers.map((item) => (
                            <SwiperSlide onClick={() => router.push(`/teachers/${item.id}`)} key={item.id} className={`bg-white  dark:bg-${Config.DarkColorProject}   rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 group cursor-pointer border border-gray-100 dark:border-neutral-800`}>
                                <div className="relative h-64 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-200 dark:bg-[#010101] animate-pulse group-hover:scale-110 transition-transform duration-500" />

                                    <div className='absolute top-4 left-4 right-4 flex justify-between items-center z-10'>
                                        <span className="bg-white/90 dark:bg-[#0f0f0f] dark:border-neutral-800 backdrop-blur-sm text-green-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm border border-green-100">
                                            {item.date}
                                        </span>
                                        <span className={`bg-${Config.ColorProject}  text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md`}>
                                            {item.experience} таҷриба
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className={`text-xl font-bold text-gray-800 dark:text-white group-hover:${Config.TextColor} transition-colors duration-300`}>
                                        {item.title}
                                    </h3>

                                    <p className={`${Config.TextColor} italic text-xs font-medium mt-1`}>
                                        <span className='text-black dark:text-white'>Шиор:</span> "{item.slogan}"
                                    </p>

                                    <div className="h-px w-full bg-gray-100 dark:bg-neutral-800 my-4" />

                                    <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        )))}
                </Swiper>
            </div>
        </div>
    );
}