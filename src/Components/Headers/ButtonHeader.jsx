import React from "react";
import BoxButtonHeader from "./BoxButtonHeader";
import StatusMessage from "../StatusMessage/StatusMessage";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ButtonHeader() {
  const {
    data: allMenus = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: () =>
      fetch("http://localhost:4000/v1/menus").then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      }),
  });

  if (isLoading)
    return (
      <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />
    );

  if (isError)
    return (
      <StatusMessage status="error" message="خطا! لطفا دوباره تلاش کنید" />
    );

  return (
    <section className="w-full max-w-[1600px] mx-auto mt-5 px-4 lg:px-8 relative">
      <button
        className="swiper-button-prev-custom absolute -bottom-2 left-2 z-20 -translate-y-1/2 
                   bg-gray-500 bg-opacity-60 hover:bg-opacity-90 text-white rounded-full p-3 shadow-sm
                   flex items-center justify-center cursor-pointer transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="swiper-button-next-custom absolute -bottom-2 right-2 z-20 -translate-y-1/2 
                   bg-gray-500 bg-opacity-60 hover:bg-opacity-90 text-white rounded-full p-3 shadow-sm
                   flex items-center justify-center cursor-pointer transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {allMenus.map((menus, index) => (
          <SwiperSlide key={index}>
            <BoxButtonHeader title={menus.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
