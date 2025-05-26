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
          // console.log(res);
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
            <ul className="flex justify-center items-center gap-x-32">
              <li>
                <Link className="font-Dana  text-lg no-underline text-black">
                  {" "}
                  همه دوره ها{" "}
                </Link>
              </li>
              {allMenus.map((menus) => (
                <li>
                  <Link className="font-Dana text-lg no-underline text-black">
                    {" "}
                    {menus.title}{" "}
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
