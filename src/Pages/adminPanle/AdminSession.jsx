import React, { useEffect, useState } from "react";
import Input from "../../Components/Form/Input";
import { useForm } from "../../Hooks/UseForm.jsx";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import swal from "sweetalert";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";
import { requiredValue, minValue, maxValue } from "../../validators/Rules.jsx";
import DataTable from "../../Components/AdminPanel/DataTable";
import Table from "react-bootstrap/Table";

export default function AdminSession() {
  const [courses, setCourses] = useState([]);

  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      time: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    fetch("http://localhost:5000/v1/courses")
      .then((res) => res.json())
      .then((allData) => {
        setCourses(allData);
      });
  }, []);

    if (isLoading)
      return (
        <StatusMessage
          status="loading"
          message="در حال بارگذاری دسته‌بندی‌ها..."
        />
      );
    if (isError)
      return (
        <StatusMessage
          status="error"
          message="مشکلی در دریافت دسته‌بندی‌ها پیش آمد"
        />
      );

  return (
    <>
      <div className="container">
        <div className="w-[90%] h-auto bg-white mx-auto mt-10">
          <h1 className="font-Dana text-lg p-1">افزودن جلسه جدید</h1>

          <form className="grid grid-cols-2 mr-6">
            <div className="flex flex-col mt-3">
              <label className="font-DanaDemiBold"> عنوان جلسه</label>
              <Input
                className="w-[80%] p-1.5 font-Dana mt-2"
                onInputHandler={onInputHandler}
                validations={[minValue]}
                id="title"
                element="input"
                type="text"
                placeholder=" لطفا عنوان جلسه را وارد کنید "
              />
              <span className="error-message text-danger"></span>
            </div>

            <div className="flex flex-col mt-3">
              <label className="font-DanaDemiBold"> مدت زمان جلسه</label>
              <Input
                className="w-[80%] p-1.5 font-Dana mt-2"
                onInputHandler={onInputHandler}
                validations={[minValue]}
                id="time"
                element="input"
                type="text"
                placeholder="لطفا  مدت زمان جلسه را وارد کنید..."
              />
              <span className="error-message text-danger"></span>
            </div>

            <div className="flex flex-col mt-3">
              <label className="font-DanaDemiBold">ویدیو جلسه </label>
              <input
                className="w-[80%] p-1.5 font-Dana mt-2"
                type="file"
                // onChange={(event) => setSessionsVideo(event.target.files[0])}
              />
            </div>

            <div>
              <label className="font-DanaMeduim mb-2 mt-4">وضعیت دوره</label>
              <div className="flex items-center gap-x-3">
                <div className="font-Dana">
                  <label>
                    <span>رایگان</span>
                    <input
                      type="radio"
                      value="1"
                      name="condition"
                      checked
                      // onInput={(event) => setSessionsStatus(event.target.value)}
                    />
                  </label>
                </div>
                <div className="font-Dana">
                  <label>
                    <span> نقدی</span>
                    <input
                      type="radio"
                      value="0"
                      name="condition"
                      // onInput={(event) => setSessionsStatus(event.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-3">
                <label className="font-Dana">دسته‌بندی دوره</label>
                {/* <select
                  className="font-Dana bg-gray-200 mr-2"
                  onChange={(event) => setSessionsCourse(event.target.value)}
                >
                  <option value={"-1"}>دوره مد نظر را انتخاب کنید</option>
                  {courses.map((course) => (
                    <option value={course._id} key={course._id}>
                      {course.name}
                    </option>
                  ))}
                </select> */}
              </div>
            </div>

            <div className="mt-3">
              <div className="!font-Dana btn btn-primary mt-9 mb-3">
                <input
                  type="submit"
                  value="افزودن"
                  // onClick={createSesions}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <DataTable title={"لسیت جلسات"}>
        <div className="container">
          <Table>
            <thead className="font-DanaDemiBold">
              <tr>
                <th>شناسه</th>
                <th>عنوان</th>
                <th>زمان</th>
                <th>دوره</th>
                <th>اخرین به روز رسانی</th>
                <th> وضعیت نقد یا غیر نقد </th>
                <th>ویرایش</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody className="font-Dana">
              {/* {sessions.map((session, index) => ( */}
              <tr>
                {/* <td>{index + 1}</td>
            <td>{session.course.name}</td>
            <td>{session.time}</td>
            <td>{session.title}</td>
            <td>{session.updatedAt.slice(0, 10)}</td>
            <td>{session.free === 1 ? "رایگان" : "نقدی"}</td> */}

                <td className="border border-gray-300 px-4 py-2">
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs md:text-sm"
                  >
                    ویرایش
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    // onClick={() => removeSession(session._id)}
                    type="button"
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs md:text-sm"
                  >
                    حذف
                  </button>
                </td>
              </tr>
              {/* ))} */}
            </tbody>
          </Table>
        </div>
      </DataTable>
    </>
  );
}
