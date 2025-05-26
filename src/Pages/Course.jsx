import React from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import StickyTabs from "../Components/StickyTabs/StickyTabs";

import CourseContent from "../Components/StickyTabs/CourseContent";
import CourseChapters from "../Components/StickyTabs/CourseChapters";
import CourseComments from "../Components/StickyTabs/CourseComments";
import CourseFeatures from "../Components/StickyTabs/CourseFeatures";

export default function Course() {
  // آیتم‌های تب با id های منطبق بر بخش‌های صفحه
  const tabItems = [
    { id: "content", label: "محتوای دوره" },
    { id: "chapters", label: "سرفصل‌های دوره" },
    { id: "comments", label: "نظرات دانشجویان" },
    { id: "course", label: "ویژگی های دوره" },
  ];

  // داده‌های هر بخش
  const contentText =
    "در زمان های قدیم، طراحان وب برای طراحی قالب وقت بسیار زیادی صرف می کردند...";
  const chaptersText = "اینجا سرفصل‌ها قرار می‌گیرن...";
  const commentsText = "نظرات کاربران در این قسمت نشون داده می‌شن...";

  // ویژگی‌های دوره به همراه آیکون‌ها
  const featuresList = [
    {
      id: 1,
      title: "پشتیبانی مستقیم",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m2 2H7m4 4h2m2-16H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "دسترسی دائمی",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "ضبط با کیفیت بالا",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14m-6 0V10m0 0L5.447 7.724A1 1 0 0 0 4 8.618v6.764a1 1 0 0 0 1.447.894L9 14"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Header />

      {/* بنر دوره */}
      <section className="bg-blue dark:!bg-bgDarker w-full h-auto">
        <div className="mt-7 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex-wrap md:flex items-center justify-between pt-5 pb-5">
            {/* بخش راست - توضیحات دوره */}
            <div className="w-full mx-auto text-center lg:w-[50%]">
              <div className="flex items-center justify-center gap-x-5 lg:justify-start lg:gap-x-3">
                <span className="bg-bgSecondary text-blue font-Dana p-1.5 lg:p-2.5 rounded-full">
                  فرانت اند
                </span>
                <span className="bg-bgSky  text-white font-Dana p-1.5 lg:p-2.5 rounded-full">
                  این دوره در حال برگزاری است
                </span>
              </div>

              <div className="w-full text-center pt-4">
                <h1 className="font-DanaDemiBold text-white md:text-lg lg:text-3xl lg:max-w-[600px] mx-auto">
                  آموزش رایگان HTML , CSS برای طراحی سایت فروشگاهی (از صفر)
                </h1>
              </div>

              <p className="font-Dana text-white pt-2 flex items-center justify-center lg:justify-start">
                مناسب برای افراد مبتدی بدون هیچگونه آشنایی با برنامه نویسی - در راستای ورود به بازار کار
              </p>

              <div className="w-full flex-wrap flex items-center justify-center pb-4 lg:justify-start gap-x-14 lg:gap-x-32">
                <span className="font-Dana text-white flex gap-x-2.5">
                  بروزرسانی در تاریخ ۱۴۰۴/۰۲/۲۸
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008H16.5V15Zm0 2.25h.008v.008H16.5v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                </span>

                <span className="font-Dana text-white flex gap-x-2.5">
                  2 ساعت
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              </div>

              <span className="text-textGreen flex items-center justify-center lg:justify-start pb-4 font-DanaMeduim text-2xl">
                قیمت دوره : رایگان
              </span>
            </div>

            {/* بخش چپ - تصویر دوره */}
            <div className="w-full mx-auto text-center lg:w-[50%]">
              <img
                src="/img/courseBanner.webp"
                alt="courseBanner"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* تب‌های چسبان */}
      <StickyTabs tabs={tabItems} />

      {/* بخش‌های محتوا با idهای مطابق تب‌ها */}
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div id="content" className="mt-10">
          <CourseContent content={contentText} />
        </div>

        <div id="chapters" className="mt-10">
          <CourseChapters chapters={chaptersText} />
        </div>

        <div id="comments" className="mt-10">
          <CourseComments comments={commentsText} />
        </div>

        <div id="course" className="mt-10">
          <h2 className="text-xl dark:text-white font-DanaDemiBold font-bold mb-2">
            ویژگی‌های دوره
          </h2>
          <CourseFeatures features={featuresList} />
        </div>
      </div>

      <Footer />
    </>
  );
}
