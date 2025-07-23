import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "", label: "صفحه اصلی" },
    { to: "courses", label: "دوره ها" },
    { to: "sessions", label: "جلسات" },
    { to: "menus", label: "منو ها" },
    { to: "articles", label: "مقاله ها" },
    { to: "users", label: "کاربران" },
    { to: "comments", label: "کامت ها" },
    { to: "category", label: "دسته بندی" },
  ];

  return (
    <>
      {/* دکمه موبایل */}
      <div className="md:hidden p-4 bg-red-700 text-white flex justify-between items-center">
        <div className="text-xl font-bold">پنل مدیریت</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
          className="text-white text-3xl leading-none"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {/* سایدبار */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-red-600 text-white shadow-lg z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex md:flex-col`}
      >
        <div className="p-6 text-2xl font-bold border-b border-red-700">
          پنل مدیریت
        </div>
        <nav className="flex flex-col p-4 space-y-3 flex-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={`/adminPanel/${to}`}
              end={to === ""} //  فقط روی صفحه اصلی
              className={({ isActive }) =>
                `block px-4 py-3 rounded-md text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-red-800 text-white"
                    : "text-red-100 hover:bg-red-700 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
