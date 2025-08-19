import React from "react";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../pages/Card";

const BannerSwiper = ({ bannerdata }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative w-full pb-12">
      <button
        ref={prevRef}
        className={`absolute ml-17 top-1/2 left-4 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-100 z-10 transition-opacity duration-300 ${
          isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      ></button>

      <button
        ref={nextRef}
        className={`absolute top-1/2 right-5 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-100 z-10 transition-opacity duration-300 ${
          isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      ></button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        // autoplay={{disableOnInteraction:true, delay:1000}}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 1, spaceBetween: 25 },
          1368: { slidesPerView: 1, spaceBetween: 25 },
        }}
        className="!pb-12"
      >
        {bannerdata?.map((d, index) => (
          <SwiperSlide key={index}>
            <img src={d.image} className="w-[1500px] h-[500px] pl-20" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
