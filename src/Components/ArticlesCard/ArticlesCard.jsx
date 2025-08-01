import React from "react";
import { Link } from "react-router-dom";

export default function ArticlesCard(props) {
  return (
    <Link  className="no-underline text-inherit"  to={`/mag/${props.shortName}`}>
      <div
        className={`w-full mb-4 bg-white dark:!bg-bgDarker rounded-xl shadow-md overflow-hidden flex flex-col`}
      >
        {/* تصویر مقاله */}
        <div className="h-48 w-full">
          <img
            src={`http://localhost:5000/courses/covers/${props.cover}`}
            alt={props.cover}
            className="w-full h-full object-cover"
          />
        </div>

        {/* محتوای مقاله */}
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h3 className="text-lg font-bold mb-2 font-DanaDemiBold dark:!text-white text-gray-800">
            {props.title}
          </h3>
          <p className="text-sm no-underline dark:text-gray-300 font-Dana text-gray-600 mb-4 line-clamp-3">
            {props.excerpt}
          </p>
          <button className="text-blue  font-DanaDemiBold  mt-auto self-start">
            ادامه مطلب →
          </button>
        </div>
      </div>
    </Link>
  );
}
