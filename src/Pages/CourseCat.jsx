import React from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { useQuery } from "@tanstack/react-query";
import CourseCard from "../Components/CourseCard/CourseCard";
import { useParams } from "react-router-dom";
import StatusMessage from "../Components/StatusMessage/StatusMessage";

export default function CourseCat() {
  const { categoryName } = useParams();

  const {
    data: category,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["categoryName"],
    queryFn: () => {
      return fetch(
        `http://localhost:5000/v1/courses/category/${categoryName}`
      ).then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
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
    <>
      <Header />
      {category.length ? (
        <>
          {category?.map((cate) => (
            <CourseCard {...cate} />
          ))}
        </>
      ) : (
        <p className="alert alert-danger font-DanaDemiBold">در حال حاضر دوره ای وجود ندارد</p>
      )}

      <Footer />
    </>
  );
}
