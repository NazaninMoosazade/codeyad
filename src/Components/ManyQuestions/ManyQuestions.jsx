import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "کد یاد چیست؟",
    answer:
      "ما در آموزش‌های برنامه‌نویسی کدیاد به شما کمک می‌کنیم که یک مسیر یادگیری بهتری را دنبال کنید و در انتهای مسیر یادگیری برنامه‌نویسی یا حرفه‌ها، مسیر درآمدزایی هموارتری را داشته باشید.",
  },
  {
    id: 2,
    question: "چگونه ثبت‌نام کنیم؟",
    answer:
      "برای ثبت‌نام، روی دکمه ثبت‌نام در بالای صفحه کلیک کنید و فرم مربوطه را پر کنید.",
  },
  {
    id: 3,
    question: "آیا دوره‌ها رایگان هستند؟",
    answer:
      "برخی از دوره‌های ما رایگان هستند و برخی دیگر نیاز به پرداخت هزینه دارند.",
  },
];

export default function ManyQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-28 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
      <h1 className="mx-auto text-lg md:text-2xl text-center mb-14 text-black dark:!text-white font-DanaDemiBold">سوالات متداول</h1>

      {questions.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className="w-full h-auto rounded-lg dark:!bg-bgDarker bg-white mt-4 overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
          >
            {/* سوال */}
            <div
              className="flex items-center justify-between p-4"
              onClick={() => toggleBox(index)}
            >
              <span className="font-DanaMeduim text-lg lg:text-2xl text-blue ">{item.question}</span>
              <svg
                className={`w-7 h-7 text-black dark:!text-white font-bold transform transition-transform duration-300 ${isOpen ? "-rotate-90" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>

            {/* خط جداکننده بین سوال و جواب */}
            {isOpen && <span className="block w-full h-px  bg-gray-200"></span>}

            {/* جواب */}
            <div
              className={`transition-all duration-200 ease-in-out px-4 overflow-hidden ${
                isOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
              }`}
            >
              <div className="text-sm lg:text-xl font-Dana dark:!bg-bgDarker dark:!text-white bg-white">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
