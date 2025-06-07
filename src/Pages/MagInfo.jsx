import React from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import StatusMessage from "../Components/StatusMessage/StatusMessage";

export default function MagInfo() {
  const { articleName } = useParams();

  const fetchArticle = async () => {
    const res = await fetch(`http://localhost:5000/v1/articles/${articleName}`);
    if (!res.ok) {
      throw new Error("Failed to fetch article data");
    }
    return res.json();
  };

  const {
    data: articleDetails,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["article", articleName],
    queryFn: fetchArticle,
    staleTime: 5 * 60 * 1000,
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
      <section className="mt-7 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="w-full lg:w-[90%] mx-auto text-center h-auto bg-white dark:!bg-bgDarker p-4 rounded-md">
          <img
            src={`http://localhost:5000/courses/covers/${articleDetails.cover}`}
            alt={articleDetails.cover}
            className="h-auto lg:h-96 mx-auto text-center rounded-md"
          />
          <h1 className="font-DanaDemiBold text-lg lg:text-4xl mt-14 dark:text-white">
            {articleDetails.title}{" "}
          </h1>
          <p className="font-Dana lg:text-lg mt-7 dark:text-gray-300">
            {articleDetails.description}
          </p>

          {/* Last Update */}
          <div className="pb-3 flex items-center gap-x-1 child:font-Dana child:text-gray-500">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <span>{articleDetails.updatedAt.slice(0, 10)}</span>
            <span> بروز رسانی</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
