import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import CourseCard from "../CourseCard/CourseCard";
import { useQuery } from "@tanstack/react-query";
import StatusMessage from "../StatusMessage/StatusMessage";

export default function LastUpdateCourses() {
  const {
    data: updateCourse = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["course"],
    queryFn: () => {
      return fetch("http://localhost:5000/v1/courses/popular").then((res) => {
        if (!res.ok) {
          throw new Error("response not ok");
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
    <div className="mt-10 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
      <SectionTitle
        title={"آخرین به روز رسانی ها"}
        btnTitle={"همه دوره ها"}
        btnHref={"/allCourse"}
      />
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 gap-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {updateCourse.slice(0, 4).map((course) => (
          <CourseCard key={course._id} {...course} />
        ))}
      </div>
    </div>
  );
}
