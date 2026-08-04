"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Config } from "@/config";

export default function SwipperStudentsSection() {
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
            img: "/IMG_0271.JPG"
        },
        {
            id: 3,
            title: "Хақназарова Майрам",
            description: "Шогирди фаъоли мактаб ва ғолиби олимпиадаҳои фанни забони англисӣ. Майрам бо дониши аъло ва ахлоқи намунавии худ байни ҳамсинфон ва омӯзгорон эҳтироми зиёд дорад.",
            grade: "10",
            slogan: "Омӯзиш калиди муваффақият аст",
            date: "10.05.2026",
            img: "/IMG_0271.JPG"
        },
        {
            id: 4,
            title: "Солиев Мухаммад",
            description: "Варзишгари боистеъдод ва фаъоли мактаб. Таҳти роҳбарии мураббиён ӯ дар мусобиқаҳои шаҳрӣ оид ба футбол ва варзиши сабук сазовори медалҳои тилло гардидааст.",
            grade: "9",
            slogan: "Тансиҳатӣ — давлати бебаҳо",
            date: "12.05.2026",
            img: "/IMG_0271.JPG"
        }
    ];

    return (
        <div className={`w-full md:px-0 px-1  bg-gray-50  dark:bg-${Config.DarkColorProject}`}>
            <div className="max-w-350  m-auto ">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20} // Фосилаи байни суратҳо
                    slidesPerView={1.2} // Дар мобилӣ чанд сурат намояд
                    // centeredSlides={true} // Сурати асосӣ дар марказ бошад
                    loop={true} // Беохир чарх задан
                    autoplay={{
                        delay: 5000, // Суръати ҳаракати худкор (2.5 сония)
                        disableOnInteraction: true, // Баъди бо муш даст расондан ҳам давом диҳад
                    }}
                    breakpoints={{
                        // Вақте экран калон мешавад (Desktop)
                        768: {
                            slidesPerView: 3.4,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        Students.map((e) => {
                            return (
                                <SwiperSlide key={e.id} className="bg-white dark:bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 dark:border-neutral-800">
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={e?.img || '/placeholder.jpg'}
                                            alt={e.title}
                                            width={500}
                                            height={256}
                                            className="w-full h-full border-b object-cover  group-hover:scale-110 transition-transform duration-500"
                                        />

                                        <div className='absolute top-4 left-4 right-4 flex justify-between es-center z-10'>
                                            <span className="bg-white/90 dark:bg-[#0f0f0f] dark:border-neutral-800 backdrop-blur-sm text-green-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm border border-green-100">
                                                {e.date}
                                            </span>
                                            <span className={`bg-${Config.ColorProject}  text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md`}>
                                                Чои {e.experience} 🎖️
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className={`text-xl font-bold text-gray-800 dark:text-white group-hover:${Config.TextColor} transition-colors duration-300`}>
                                            {e.title}
                                        </h3>

                                        <p className={`${Config.TextColor} italic text-xs font-medium mt-1`}>
                                            <span className='text-black dark:text-white'>Шиор:</span> {'"'}{e.slogan}{'"'}
                                        </p>

                                        <div className="h-px w-full bg-gray-100 dark:bg-neutral-800 my-4" />

                                        <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                                            {e.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
}