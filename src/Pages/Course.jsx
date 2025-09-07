import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import swal from "sweetalert";

import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import StatusMessage from "../Components/StatusMessage/StatusMessage";
import QuestionBox from "../Components/QuestionBox/QuestionBox";
import SessionChapters from "../Components/SessionChapters/SessionChapters";
import CommentsTextArea from "../Components/CommentTextArea/CommentTextArea";
import { useSubmitComment } from "../Hooks/useSubmitComment";

export default function Course() {
  const { courseName } = useParams();
  const localStorageData = JSON.parse(localStorage.getItem("user"));

  const [comments, setComments] = useState([]);

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
              localStorageData === null ? null : localStorageData.token
            }`,
          },
        }
      );
      if (!res.ok) throw new Error("خطا در دریافت اطلاعات دوره");
      return res.json();
    },
  });


  useEffect(() => {
    if (courseDetails?.comments?.length) {
      setComments(courseDetails.comments);
    }
  }, [courseDetails]);

  const submitCommentMutation = useSubmitComment(courseName);


  const submitComment = (newCommentBody) => {
    submitCommentMutation.mutate(newCommentBody, {
      onSuccess: () => {
        swal({
          title: "کامنت شما با موفقیت ثبت شد",
          icon: "success",
          button: "باشه",
        });
      },
      onError: () => {
        swal({
          title: "کامنت شما ثبت نشد",
          icon: "error",
          button: "باشه",
        });
      },
    });
  };

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
                  {courseDetails.createdAt?.slice(0, 10)} زمان برگزاری
                </span>
              </div>

              <p className="font-Dana leading-10 text-white pt-5 flex items-center justify-center lg:justify-start lg:max-w-[700px]">
                {courseDetails.description}
              </p>

              <div className="w-full flex-wrap flex items-center justify-center pb-4 lg:justify-start gap-x-14 lg:gap-x-32">
                <div className="font-Dana text-white flex gap-x-2.5">
                  <span>آخرین آپدیت</span>
                  <span>{courseDetails.updatedAt?.slice(0, 10) ?? "ندارد"}</span>
                </div>
              </div>

              <div className="w-full flex-wrap flex items-center justify-center pb-4 lg:justify-start gap-x-14">
                <div className="font-Dana text-white flex gap-x-2">
                  <span>تعداد دانشجو :</span>
                  <span>{courseDetails.courseStudentsCount}</span>
                </div>
              </div>

              <div className="text-textGreen flex items-center justify-center gap-x-2 lg:justify-start pb-4 font-DanaMeduim text-2xl">
                <span>قیمت دوره :</span>
                {courseDetails.price === 0 ? (
                  <span className="text-sm font-Dana">رایگان</span>
                ) : (
                  <>
                    <span>{courseDetails.price.toLocaleString("fa-IR")}</span>
                    <span className="text-sm font-DanaDemiBold mr-1">تومان</span>
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
          <div className="order-2 lg:order-1 lg:col-span-1">
            <SessionChapters sessions={courseDetails.sessions}  />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-2">
            <QuestionBox />
            <div className="bg-white dark:!bg-bgDarker h-auto w-auto rounded-xl mt-6 lg:mt-8">
              <CommentsTextArea
                submitComment={submitComment}
                comments={courseDetails.comments}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
