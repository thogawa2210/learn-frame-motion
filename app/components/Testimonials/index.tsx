"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    text: "Hi, I just wanted to let you know that I received the suit this week and I love it. It's been beautifully made and every detail is perfect. Please pass on my appreciation to the tailor and the team that made it. Thank you guys, you are the best. I will recommend you.",
    author: "RICHARD ROMERO",
  },
  {
    id: 2,
    text: "This is by far the best suit I’ve owned, and I’ve owned custom made suits before. The suit from Peter Mason fit like a glove. So did the shirt I ordered. I recommend booking an appointment to get measured properly and to choose your own fabric. You are the best!",
    author: "Frankie Morales",
  },
  {
    id: 3,
    text: "Trying my suit on for the first time was a really special moment. How it felt to wear and how it made me feel was amazing. Thank you so much for my wedding suit. Very enjoyable experience. On the big day the suits looked great and we had many positive comments.",
    author: "Peter Hobden",
  },
  // Add more testimonials here
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="relative h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimonials.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-wider">
          TESTIMONIALS
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          autoplay={{ delay: 8000 }}
          onSlideChange={handleSlideChange}
          className="w-full max-w-4xl"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="text-center px-4 sm:px-6 lg:px-8">
                <Quote className="h-5 w-full text-[#be9667]" />
                <p className="text-xl sm:text-2xl mb-6 leading-relaxed pt-2">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="text-lg sm:text-xl font-semibold text-[#be9667]">
                  {testimonial.author}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination and Navigation Controls */}
        <div className="w-full max-w-4xl mt-8 flex justify-between items-center">
          <div className="swiper-button-prev">
            <ChevronLeft className="w-8 h-8 text-white" />
          </div>
          <div className="flex space-x-2 w-full justify-center">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-[#be9667]" : "w-4 bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
          <div className="swiper-button-next">
            <ChevronRight className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
