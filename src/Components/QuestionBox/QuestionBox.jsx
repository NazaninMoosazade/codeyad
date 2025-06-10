import React from "react";

export default function QuestionBox() {
  return (
    <>
      <div className="bg-white dark:!bg-bgDarker h-auto w-auto rounded-xl mt-6 lg:mt-8">
        <div className="flex relative gap-x-5 lg:p-4">
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
          <span class="absolute -right-2 block w-1.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm "></span>
        </div>
        {/* <!-- Q&A Rule --> */}
        <div className="lg:p-4">
          <h6 className="font-DanaDemiBold lg:text-lg dark:text-slate-200">
            چگونه سوال خود را مطرح کنم تا به بهترین پاسخ ممکن برسم؟
          </h6>
          <p className="font-Dana text-lg leading-9 lg:max-w-[820px] dark:text-slate-200">
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
        </div>

        <span className="block w-full bg-slate-300 h-px"></span>
      </div>
    </>
  );
}
