import React, { useEffect, useState } from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import StatusMessage from "../Components/StatusMessage/StatusMessage";

export default function Courses() {
  const {
    data: allMenus = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: () =>
      fetch("http://localhost:4000/v1/menus").then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      }),
  });

  if (isLoading)
    return (
      <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />
    );

  if (isError)
    return (
      <StatusMessage status="error" message="خطا! لطفا دوباره تلاش کنید" />
    );

  return (
    <>
      <Header />
      <section className="mt-12 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className=" border-b dark:border-gray-700">
          <h1 className="mx-auto text-center font-DanaDemiBold">
            دوره های کد یاد
          </h1>
          <div className="mt-10">
            <ul className="flex justify-center items-stretch gap-x-6">
              <li>
                <Link className="font-Dana text-lg no-underline text-black">
                  همه دوره ها
                </Link>
              </li>
              {allMenus.map((menus) => (
                <li>
                  <Link
                    // to="/courses/frontend"
                    className="font-Dana text-lg no-underline text-black"
                  >
                    {menus.title}
                    {
                      <ul className="z-20 flex flex-col bg-zinc-50 p-2 w-44 h-72">
                        {menus.submenus.length ? (
                          <>
                            {menus.submenus.map((submenuo) => (
                               <li>
                                 <Link
                                  key={submenuo.href}
                                  to={`/course/${submenuo.href}`}
                                  className="block font-Dana no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {submenuo.title}
                                </Link>
                               </li>
                            ))}
                          </>
                        ) : (
                          <p>دوره ای وجود ندارد</p>
                        )}
                      </ul>
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
