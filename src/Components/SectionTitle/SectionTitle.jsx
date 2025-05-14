import React from "react";
import { Link } from "react-router-dom";

export default function SectionTitle({ title, btnHref, btnTitle }) {
  return (
    <div className=" w-full max-w-[1600px] mx-auto px-4 lg:px-8">
      <div className="flex items-center justify-between">
        <h3 className="font-DanaDemiBold"> {title} </h3>

        {btnTitle ? (
          <>
            {/* Btn  */}
            <div className="no-underline  h-11 w-28 p-2.5 flex items-center justify-center gap-x-2 text-white bg-blue rounded-lg font-Dana">
              <Link
                to={btnHref}
                className="text-white font-DanaDemiBold no-underline"
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
