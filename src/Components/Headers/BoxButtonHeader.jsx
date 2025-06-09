import React from "react";
import { Link } from "react-router-dom";

export default function BoxButtonHeader({ title   }) {
  return (
      <div  className="px-2 w-full font-Dana no-underline rounded-md shadow-md bg-white py-[15px] items-center justify-center text-center dark:!text-white dark:!bg-bgDarker mb-4 mt-2 flex-grow !min-w-fit">
        {title}
      </div>
      

  );
}
