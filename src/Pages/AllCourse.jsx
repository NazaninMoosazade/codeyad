import React, { useState } from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import CourseCard from "../Components/CourseCard/CourseCard";
import { useQuery } from "@tanstack/react-query";
import StatusMessage from "../Components/StatusMessage/StatusMessage";
import FilterBox from "../Components/FilteredBox/FilterBox";
import SearchBox from "../Components/SearchBox/SearchBox";
import FilterMobile from "../Components/FilteredBoxMobile/FilterMobile";

export default function CoursesPage({ page }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const fetchCourses = async () => {
    const res = await fetch(`http://localhost:5000/v1/courses`);
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
    queryKey: ["courses", page],
    queryFn: fetchCourses,
  });

  if (isLoading)
    return (
      <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />
    );

  if (isError)
    return (
      <StatusMessage status="error" message="خطا! لطفا دوباره تلاش کنید" />
    );

  let filteredCourses = [...allCourses];

  switch (activeFilter) {
    case "cheap":
      filteredCourses.sort((a, b) => a.price - b.price);
      break;
    case "expensive":
      filteredCourses.sort((a, b) => b.price - a.price);
      break;
    case "free":
      filteredCourses = filteredCourses.filter((course) => course.price === 0);
      break;
    case "all":
    default:
      break;
  }

  return (
    <>
      <Header />

      <div className="mt-10 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* Search Box */}
        <div className="lg:hidden mx-auto text-center">
          <SearchBox />
        </div>
      </div>

      {/* FilterMobile */}
      <FilterMobile />
      <div className="mt-10 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* Filter Box */}
        <FilterBox
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div className="grid gap-x-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course._id} {...course} />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">
              هیچ دوره‌ای یافت نشد.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
