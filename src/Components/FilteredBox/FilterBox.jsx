import React, { useState } from "react";
import { Link } from "react-router-dom";

const SortFilters = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "همه دوره ها" },
    { key: "cheap", label: "ارزان ترین" },
    { key: "expensive", label: "گران ترین" },
    { key: "popular", label: "پرمخاطب ها" },
  ];

  return (
    <div className="hidden md:flex items-center gap-x-6 px-5 mb-8 h-14 bg-white dark:!bg-bgDarker shadow-normal dark:shadow-none rounded-lg">
      <div className="flex items-center">
        <div className="flex items-center shrink-0 gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7 dark:!text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>

          <span className="font-DanaMeduim pl-10 dark:!text-white">مرتب سازی بر اساس :</span>
        </div>
        <div className="flex gap-x-5 lg:gap-x-8 h-full font-Dana">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`text-black dark:!text-gray-300 p-3 no-underline px-2 transition-all duration-200 ${
                activeFilter === filter.key
                  ? "border-y-2 border-blue"
                  : "border-y-2 border-transparent"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortFilters;
