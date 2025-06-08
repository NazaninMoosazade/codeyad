import React from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import CourseCard from "../Components/CourseCard/CourseCard";
import ArticlesCard from "../Components/ArticlesCard/ArticlesCard";
import StatusMessage from "../Components/StatusMessage/StatusMessage";

export default function SearchPage() {
  const { name } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["searchResults", name],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/v1/search/${name}`);
      if (!res.ok) throw new Error("Failed to fetch search results");
      return res.json();
    },
    enabled: !!name,
  });

  if (isLoading) {
    return <StatusMessage status="loading" message="در حال دریافت نتایج..." />;
  }

  if (isError) {
    return <StatusMessage status="error" message="خطا در دریافت اطلاعات" />;
  }

  const { allResultCourses = [], allResultArticles = [] } = data;

  return (
    <>
      <Header />
      <section className="mt-10 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* Courses */}
        <div>
          <SectionTitle title="نتیجه دوره ها برای جست و جوی شما :" />
          {allResultCourses.length === 0 ? (
            <p className="alert alert-danger mt-2 font-DanaDemiBold">
              دوره‌ای برای جست‌وجوی شما یافت نشد.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allResultCourses.map((course) => (
                <CourseCard key={course._id} {...course} />
              ))}
            </div>
          )}
        </div>

        {/* Articles */}
        <div className="mt-14">
          <SectionTitle title="نتیجه مقالات برای جست و جوی شما :" />
          {allResultArticles.length === 0 ? (
            <p className="alert alert-danger mt-2 font-DanaDemiBold">
              مقاله‌ای برای جست‌وجوی شما یافت نشد.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allResultArticles.map((article) => (
                <ArticlesCard key={article._id} {...article} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
