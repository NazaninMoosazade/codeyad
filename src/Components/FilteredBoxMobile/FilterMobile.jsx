import React, { useState } from "react";

export default function FilterMobile({ activeFilter, setActiveFilter }) {
  const [isShowBox, setIsShowBox] = useState(false);

  const filters = [
    { key: "all", label: "همه دوره ها" },
    { key: "cheap", label: "ارزان ترین" },
    { key: "expensive", label: "گران ترین" },
    { key: "free", label: "رایگان" },
  ];

  const handleFilterClick = (key) => {
    setActiveFilter(key);
    setIsShowBox(false); // بستن منو بعد انتخاب
  };

  return (
    <>
      {/* دکمه باز کردن */}
      <div
        onClick={() => setIsShowBox((prev) => !prev)}
        className="lg:hidden mx-auto text-center w-36 mt-4 rounded-lg dark:!bg-bgDarker bg-white z-10 relative"
      >
        <div className="flex items-center justify-center gap-x-2 p-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 dark:!text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
          <span className="font-DanaMeduim text-sm dark:!text-white">فیلتر</span>
        </div>
      </div>

      {/* Overlay + فیلتر */}
      {isShowBox && (
        <section className="fixed inset-0 z-50 lg:hidden">
          {/* تار کننده */}
          <div
            onClick={() => setIsShowBox(false)}
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          ></div>

          {/* باکس فیلتر */}
          <div className="absolute bottom-0 w-full h-60 dark:!bg-darker bg-white rounded-t-xl z-50 overflow-y-auto">
            {/* هدر */}
            <div className="bg-gray-100 dark:!bg-bgDarker h-16 rounded-t-xl px-4 flex justify-between items-center">
              <span className="font-DanaMeduim dark:!text-white">مرتب سازی بر اساس</span>
              <svg
                onClick={() => setIsShowBox(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer dark:!text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>

            {/* گزینه‌ها */}
            <div className="p-4 space-y-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => handleFilterClick(filter.key)}
                  className={`w-full text-right px-4 py-2 font-DanaMeduim rounded-md border ${
                    activeFilter === filter.key
                      ? "bg-gray-200 dark:!bg-slate-400 dark:!text-black font-bold border-gray-400"
                      : "bg-white dark:!bg-bgDarker dark:!text-white border-gray-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
