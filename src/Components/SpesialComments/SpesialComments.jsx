import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// آیکون ستاره SVG
const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.18 6.69
         7.01.102c.969.014 1.371 1.24.588 1.81l-5.39 3.933
         1.64 6.852c.236.988-.832 1.79-1.688 1.175L12 17.77l-5.29 4.42
         c-.856.615-1.924-.187-1.688-1.175l1.64-6.852-5.39-3.933
         c-.783-.57-.38-1.796.588-1.81l7.01-.102 2.18-6.69z"
    />
  </svg>
);

export default function SpesialComments() {
  const [activeIndex, setActiveIndex] = useState(0);

  const comments = [
    {
      name: "زهرا حسینی",
      text: "این دوره واقعا مفید بود و تونستم خیلی چیز یاد بگیرم. ممنون از استاد عزیز.",
      rating: 5,
    },
    {
      name: "محمد عباسی",
      text: "ساده و کاربردی بود. حتی برای کسی که هیچ تجربه‌ای نداره مناسب بود.",
      rating: 4,
    },
    {
      name: "سارا کریمی",
      text: "پشتیبانی دوره خیلی عالی بود. هر سوالی داشتم سریع پاسخ داده شد.",
      rating: 5,
    },
    {
      name: "رضا توکلی",
      text: "نسبت به هزینه‌ای که پرداخت کردم واقعا ارزشش رو داشت.",
      rating: 4,
    },
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} filled={i <= count} />);
    }
    return stars;
  };

  return (
    <>
      <h2 className="mx-auto text-center dark:!text-white font-DanaDemiBold mt-24">نظرات کاربران</h2>
      <section className="mt-16 w-full bg-bgComments py-12 px-6">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
          spaceBetween={24}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {comments.map((comment, index) => {
            const isActive = index === activeIndex;
            return (
              <SwiperSlide key={index}>
                <div
                  dir="rtl"
                  className={`
                  transition-all duration-300 ease-in-out
                  rounded-xl p-6 min-h-[200px] flex flex-col justify-between
                  shadow-md
                  ${
                    isActive
                      ? "bg-white  dark:!bg-gray-700  text-blue-700 scale-105 shadow-xl"
                      : "bg-gray-100 dark:!bg-bgDarker text-gray-600 scale-100"
                  }
                `}
                >
                  <div>
                    <p className="font-semibold font-DanaDemiBold text-lg mb-3 text-black dark:!text-white">
                      {comment.name}
                    </p>
                    <p className="leading-relaxed font-Dana text-sm text-gray-700 dark:!text-gray-400 mb-4">
                      {comment.text}
                    </p>
                  </div>
                  <div className="flex space-x-1 rtl:space-x-reverse">
                    {renderStars(comment.rating)}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
