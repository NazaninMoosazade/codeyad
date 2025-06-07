import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ArticlesCard from "../ArticlesCard/ArticlesCard";
import { useQuery } from "@tanstack/react-query";
import StatusMessage from "../StatusMessage/StatusMessage";

export default function LastArticles() {
  const {
    data: lastArtilces = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["lastArtilces"],
    queryFn: () => {
      return fetch("http://localhost:5000/v1/articles").then((res) => {
        if (!res.ok) {
          throw new Error("response not ok");
        }
        return res.json();
      });
    },
  });

  // console.log(lastArtilces);

  if (isLoading)
    return (
      <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />
    );

  if (isError)
    return (
      <StatusMessage status="error" message="خطا! لطفا دوباره تلاش کنید" />
    );

  return (
    <div className="mt-24 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
      <SectionTitle
        title={"آخرین مقالات"}
        btnTitle={"همرو ببین"}
        btnHref={"/mag"}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className=" flex flex-col gap-4 order-2 md:order-1">
          {lastArtilces.slice(0, 2).map((article) => (
            <ArticlesCard key={article.id} {...article} />
          ))}
        </div>

        <div className="w-full md:col-span-2 order-1 md:order-2 flex">
          {lastArtilces[2] && (
            <ArticlesCard {...lastArtilces[2]} className="h-full w-full" />
          )}
        </div>
      </div>
    </div>
  );
}
