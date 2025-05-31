import React, { useEffect, useState } from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import CourseCard from "../Components/CourseCard/CourseCard";
import { useQuery } from "@tanstack/react-query";
import StatusMessage from "../Components/StatusMessage/StatusMessage";

export default function () {
  const fetchCourses = async () => {
    const res = await fetch("http://localhost:4000/v1/courses");
    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }
    return res.json();
  };

  const {
    data: allCourses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  // console.log(allCourses);
  

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
      <div className="mt-10 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {allCourses.map((course) => (
            <CourseCard key={course._id} {...course} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
