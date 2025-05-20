import React from 'react'
import Header from '../Components/Headers/Header'
import Footer from '../Components/Footer/Footer'

export default function Login() {
  return (
    <>
    <Header/>
    <section className="flex justify-center items-center mt-24">
        <div className="bg-white dark:!bg-darker border border-green-600 rounded-md w-[500px] h-auto">
          {/* Header Section */}
          <div className="mt-6 text-center flex flex-col">
            <span className="font-DanaDemiBold text-xl text-gray-600 dark:!text-gray-300">
              ورود به حساب کاربری
            </span>
            <span className="font-DanaMeduim text-gray-500 pt-2">
              خوشحالیم دوباره میبینیمت دوست عزیز :)
            </span>
          </div>

          <div className="flex items-center justify-center bg-sky-50 p-2 m-4">
            <span className="font-Dana text-gray-700">
              کاربر جدید هستید؟
            </span>
            <span className="font-Dana text-sm p-2 bg-sky-100 shadow-sm text-white rounded-md mr-2">
              <a to="/register" className='text-black font-Dana no-underline cursor-pointer'> ثبت نام</a>
            </span>
          </div>

          {/* Form */}
          <form action="#">
            <div className="m-4">
              <div className="relative">
                <input
                  id="username"
                  className="dark:placeholder-white w-full font-Dana border border-gray-300 p-2 rounded-md dark:!bg-gray-400 dark:!border dark:!border-white"
                  placeholder="نام کاربری یا آدرس ایمیل"
                  type="text"
                  element="input"
                />
                <svg
                  className="w-7 h-7 absolute top-2 left-2 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
            </div>

            <div className="m-4">
              <div className="relative">
                <input
                  id="password"
                  className="dark:placeholder-white w-full font-Dana border border-gray-300 p-2 rounded-md dark:!bg-gray-400 dark:!border dark:!border-white"
                  placeholder="رمز عبور"
                  type="text"
                  element="input"
                />
                <svg
                  className="w-7 h-7 absolute top-2 left-2 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
            </div>

            <div className="relative flex items-center justify-center m-4">
              <span className="absolute font-DanaDemiBold text-white">
                ورود
              </span>
              <button
                className='w-full bg-blue p-4 text-center text-white font-DanaDemiBold'
                type="submit"

              ></button>
              <svg
                className="w-7 h-7 text-white absolute right-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between m-4">
              <label className="flex items-center">
                <input type="checkbox" />
                <span className="font-DanaMeduim text-sm pr-2 text-gray-500">
                  مرا به خاطر داشته باش
                </span>
              </label>

              <label>
                <a href="#" className="font-DanaMeduim text-sm text-gray-500">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>

          {/* Footer Section */}
          <div className="m-5">
            <span className="font-DanaDemiBold text-xl text-gray-600 dark:!text-gray-300">
              سلام کاربر محترم:
            </span>
            <ul className="py-3 list-disc">
              <li className="font-Dana text-sm text-gray-500 mr-5">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="font-Dana text-sm text-gray-500 mr-5">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="font-Dana text-sm text-gray-500 mr-5">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>
    <Footer/>
    </>
  )
}
