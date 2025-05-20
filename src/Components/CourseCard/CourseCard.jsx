import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard() {
  return (
    <div className=" mx-auto bg-white mt-10 rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:-translate-y-4 hover:shadow-lg duration-300 w-full max-w-sm">
      {/* <!-- تصویر --> */}
      <a href="/course/personal-professional-success-specialization">
        <img
          src="/img/courseBanner.webp"
          alt="آموزش تخصص در دستیابی به موفقیت شخصی و حرفه‌ای"
          className="w-full h-48 object-cover"
        />
      </a>

      {/* <!-- محتوای کارت --> */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        {/* <!-- عنوان دوره --> */}
        <Link className="font-Dana no-underline text-gray-800 text-base leading-6 hover:text-blue transition-colors mb-3">
          آموزش تخصص در دستیابی به موفقیت شخصی و حرفه‌ای
        </Link>

        {/* <!-- سطح --> */}
        <span className="text-xs font-DanaDemiBold text-blue rounded-full px-3 py-1 w-fit mb-2">
          مدرس دوره : امین سعیدی
        </span>

        {/* <!-- اطلاعات زمان و جلسات --> */}
        <div className="flex items-center text-sm text-gray-600 gap-3 mb-4">
          <div className="flex items-center gap-1">
            ⏰ <span dir="ltr">00 : 00 : 00</span>
          </div>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <div className="flex items-center gap-1">
            🎬 <span>0 جلسه</span>
          </div>
        </div>

        {/* <!-- قیمت و دکمه --> */}
        <div className="">
          <p className="text-blue font-bold ">
            ۱۹۹,۰۰۰ <span className="text-sm font-Dana ">تومان</span>
          </p>

          <div className="no-underline p-2 flex items-center justify-center gap-x-2 text-white bg-blue rounded-lg font-Dana">
            <Link className="text-white cursor-pointer text-sm font-Dana no-underline">
              {" "}
              شروع دوره{" "}
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-3 h-3 font-bold text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
