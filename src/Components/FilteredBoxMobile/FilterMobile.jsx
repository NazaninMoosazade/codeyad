import React, { useState } from "react";

export default function FilterMobile() {

    const [isShowBox , setIsShowBox] = useState(false)

  return (
    <>
      <div onClick={() => setIsShowBox(prev => !prev)} className="lg:hidden mx-auto text-center w-36 mt-4 rounded-lg bg-white">
        <div className="flex items-center justify-center gap-x-2  p-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
          <span className="font-DanaMeduim text-sm"> فیلتر  </span>
        </div>
      </div>

      <section className={isShowBox ? 'block relative w-full lg:hidden' : 'hidden'}>
        <div className="bottom-0 fixed w-full h-60 bg-white">
        </div>
      </section>
    </>
  );
}
