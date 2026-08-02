"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Config } from "@/config";

export default function SwipperStarSection() {
    const stars = [
        {
            id: 1,
            img: "/IMG_0271.JPG",
            name: "Muhsiddin Nazarov",
            comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунандБехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунандБехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
            star: 5,
            email: "muhsinazarov21@gmail.com",
            status: true,
            phoneNumber: "+992907593994"
        },
        {
            id: 2,
            img: "/IMG_0271.JPG",
            name: "Muhsiddin Nazarov",
            comment: "Бехтарин мактаб ман",
            star: 5,
            email: "muhsinazarov21@gmail.com",
            status: true,
            phoneNumber: "+992907593994"
        },
        {
            id: 3,
            img: "/IMG_0271.JPG",
            name: "Muhsiddin Nazarov",
            comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
            star: 5,
            email: "muhsinazarov21@gmail.com",
            status: true,
            phoneNumber: "+992907593994"
        },
        {
            id: 4,
            img: "/IMG_0271.JPG",
            name: "Muhsiddin Nazarov",
            comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
            star: 4,
            email: "muhsinazarov21@gmail.com",
            status: true,
            phoneNumber: "+992907593994"
        },
        {
            id: 5,
            img: "/IMG_0271.JPG",
            name: "Muhsiddin Nazarov",
            comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
            star: 3,
            email: "muhsinazarov21@gmail.com",
            status: true,
            phoneNumber: "+992907593994"
        },
        {
            id: 6,
            img: "/IMG_0271.JPG",
            name: "Muhsiddin Nazarov",
            comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
            star: 2,
            email: "muhsinazarov21@gmail.com",
            status: true,
            phoneNumber: "+992907593994"
        },
        {
            id: 7,
            img: "/IMG_0271.JPG",
            name: "Muhsiddin Nazarov",
            comment: "Бехтарин мактаб ман худам айнан дархамин мактаб мехонам, Омузгорони бо тачриба дошта хамавакт бо муомилаи хуб сухбат мекунанд",
            star: 1,
            email: "muhsinazarov21@gmail.com",
            status: true,
            phoneNumber: "+992907593994"
        },
    ]

    return (
        <div className={`w-full md:px-0 px-1 py-10 bg-gray-50  dark:bg-${Config.DarkColorProject}`}>
            <div className="max-w-350  m-auto ">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20} // Фосилаи байни суратҳо
                    slidesPerView={1.3} // Дар мобилӣ чанд сурат намояд
                    // centeredSlides={true} // Сурати асосӣ дар марказ бошад
                    loop={true} // Беохир чарх задан
                    autoplay={{
                        delay: 4500, // Суръати ҳаракати худкор (2.5 сония)
                        disableOnInteraction: false, // Баъди бо муш даст расондан ҳам давом диҳад
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
                        stars.map((e) => {
                            return (
                                <SwiperSlide key={e.id} className='rounded-2xl group border p-3 hover:shadow duration-300'>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex justify-between items-center hover:cursor-grab '>
                                            <div className='flex items-center gap-2'>
                                                <Image src={`${e?.img}`} width={500} height={450} className='w-9 md:w-10 h-8 md:h-10 rounded-full object-cover' alt={e.name} />
                                                <h1 className='font-semibold'>{e.name}</h1>
                                            </div>
                                            <div>
                                                {
                                                    e.star == 5 ? '⭐⭐⭐⭐⭐' : e.star == 4 ? '⭐⭐⭐⭐' : e.star == 3 ? '⭐⭐⭐' : e.star == 2 ? '⭐⭐⭐⭐' : '⭐'
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            <p className='group-focus:line-clamp-none line-clamp-4 '>{e.comment}</p>
                                        </div>
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