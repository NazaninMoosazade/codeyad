import React from "react";
import { Link } from "react-router-dom";
import ThemeToggleButton from "./../ThemeToggleButton";

export default function MiddleHeader() {
  return (
    <>
      <header>
        {/* Desktop Header */}
        <div className="hidden lg:block w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Right Header */}
            <div className="flex items-center mt-4">
              {/* Logo */}
              <a href="">
                <img src="/img/logo.png" alt="logo" className="h-[40px] pl-8" />
              </a>
              {/* Links */}
              <ul className="pt-4 flex items-center md:gap-x-5 lg:gap-x-8">
               
                <li className="relative group">
                  <Link className="no-underline font-Dana text-black lg:text-lg cursor-pointer">
                    دوره‌های آموزشی
                  </Link>

                  {/* زیرمنو اصلی */}
                  <ul className="absolute hidden right-0 top-7 rounded-tr-lg rounded-br-lg group-hover:flex flex-col bg-white  p-2 h-60 w-48 z-40 ">
                    {/* آیتم فرانت‌اند با زیرزیرمنو */}
                    <li className="relative group/frontend">
                      <Link
                        to="/courses/frontend"
                        className="block no-underline font-DanaDemiBold px-4 py-2  text-gray-700 hover:bg-gray-100"
                      >
                        فرانت‌اند
                      </Link>

                      {/* زیرزیرمنو فرانت‌اند */}
                      <ul className="absolute hidden -top-2 right-[184px] -z-20 overflow-y-scroll  group-hover/frontend:flex flex-col bg-zinc-50 p-2 h-60 w-48 ">
                        <li>
                          <Link
                            to="/courses/frontend/javascript"
                            className="block font-Dana no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            جاوااسکریپت
                          </Link>
                        </li>
                       
                        
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link className="no-underline font-Dana text-black lg:text-lg">
                    مقالات
                  </Link>
                </li>
                <li>
                  <Link className="no-underline font-Dana text-black lg:text-lg">
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
                  className="p-3 placeholder-gray-300 placeholder:text-sm placeholder:font-Dana h-[45px] w-auto md:w-[250px] rounded-lg"
                />
                <button className="absolute top-3.5 left-2">
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

              {/* Dark & Light Mode */}
              <ThemeToggleButton />

              {/* Login & Register */}
              <Link className="no-underline text-white bg-blue rounded-lg p-2.5 font-Dana">
                ورود یا ثبت نام
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile Header */}
        <div className="block lg:hidden w-full h-20 bg-white p-3.5">
          <div className="flex items-center justify-between">
            {/* Menu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {/* Logo */}
            <img src="/img/logo.png" alt="logo" className="h-[30px]" />
            {/* Login & Register */}
            <Link className="no-underline text-sm text-white bg-blue rounded-lg p-1.5 font-Dana">
              ورود یا ثبت نام
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
