import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Style.css";

export default function SessionChapters({ sessions = [] }) {
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

        <span className="font-DanaDemiBold text-lg  dark:text-white">
          سرفصل های دوره
        </span>
      </div>

      {sessions.length === 0 ? (
        <div className="font-DanaDemiBold text-center p-6 dark:text-white">
          در حال حاضر دوره‌ای وجود ندارد
        </div>
      ) : (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header className="accordion-header font-DanaDemiBold">
              جلسات دوره
            </Accordion.Header>

            {sessions.map((session, index) => (
              <Accordion.Body
                key={session.id || index}
                className="accordionBody font-Dana"
              >
                <span className="dark:!text-white">{index + 1}</span>
                {session.title}
                <span className="dark:!text-white"> {session.time}</span>
              </Accordion.Body>
            ))}
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  );
}
