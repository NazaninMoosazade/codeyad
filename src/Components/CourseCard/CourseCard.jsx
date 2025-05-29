import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard(props) {
  return (
    <div className=" mx-auto bg-white dark:!border-2 dark:!border-gray-500 dark:!bg-bgDarker mt-10 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-4 hover:shadow-lg duration-300 w-full max-w-sm">
      {/* <!-- تصویر --> */}
      <a href="/course/personal-professional-success-specialization">
        <img
          src={`http://localhost:4000/courses/covers/${props.cover}`}
          alt={props.cover}
          className="w-full h-48 object-cover"
        />
      </a>

      {/* <!-- محتوای کارت --> */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        {/* <!-- عنوان دوره --> */}
        <Link className="font-Dana no-underline text-gray-800 dark:!text-white text-base leading-6 hover:text-blue transition-colors mb-3">
          {props.name}
        </Link>

        {/* <!-- اطلاعات به روز رسانی    --> */}
        <div className="flex justify-between items-stretch pb-2">
          <span className="text-sm font-Dana text-gray-500">
            آخرین به روز رسانی
          </span>

          <span className="font-Dana text-sm text-gray-500">
            {props.updatedAt ? props.updatedAt.slice(0, 10) : "نامشخص"}
          </span>
        </div>

        {/* <!-- قیمت و دکمه --> */}

        <div className="text-blue font-bold pb-5">
          {typeof props.price === "number" ? (
            props.price === 0 ? (
              <span className="text-sm font-Dana">رایگان</span>
            ) : (
              <>
                <span>{props.price.toLocaleString("fa-IR")}</span>
                <span className="text-sm font-DanaDemiBold mr-1">تومان</span>
              </>
            )
          ) : (
            <span className="text-sm text-red-500">قیمت نامعتبر</span>
          )}
        </div>

        <div className="no-underline p-2 flex items-center justify-center gap-x-2 text-white bg-blue rounded-lg font-Dana">
          <Link className="text-white cursor-pointer text-sm font-Dana no-underline">
            {" "}
            شروع دوره{" "}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-3 font-bold text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
