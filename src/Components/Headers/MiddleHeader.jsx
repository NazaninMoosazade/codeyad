import React from "react";
import { Link } from "react-router-dom";
import ThemeToggleButton from "./../ThemeToggleButton";

export default function MiddleHeader() {
  return (
    <>
      {/* Desktop Header */}
      <header>
        <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Right Header */}
            <div className="flex items-center mt-4">
              {/* Logo */}
              <a href="">
                <img src="/img/logo.png" alt="logo" className="h-[40px] pl-8" />
              </a>
              {/* Links */}
              <ul className="pt-4 flex items-center gap-x-8">
                <li>
                  <Link className="no-underline font-Dana text-black md:text-lg">
                    دوره های آموزشی
                  </Link>
                </li>
                <li>
                  <Link className="no-underline font-Dana text-black md:text-lg">
                    بلاگ
                  </Link>
                </li>
                <li>
                  <Link className="no-underline font-Dana text-black md:text-lg">
                    درباره ما
                  </Link>
                </li>
              </ul>
            </div>

            {/* Left Header */}
            <div className="flex items-center gap-x-8 pt-4">
              {/* Search Box */}
              <form className="relative">
                <input
                  type="text"
                  placeholder="هرچی میخوای جست و جو کن"
                  className="p-3 placeholder-gray-300 placeholder:text-sm placeholder:font-Dana h-[45px] w-[250px] rounded-lg"
                />
                <button className="absolute top-2.5 left-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </form>

              {/* Dark & Light Mode */}
              <ThemeToggleButton />

              {/* Login & Register */}
              <Link className="no-underline text-white bg-blue rounded-lg p-2.5 font-Dana">
                ورود یا ثبت نام
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
