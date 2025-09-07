import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Style.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SessionChapters({
  sessions = [],
  courseDetails,
  isUserRegisteredToThisCourse,
}) {
  const { courseName } = useParams();

  const userRegistered = courseDetails?.isUserRegisteredToThisCourse || false;

  return (
    <div className="bg-white dark:!bg-bgDarker overflow-y-scroll scrollable-session z-40 h-[450px] w-auto rounded-xl mt-6 lg:mt-8">
      <div className="flex items-center gap-x-2 lg:p-4 mb-3 pb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>

        <span className="font-DanaDemiBold text-lg dark:text-white">
          سرفصل های دوره
        </span>
      </div>

      {sessions.length === 0 ? (
        <div className="font-DanaDemiBold text-center p-6 dark:text-white">
          در حال حاضر دوره‌ای وجود ندارد
        </div>
      ) : (
        <Accordion defaultActiveKey="0" className="!border-0">
          <Accordion.Item eventKey="1" className="!border-0">
            {/* Header */}
            <Accordion.Header className="!bg-transparent !shadow-none !px-0 !py-2 font-DanaDemiBold text-base text-gray-900 dark:!bg-bgDarker dark:text-white border-b border-gray-200 dark:border-gray-700">
              جلسات دوره
            </Accordion.Header>

            {/* Body */}
            <Accordion.Body className="!px-0 !py-0">
              {sessions.map((session, index) =>
                session.free === 1 || userRegistered ? (
                  <Link
                    key={session.id || index}
                    to={`/${courseName}/${session._id}`}
                    className="!no-underline flex items-center justify-between px-3 py-3 font-Dana text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:bg-darker dark:hover:bg-gray-800 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {index + 1}
                      </span>
                      {session.title}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {session.time}
                    </span>
                  </Link>
                ) : (


                  <Link
                    key={session.id || index}
                    className="!no-underline flex items-center justify-between px-3 py-3 font-Dana text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:bg-darker dark:hover:bg-gray-800 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {index + 1}
                      </span>
                      {session.title}
                    </span>
                    <span className="flex items-center gap-x-1 text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 md:h-5 md:w-5 text-gray-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                      {session.time}
                    </span>
                  </Link>
                )
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  );
}
