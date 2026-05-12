"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Config } from "@/config";

export default function SwipperAboutSection() {
  const images = [
    "/image.png",
    "/imagecopy.png",
    "/image.png",
    "/imagecopy.png",
    "/image.png",
  ];

  return (
    <div className={`w-full md:px-0 px-3 py-10 bg-gray-50  dark:bg-${Config.DarkColorProject}`}>
      <div className="max-w-7xl m-auto ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20} // Фосилаи байни суратҳо
          slidesPerView={1.3} // Дар мобилӣ чанд сурат намояд
          // centeredSlides={true} // Сурати асосӣ дар марказ бошад
          loop={true} // Беохир чарх задан
          autoplay={{
            delay: 4000, // Суръати ҳаракати худкор (2.5 сония)
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
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-62.5 w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}