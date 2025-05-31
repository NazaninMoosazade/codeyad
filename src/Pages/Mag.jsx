import React from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { useQuery } from "@tanstack/react-query";
import ArticlesCard from "../Components/ArticlesCard/ArticlesCard";
import StatusMessage from "../Components/StatusMessage/StatusMessage";

export default function Mag() {
  const {
    data: articles = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["allArtilces"],
    queryFn: () => {
      return fetch("http://localhost:4000/v1/articles").then((res) => {
        if (!res.ok) {
          throw new Error("response not ok");
        }
        return res.json();
      });
    },
  });

  console.log(articles);

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
      <div className="mt-28 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="grid gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticlesCard {...article} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
