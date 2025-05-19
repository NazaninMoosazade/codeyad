import React from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import StickyTabs from "../Components/StickyTabs/StickyTabs";

export default function Course() {
  const tabItems = [
    { id: "content", label: "محتوای دوره" },
    { id: "chapters", label: "سرفصل‌های دوره" },
    { id: "comments", label: "نظرات دانشجویان" },
    { id: "course", label: " ویژگی های دوره" },
  ];

  return (
    <>
      <Header />
      <section className="bg-blue w-ful h-auto">
        <div className="mt-7 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex-wrap md:flex items-center justify-between pt-5 pb-5">
            {/* Right Section */}
            <div className="w-full mx-auto text-center lg:w-[50%]">
              <div className="flex items-center justify-center gap-x-5 lg:justify-start lg:gap-x-3">
                <span className="bg-bgSecondary text-blue font-Dana p-1.5 lg:p-2.5 rounded-full">
                  فرانت اند{" "}
                </span>
                <span className="bg-bgSky text-white font-Dana p-1.5 lg:p-2.5 rounded-full">
                  این دوره در حال برگزاری است
                </span>
              </div>
              <div className="w-full text-center pt-4 ">
                <h1 className="font-DanaDemiBold lg:max-w-[600px] text-white  md:text-lg lg:text-3xl">
                  آموزش رایگان HTML , CSS برای طراحی سایت فروشگاهی (از صفر){" "}
                </h1>
              </div>
              <p className="font-Dana text-white pt-2 flex items-center justify-center lg:justify-start">
                مناسب برای افراد مبتدی بدون هیچگونه آشنایی با بزنامه نویسی -در
                راستای ورود به بازار کار
              </p>
              <div className="w-full flex-wrap flex items-center justify-center pb-4 lg:justify-start gap-x-14 lg:gap-x-32">
                <span className="font-Dana text-white flex gap-x-2.5">
                  بروزرسانی در تاریخ ۱۴۰۴/۰۲/۲۸
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                </span>
                <span className="font-Dana text-white flex gap-x-2.5">
                  2 ساعت
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              </div>
              <span className="text-textGreen flex items-center justify-center lg:justify-start pb-4 font-DanaMeduim text-2xl">
                قیمت دوره : رایگان
              </span>
            </div>
            {/* Left Section */}
            <div className="w-full mx-auto text-center lg:w-[50%]">
              <img
                src="/img/courseBanner.webp"
                alt="corseBanner"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <StickyTabs tabs={tabItems} />

      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* سکشن‌های مربوط به تب‌ها */}
        <div id="content" className="p-4 bg-bgWhite">
          <h2 className="text-xl font-DanaDemiBold font-bold mb-2">محتوای دوره</h2>
          <p className="font-Dana">
            {" "}
            در زمان های قدیم، طراحان وب برای طراحی قالب وقت بسیار زیادی صرف می
            کردند تا بتوانند یک قالب استاندارد و کاملا ریسپانسیو را خدمت کاربران
            ارائه دهند اما با پیشرفت روز افزون تکنولوژی و خلق فریم ورک ها و
            کتابخانه های منحصر به فرد در این حوزه، ابزار هایی به این دنیا معرفی
            شده است که طراحان وب می توانند بدون نیاز به کدنویسی از Base از قالب
            ها و کامپوننت های آماده استفاده کنند. بیایید تا این موضوع را با یک
            مثال مطرح کنیم. سوال ما این است که اگر شما می خواهید دوچرخه سواری
            کنید، آیا به دوچرخه فروشی می روید که یکی از آن ها را انتخاب کنید، یا
            اینکه خودتان از صفر دوباره آن را اختراع می کنید؟{" "}
          </p>
        </div>

        <div id="chapters" className="p-4 bg-bgWhite mt-8">
          <h2 className="text-xl font-bold mb-2">سرفصل‌های دوره</h2>
          <p>اینجا سرفصل‌ها قرار می‌گیرن...</p>
        </div>

        <div id="comments" className="p-4 bg-bgWhite mt-8">
          <h2 className="text-xl font-bold mb-2">نظرات دانشجویان</h2>
          <p>نظرات کاربران در این قسمت نشون داده می‌شن...</p>
        </div>

        <div id="course" className="p-4 bg-bgWhite mt-8">
          <h2 className="text-xl font-bold mb-2"> ویژگی های دوره</h2>
          <p> ویژگی های دوره در این قسمت نشون داده می‌شن...</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
