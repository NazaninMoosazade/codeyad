import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import CourseCard from "../CourseCard/CourseCard";
import { useQuery } from "@tanstack/react-query";
import StatusMessage from "../StatusMessage/StatusMessage";

export default function DailyOffers() {
  const {
    data: offersCourse = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["offers"],
    queryFn: () => {
      return fetch("http://localhost:4000/v1/courses/presell").then((res) => {
        if (!res.ok) {
          throw new Error("res not ok");
        }
        return res.json();
      });
    },
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
    <div className="mt-28 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
      <SectionTitle title={"پیشنهاد های روز"} />
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 gap-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...offersCourse]
          .reverse()
          .slice(0, 4)
          .map((course , index) => (
            <CourseCard key={index} {...course} />
          ))}
      </div>
    </div>
  );
}
