"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import InsideSwiper from "./InsideSwiper";

const slides = [
  {
    id: 1,
    imgSrc: "/images/slide-1.jpg",
    header: "About us",
    subHeader: "We Are a Mid-Tier Menswear Company Aming For The 20-35 Market",
    buttonText: "Discover more",
  },
  {
    id: 2,
    imgSrc: "/images/slide-2.jpg",
    header: "About us",
    subHeader: "We Are a Mid-Tier Menswear Company Aming For The 20-35 Market",
    buttonText: "Discover more",
  },
  {
    id: 3,
    imgSrc: "/images/slide-3.jpg",
    header: "About us",
    subHeader: "We Are a Mid-Tier Menswear Company Aming For The 20-35 Market",
    buttonText: "Discover more",
  },
  {
    id: 4,
    imgSrc: "/images/slide-4.jpg",
    header: "About us",
    subHeader: "We Are a Mid-Tier Menswear Company Aming For The 20-35 Market",
    buttonText: "Discover more",
  },
];

export default function MainSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[100vh]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <InsideSwiper {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
