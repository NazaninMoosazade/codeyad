import React, { useContext } from "react";
import { MobileMenuContext } from "../../Context/MobileContextMenu";
import SearchBox from "../SearchBox/SearchBox";
import { Link } from "react-router-dom";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

export default function MobileMenuWrapper() {
  const { isMenuOpen, closeMenu } = useContext(MobileMenuContext);

  return (
    <>
      {/* Overlay and Menu Container */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40">
          {/* تار کننده پس‌زمینه */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeMenu}
          />

          {/* منوی موبایل با انیمیشن اسلاید */}
          <div className="absolute top-0 right-0 w-72 h-full bg-white dark:!bg-bgDarker shadow-lg z-50 pt-5 px-4 overflow-auto transform transition-transform duration-300 translate-x-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              {/* لوگو */}
              <img className="h-10" src="/img/logo.png" alt="logo" />

              {/* دکمه بستن */}
              <button
                onClick={closeMenu}
                className="flex items-center justify-center h-10 w-10 rounded-full  text-slate-600  dark:!text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* محتوای منو */}
            <div className="space-y-4">
              <ul className="flex-col mt-5 mb-5 space-y-5">
                <li>
                  <Link
                    to="/mag"
                    className="no-underline  font-Dana dark:!text-white text-black lg:text-lg"
                  >
                    مقالات
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="no-underline font-Dana dark:!text-white text-black lg:text-lg"
                  >
                    درباره ما
                  </Link>
                </li>
              </ul>

              <SearchBox />

              <div className="ml-44 mt-5">
                <ThemeToggleButton />
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
