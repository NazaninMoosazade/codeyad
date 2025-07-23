import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import swal from "sweetalert";

export default function Sidebar() {



  return (
    <div className="w-64 h-auto bg-bgAdminPanel text-white">
      <ul className="text-gray-400 pt-14 child:p-1.5 space-y-9 mr-5 child-hover:text-white child-hover:bg-gradient-to-r from-[#353c50] to-[rgba(0,212,255,0)]">
        {/* [
          { path: "/p-admin", label: "صفحه اصلی" },
          { path: "courses", label: "دوره ها" },
          { path: "sessions", label: "جلسات" },
          { path: "menus", label: "منو ها" },
          { path: "articles", label: "مقاله ها" },
          { path: "users", label: "کاربران" },
          { path: "comments", label: "کامت ها" },
          { path: "category", label: "دسته بندی" },
        ] */}
          <li className="font-Dana">

          </li>
     

        <li className="font-Dana">
          <a href="#"> خروج</a>
        </li>
      </ul>
    </div>
  );
}
