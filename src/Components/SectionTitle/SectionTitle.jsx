import React from "react";
import { Link } from "react-router-dom";

export default function SectionTitle({ title, btnHref, btnTitle }) {
  return (
    <div className=" w-full max-w-[1600px] mx-auto px-4 lg:px-8">
      <div className="flex items-center justify-between">
        <h3 className="font-DanaDemiBold text-base sm:text-lg md:text-2xl lg:font-DanaDemiBold"> {title} </h3>

        {btnTitle ? (
          <>
            {/* Btn  */}
            <div className="no-underline p-2 md:h-11 md:w-28 lg:p-2.5 flex items-center justify-center gap-x-2 text-white bg-blue rounded-lg font-Dana">
              <Link
                to={btnHref}
                className="text-white text-sm sm:text-base font-Dana md:font-DanaDemiBold no-underline"
              >
                {btnTitle}
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
