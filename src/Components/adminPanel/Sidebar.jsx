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
    { to: "comments", label: "کامنت ها" },
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
  className={`fixed top-0 right-0 h-screen w-64 bg-blue-600 bg-blue text-white shadow-lg z-50
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    md:translate-x-0 md:overflow-y-auto`}
>
  <div className="p-6 text-2xl font-bold font-DanaDemiBold border-b border-gray-300">
    پنل مدیریت
  </div>
  <nav className="flex flex-col p-4 space-y-3 flex-1">
    {links.map(({ to, label }) => (
      <NavLink
        key={to}
        to={`/adminPanel/${to}`}
        end={to === ""}
        className={({ isActive }) =>
          `block px-4 py-3 rounded-md font-Dana no-underline text-base font-semibold transition-all duration-200
          ${
            isActive
              ? "bg-slate-300 text-black"
              : "text-red-100 hover:bg-black hover:bg-opacity-10 hover:text-white"
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
