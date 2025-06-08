import React from "react";

export default function SearchBox() {
  return (
    <form className="relative">
      <input
        type="text"
        placeholder="هرچی میخوای جست و جو کن"
        className="p-3 dark:bg-bgDarker placeholder-gray-300 placeholder:text-sm placeholder:font-Dana h-[45px] w-full lg:w-[260px] rounded-lg"
      />
      <button className="absolute top-4 left-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-blue"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
}
