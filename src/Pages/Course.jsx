import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
// import StickyTabs from "../Components/StickyTabs/StickyTabs";
import StatusMessage from "../Components/StatusMessage/StatusMessage";
import QuestionBox from "../Components/QuestionBox/QuestionBox";
import SessionChapters from "../Components/SessionChapters/SessionChapters";

// import CourseContent from "../Components/StickyTabs/CourseContent";
// import CourseChapters from "../Components/StickyTabs/CourseChapters";
// import CourseComments from "../Components/StickyTabs/CourseComments";
// import CourseFeatures from "../Components/StickyTabs/CourseFeatures";

export default function Course() {
  const { courseName } = useParams();

  const {
    data: courseDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["course", courseName],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/v1/courses/${courseName}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }
      );
      if (!res.ok) throw new Error("خطا در دریافت اطلاعات دوره");
      return res.json();
    },
  });

  console.log(courseDetails);

  const tabItems = [
    { id: "content", label: "محتوای دوره" },
    { id: "chapters", label: "سرفصل‌های دوره" },
    { id: "comments", label: "نظرات دانشجویان" },
    { id: "course", label: "ویژگی های دوره" },
  ];

  const featuresList = [
    {
      id: 1,
      title: "پشتیبانی مستقیم",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m2 2H7m4 4h2m2-16H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "دسترسی دائمی",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "ضبط با کیفیت بالا",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14m-6 0V10m0 0L5.447 7.724A1 1 0 0 0 4 8.618v6.764a1 1 0 0 0 1.447.894L9 14"
          />
        </svg>
      ),
    },
  ];

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

      <section className="bg-blue dark:!bg-bgDarker w-full h-auto">
        <div className="mt-7 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex-wrap md:flex items-center justify-between pt-5 pb-5">
            <div className="w-full mx-auto text-center lg:w-[50%]">
              <div className="flex items-center justify-center gap-x-5 lg:justify-start lg:gap-x-3">
                <span className="bg-bgSecondary text-blue font-Dana p-1.5 lg:p-2.5 rounded-full">
                  {courseDetails.name}
                </span>
                <span className="bg-bgSky text-white font-Dana p-1.5 lg:p-2.5 rounded-full">
                  {courseDetails.createdAt?.slice(0, 10)}{" "}
                  <span> زمان برگزاری </span>
                </span>
              </div>

              <p className="font-Dana leading-10 text-white pt-5 flex items-center justify-center lg:justify-start lg:max-w-[700px]">
                {courseDetails.description}
              </p>

              <div className="w-full flex-wrap flex items-center justify-center pb-4 lg:justify-start gap-x-14 lg:gap-x-32">
                <div className="font-Dana text-white flex gap-x-2.5">
                  <span>آخرین آپدیت</span>
                  <span>
                    {courseDetails.updatedAt?.slice(0, 10) ?? "ندارد"}
                  </span>
                </div>
              </div>

              <div className="w-full flex-wrap flex items-center justify-center pb-4 lg:justify-start gap-x-14">
                <div className="font-Dana text-white flex gap-x-2">
                  <span> تعداد دانشجو : </span>
                  <span>{courseDetails.courseStudentsCount}</span>
                </div>
              </div>

              <div className="text-textGreen flex items-center justify-center gap-x-2 lg:justify-start pb-4 font-DanaMeduim text-2xl">
                <span>قیمت دوره : </span>
                {courseDetails.price === 0 ? (
                  <span className="text-sm font-Dana">رایگان</span>
                ) : (
                  <>
                    <span>{courseDetails.price.toLocaleString("fa-IR")}</span>
                    <span className="text-sm font-DanaDemiBold mr-1">
                      تومان
                    </span>
                  </>
                )}
              </div>

              {courseDetails.isUserRegisteredToThisCourse ? (
                <span className="bg-bgSecondary text-blue font-Dana p-1.5 lg:p-2.5 rounded-full">
                  شما دانشجوی دوره هستین
                </span>
              ) : (
                <Link
                  to="/register"
                  className="bg-bgSecondary no-underline text-blue font-Dana p-1.5 lg:p-2.5 rounded-full"
                >
                  ثبت نام در دوره
                </Link>
              )}
            </div>

            <div className="w-full mx-auto text-center mt-5 lg:w-[50%]">
              <img
                src={`http://localhost:5000/courses/covers/${courseDetails.cover}`}
                alt={courseDetails.cover}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-7 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* سمت چپ - SessionChapters */}
          <div className="order-2 lg:order-1 lg:col-span-1">
            <SessionChapters />
          </div>

          {/* سمت راست - QuestionBox */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <QuestionBox />
          </div>
        </div>
      </div>

      {/* <StickyTabs tabs={tabItems} /> */}

      {/* <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div id="content" className="mt-10">
          <CourseContent content={courseDetails.shortName} />
        </div>

        <div id="chapters" className="mt-10">
          <CourseChapters chapters={courseDetails.sessions} />
        </div>

        <div id="comments" className="mt-10">
          <CourseComments comments={courseDetails.comments} />
        </div>

        <div id="course" className="mt-10">
          <h2 className="text-xl dark:text-white font-DanaDemiBold font-bold mb-2">
            ویژگی‌های دوره
          </h2>
          <CourseFeatures features={featuresList} />
        </div>
      </div>  */}

      <Footer />
    </>
  );
}
