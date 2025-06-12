import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";

export default function CommentsTextArea({ comments = [] }) {
  const authContext = useContext(AuthContext);
  console.log(authContext);

  return (
    <>
      <div className="p-5">
        <h1 className="font-DanaDemiBold mr-10 md:p-2 md:text-2xl dark:text-white">
          نظرات
        </h1>

        {authContext.isLoggedIn === true ? (
          <>
            {comments.length === 0 ? (
              <p className="font-DanaDemiBold alert alert-danger">
                برای این دوره کامنتی ثبت نشده
              </p>
            ) : (
              <>
                {comments.map((comment) => (
                  <div className="w-[90%] mx-auto h-auto md:h-32 p-2 bg-gray-100 dark:!bg-darker rounded-md mt-4">
                    <div className="flex-wrap flex items-center gap-x-10 text-sm  p-3">
                      <h1 className="font-Dana text-sm dark:!text-white">
                        {comment.createdAt.slice(0, 10)}
                      </h1>
                      <h3 className="flex items-center justify-center w-24 h-7 text-center font-Dana mt-2 text-white bg-blue text-sm rounded-lg">
                        {comment.creator === "ADMIN" ? "مدیر" : "کاربر"}
                      </h3>
                      <h3 className="font-Dana mt-3 dark:text-black"></h3>
                    </div>
                    <p className="font-DanaDemiBold mr-5 mt-2 dark:!text-white">
                      {comment.body}
                    </p>

                    {/* <div className="w-auto mx-auto h-auto md:h-auto p-2 bg-slate-400 rounded-md mt-4 mb-3">
                      <div className="flex-wrap flex items-center gap-x-10 text-sm p-3">
                        <h1 className="font-Dana text-sm"></h1>
                        <h3 className="flex items-center justify-center w-24 h-7 text-center font-Dana mt-2 text-white bg-green-600 text-sm rounded-lg">
                          مدیر سایت
                        </h3>
                        <h3 className="font-Dana mt-3 dark:text-black">
                          {comment.answerContent.createdAt.slice(0, 10)}
                        </h3>
                      </div>
                      <p className="font-DanaDemiBold mr-5 mt-2 dark:text-black">
                        {comment.answerContent.body}
                      </p>
                    </div> */}
                  </div>
                ))}
              </>
            )}

            <div className="flex items-center justify-center">
              <textarea
                // onChange={onchangeHandler}
                placeholder="سوال خود را بپرسید..."
                className="w-[90%] !h-28 font-Dana bg-gray-100 dark:!bg-darker dark:text-white mt-5 p-3 rounded-md"
              >
                {/* {newCommnetBody} */}
              </textarea>
            </div>

            <div className="text-center mt-5">
              <button
                // onClick={() => submitComment(newCommnetBody)}
                className="w-20 sm:w-36 text-sm md:text-base mb-4 bg-gray-100 dark:bg-darker border-2 border-green-600 rounded-md p-2 font-Dana text-darker dark:text-white hover:bg-green-200 dark:hover:bg-green-800"
                type="submit"
              >
                ارسال
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="alert alert-primary font-DanaDemiBold">
              برای ثبت کامنت ابتدا باید <Link to="/login">ثبت نام </Link> کنید{" "}
            </div>
          </>
        )}
      </div>
    </>
  );
}
