import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";

export default function QuestionBox() {
  const authContext = useContext(AuthContext);
  const { userInfos, isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <div className="bg-white dark:!bg-bgDarker h-auto w-auto rounded-xl mt-6 lg:mt-8">
        <div className="flex relative gap-x-5 p-3 lg:p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="hidden md:flex w-8 h-8 text-red-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
          <h4 className="font-DanaDemiBold dark:!text-white lg:text-2xl">
            پرسش و پاسخ
          </h4>
          <span class="absolute -right-1 block w-1.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm "></span>
        </div>
        {/* <!-- Q&A Rule --> */}
        <div className="p-2.5 lg:p-4">
          <h6 className="font-DanaDemiBold lg:text-lg dark:text-slate-200">
            چگونه سوال خود را مطرح کنم تا به بهترین پاسخ ممکن برسم؟
          </h6>
          <p className="font-Dana text-sm md:text-lg leading-9 md:leading-9 lg:max-w-[820px] dark:text-slate-200">
            برای اینکه مهارت حل مسئله و دیباگ کردن‌تون رو بالا ببرید، قبل از
            اینکه سوالی بپرسید، با دقت و تمرکز سعی کنید مشکل رو خودتون حل کنید.
            اگه به جواب نرسیدید، می‌تونید از گوگل کمک بگیرید. اگه با خطایی مواجه
            شدید یا نیاز به نمونه‌ای داشتید، با استفاده از کلمات کلیدی مختلف توی
            گوگل سرچ کنید و از سایت‌هایی مثل Stack Overflow کمک بگیرید. (جواب
            99٪ سوالات با این روش زیر 5 دقیقه پیدا میشه) از پرسیدن سوالات کلی
            مثل «من مثل شما انجام دادم ولی کار نکرد» یا «کد من مشکل داره و اجرا
            نمیشه» که جزئیات ندارن، خودداری کنید. وقتی سوال می‌پرسید، لطفاً اون
            رو با مستندات و به صورت شفاف و واضح بیان کنید تا قابل تحلیل و بررسی
            باشه. سعی کنید سوالاتتون مفهومی و دقیق باشه تا مکالمه‌ای که دارید
            خلاصه و مفید باشه. همچنین قبل از اینکه سوال ارسال کنید، یه بار
            خودتون اون رو بخونید و مطمئن بشید که سوالتون خوانا و واضحه.
          </p>

          <span className="block w-full bg-slate-300 h-px"></span>

          <div className="flex gap-x-5">
            <div class="flex items-center justify-center mt-4  w-11 sm:w-12 h-11 sm:h-12 bg-gray-100 dark:!bg-gray-700 dark:bg-dark rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 sm:w-6 h-5 sm:h-6 text-slate-500 dark:!text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>

            <div className="flex-col pt-4">
              <h6 className="text-lg font-DanaDemiBold dark:!text-white">
                  {userInfos.name}
              </h6>
              <p className="font-Dana dark:!text-white">پرسش جدید</p>
            </div>
          </div>

          <div className="flex items-center gap-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
            <h6 className="font-DanaDemiBold pt-2 text-red-600">
              لطفا قبل از ثبت پرسش بالاتر بخش قوانین ایجاد سوال را مطالعه کنید
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
