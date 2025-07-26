import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import StatusMessage from "../StatusMessage/StatusMessage";
import AuthContext from "../../Context/AuthContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


export default function AdminTopbar() {

  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  const localStorageData = JSON.parse(localStorage.getItem("user"));

  const fetchAdminInfo = async () => {
    const res = await fetch("http://localhost:5000/v1/auth/me", {
      headers: {
        Authorization: `Bearer ${localStorageData?.token}`,
      },
    });
    if (!res.ok) {
      throw new Error("خطا در دریافت اطلاعات ادمین");
    }
    return res.json();
  };


  const {
    data: adminInfo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["adminInfo"],
    queryFn: fetchAdminInfo,
    enabled: !!localStorageData?.token,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true,
    refetchInterval: 30000,
    retry: 2,
  });

  const logOutAdmin = (event) => {
    event.preventDefault()
    
    swal({
      title: 'با موفقیت خارج شدید',
      icon : 'success',
      buttons: 'ok'
    }).then(() => {
      authContext.logout()
    navigate('/')
    })
  }

  return (
    <div className="w-full h-20 px-4 md:px-6 mb-5 flex items-center justify-between bg-white dark:bg-darker shadow-sm">
      {/* راست: جستجو */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="relative">
          {/* <input
            type="text"
            placeholder="جستجو..."
            className="w-40 md:w-56 h-9 font-Dana rounded-lg border border-gray-300 bg-gray-100 dext-sm px-3 text-black focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
          /> */}
         
        <button onClick={logOutAdmin}>
          <a className="font-DanaDemiBold no-underline text-blue hover:text-red-500"> خروج از پنل</a>
        </button>

        </div>
      </div>

      {/* چپ: وضعیت یا نام ادمین */}
      <div className="flex items-center gap-2">
        {isLoading && (
          <StatusMessage
            status="loading"
            message="در حال بارگذاری اطلاعات..."
          />
        )}
        {isError && (
          <StatusMessage
            status="error"
            message={error.message || "خطا در دریافت اطلاعات"}
          />
        )}
        {!isLoading && !isError && adminInfo?.name && (
          <span className="text-sm md:text-base font-Dana font-bold text-gray-700">
            {adminInfo?.name}
          </span>
        )}
      </div>
    </div>
  );
}
