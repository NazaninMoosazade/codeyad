import React from 'react'

export default function CourseCard() {
  return (
<div class=" mx-auto bg-white mt-10 rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:-translate-y-4 hover:shadow-lg duration-300 w-full max-w-sm">
  {/* <!-- تصویر --> */}
  <a href="/course/personal-professional-success-specialization">
    <img
    src='/img/courseBanner.webp'
      alt="آموزش تخصص در دستیابی به موفقیت شخصی و حرفه‌ای"
      class="w-full h-48 object-cover"
    />
  </a>

  {/* <!-- محتوای کارت --> */}
  <div class="p-4 flex flex-col justify-between flex-grow">
    {/* <!-- سطح --> */}
    <span class="text-xs text-blue-700 bg-blue-100 rounded-full px-3 py-1 w-fit mb-2">
      سطح: از مقدماتی تا پیشرفته
    </span>

    {/* <!-- عنوان دوره --> */}
    <a href="/course/personal-professional-success-specialization" class="font-semibold text-gray-800 text-base leading-6 hover:text-blue-600 transition-colors mb-3">
      آموزش تخصص در دستیابی به موفقیت شخصی و حرفه‌ای
    </a>

    {/* <!-- اطلاعات زمان و جلسات --> */}
    <div class="flex items-center text-sm text-gray-600 gap-3 mb-4">
      <div class="flex items-center gap-1">
        ⏰ <span dir="ltr">00 : 00 : 00</span>
      </div>
      <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
      <div class="flex items-center gap-1">
        🎬 <span>0 جلسه</span>
      </div>
    </div>

    {/* <!-- قیمت و دکمه --> */}
    <div class="flex items-center justify-between mt-auto pt-2">
      <p class="text-blue-600 font-bold text-[15px]">
        ۱۹۹,۰۰۰ <span class="text-sm font-normal">تومان</span>
      </p>
      <a
        href="/course/personal-professional-success-specialization"
        class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md flex items-center gap-1 transition-colors"
      >
        شروع دوره
        <svg width="12" height="12" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.97172 8.65283..." fill="#fff" />
        </svg>
      </a>
    </div>
  </div>
</div>


  )
}
