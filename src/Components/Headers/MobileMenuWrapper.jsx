import React, { useContext } from "react";
import { MobileMenuContext } from "../../Context/MobileContextMenu";

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
          <div className="absolute top-0 right-0 w-72 h-full bg-white dark:bg-darker shadow-lg z-50 pt-5 px-4 overflow-auto transform transition-transform duration-300 translate-x-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              {/* لوگو */}
              <img className="h-10" src="/img/logo.webp" alt="logo" />

              {/* دکمه بستن */}
              <button
                onClick={closeMenu}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-slate-600 dark:bg-white/5 dark:text-white"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* محتوای منو */}
            <div className="space-y-4">
              <a href="#" className="block text-slate-800 dark:text-white">
                لینک اول
              </a>
              <a href="#" className="block text-slate-800 dark:text-white">
                لینک دوم
              </a>
              {/* ... بیشتر اضافه کن */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
