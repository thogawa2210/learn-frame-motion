"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import "swiper/css";

export default function MainSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100vw", height: "100vh" }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>
        <Image fill={true} src="/images/slide-1.jpg" alt='slide' className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <Image fill={true} src="/images/slide-2.jpg" alt='slide' className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <Image fill={true} src="/images/slide-3.jpg" alt='slide' className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <Image fill={true} src="/images/slide-4.jpg" alt='slide' className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
