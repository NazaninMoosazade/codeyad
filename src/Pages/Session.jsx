import React, { useState, useEffect } from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { useParams, Link } from "react-router-dom";

export default function Session() {
  const { courseName, sessionID } = useParams();
  const [session, setSession] = useState({});
  const [sessions, setSessions] = useState([]);
  const [activeLink, setActiveLink] = useState(sessionID);

  const localStorageData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch(`http://localhost:5000/v1/courses/${courseName}/${sessionID}`, {
      headers: {
        Authorization: `Bearer ${localStorageData?.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSession(data.session);
        setSessions(data.sessions);
        setActiveLink(data.session._id);
      })
      .catch((err) => console.error("Error fetching session:", err));
  }, [courseName, sessionID]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  return (
    <>
      <Header />
      <section className="flex flex-wrap">
        {/* لیست جلسات سمت راست */}
        <div className="w-full md:w-1/3 p-4">
          <div className="container">
            <div className="bg-gray-100 rounded-lg shadow-lg p-4 dark:bg-darker">
              <div className="flex items-center justify-center border-b pb-2 mb-4">
                <span className="font-DanaDemiBold flex items-center dark:text-white">
                  <svg
                    className="w-5 h-5 md:h-7 md:w-7 ml-2 text-black dark:!text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  لیست جلسات
                </span>
              </div>
              <div>
                <ul className="space-y-2">
                  {sessions.map((s , index) => (
                    <Link
                    className="!no-underline"
                      key={s._id}
                      to={`/${courseName}/${s._id}`}
                      onClick={() => handleLinkClick(s._id)}
                    >
                      <li
                        className={`mb-1 flex justify-between items-center child:font-Dana dark:!bg-slate-900 bg-white rounded-lg shadow-md p-3 overflow-y-auto ${
                          activeLink === s._id ? "text-green-500" : ""
                        }`}
                      >
                        <div className="flex items-center">
                          <svg
                            className="hidden md:w-5 md:h-5 text-gray-500 mr-2 ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                            />
                          </svg>
                          <span className="text-sm md:text-base no-underline !text-blue dark:text-white">
                           <span className="ml-1">{index+1}</span>
                            <span>_{s.title}</span>
                          </span>
                        </div>
                        <span className="text-sm !no-underline text-gray-500 dark:text-white">
                          {s.time}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* محتوای جلسه سمت چپ */}
        <div className="w-full md:w-2/3 p-4">
          <div className="container">
            <div className="bg-white rounded-lg shadow-lg dark:!bg-darker">
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center ">
                  <Link
                    className="text-sm font-DanaDemiBold !no-underline text-blue dark:text-white mr-2"
                    to={`/course/${courseName}`}
                  >
                    به خانه بروید
                  </Link>
                </div>
              </div>

              <div className="p-4">
                {session?.video ? (
                  <video
                    className="w-full rounded-lg shadow-lg"
                    controls
                    src={`http://localhost:4000/courses/covers/${session.video}`}
                  ></video>
                ) : (
                  <p className="text-gray-500 dark:text-white">
                    ویدیویی برای این جلسه وجود ندارد.
                  </p>
                )}

                <h2 className="font-DanaDemiBold text-lg mt-4 mb-2 dark:text-white">
                  {session?.title}
                </h2>
                <p className="dark:text-white leading-relaxed font-Dana">
                  {session?.description || "توضیحاتی برای این جلسه ثبت نشده است."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
