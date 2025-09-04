import React, { useEffect, useState } from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { useParams, Link } from "react-router-dom";

export default function Session() {
  const { courseName, sessionID } = useParams();
  const [session, setSession] = useState({});
  const [sessions, setSessions] = useState([]);
  const [activeLink, setActiveLink] = useState(sessionID || null); // لینک فعال اولیه

  const localStorageData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!courseName || !sessionID) return;

    fetch(`http://localhost:5000/v1/courses/${encodeURIComponent(courseName)}/${sessionID}`, {
      headers: {
        Authorization: `Bearer ${localStorageData?.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setSession(data.session || {});
          setSessions(data.sessions || []);
        }
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
      });
  }, [courseName, sessionID]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  return (
    <>
      <Header />
      <section className="flex flex-wrap">
        {/* سایدبار */}
        <div className="w-full md:w-1/3 p-4">
          <div className="container">
            <div className="bg-gray-100 rounded-lg shadow-lg p-4 dark:bg-darker">
              <div className="flex items-center justify-center border-b pb-2 mb-4">
                <span className="font-DanaDemiBold flex items-center dark:text-white">
                  لیست جلسات
                </span>
              </div>

              {sessions.length === 0 ? (
                <div className="text-center py-6 dark:text-white">
                  در حال بارگذاری جلسات...
                </div>
              ) : (
                <ul className="space-y-2">
                  {sessions.map((s) => (
                    <li
                      key={s._id}
                      className={`mb-1 flex justify-between items-center child:font-Dana dark:!bg-slate-900 bg-white rounded-lg shadow-md p-3 overflow-y-auto ${
                        activeLink === s._id ? "text-blue-500" : ""
                      }`}
                    >
                      <Link
                        to={`/${courseName}/${s._id}`}
                        onClick={() => handleLinkClick(s._id)}
                        className="flex justify-between w-full"
                      >
                        <span className="text-sm md:text-base dark:text-white">{s.title}</span>
                        <span className="text-sm text-gray-500 dark:text-white">{s.time}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* محتوای اصلی */}
        <div className="w-full md:w-2/3 p-4">
          <div className="container">
            <div className="bg-white rounded-lg shadow-lg dark:!bg-darker p-4">
              <div className="flex items-center justify-between border-b pb-2 mb-4">
                <Link
                  className="text-sm font-DanaDemiBold dark:text-white"
                  to="/"
                >
                  به خانه بروید
                </Link>
              </div>

              {/* نمایش جزئیات جلسه */}
              <div className="dark:text-white">
                <h2 className="font-DanaDemiBold text-lg mb-2">{session.title || "عنوان جلسه"}</h2>
                <p>{session.description || "توضیحات جلسه هنوز بارگذاری نشده است."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
