import React, { useState } from "react";
import Input from "../../Components/Form/Input";
import { useForm } from "../../Hooks/UseForm.jsx";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import swal from "sweetalert";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";
import { minValue } from "../../validators/Rules.jsx";
import DataTable from "../../Components/AdminPanel/DataTable";
import Table from "react-bootstrap/Table";

export default function AdminSession() {
  const [sessionsVideo, setSessionsVideo] = useState(null);
  const [sessionsStatus, setSessionsStatus] = useState(1);
  const [sessionCourse, setSessionsCourse] = useState("-1");
  const queryClient = useQueryClient();

  const [formState, onInputHandler] = useForm(
    {
      title: { value: "", isValid: false },
      time: { value: "", isValid: false },
    },
    false
  );

  // گرفتن لیست دوره‌ها
  const {
    data: courses,
    isLoading: isCoursesLoading,
    isError: isCoursesError,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: () =>
      fetch("http://localhost:5000/v1/courses").then((res) => res.json()),
  });

  // گرفتن همه جلسات
  const {
    data: sessions,
    isLoading: isSessionsLoading,
    isError: isSessionsError,
  } = useQuery({
    queryKey: ["sessions"],
    queryFn: () =>
      fetch("http://localhost:5000/v1/courses/sessions").then((res) =>
        res.json()
      ),
  });

  // افزودن جلسه جدید
  const createSessionMutation = useMutation({
    mutationFn: (newSession) => {
      const localStorageData = JSON.parse(localStorage.getItem("user"));
      return fetch(
        `http://localhost:5000/v1/courses/${sessionCourse}/sessions`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${localStorageData.token}` },
          body: newSession,
        }
      );
    },
    onSuccess: (res) => {
      if (res.ok) {
        swal({
          title: "جلسه با موفقیت افزوده شد",
          icon: "success",
          buttons: "اوکی",
        });
        queryClient.invalidateQueries({ queryKey: ["sessions"] });
      } else {
        swal({
          title: "خطا در افزودن جلسه",
          icon: "error",
          buttons: "باشه",
        });
      }
    },
  });

  const submitHandler = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("title", formState.inputs.title.value);
    formData.append("time", formState.inputs.time.value);
    formData.append("video", sessionsVideo);
    formData.append("free", sessionsStatus);

    createSessionMutation.mutate(formData);
  };

  // حذف جلسه
  const removeSessionMutation = useMutation({
    mutationFn: (sessionID) => {
      const localStorageData = JSON.parse(localStorage.getItem("user"));
      return fetch(
        `http://localhost:5000/v1/courses/sessions/${sessionID}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorageData.token}` },
        }
      );
    },
    onSuccess: (res) => {
      if (res.ok) {
        swal({
          title: "جلسه با موفقیت حذف شد",
          icon: "success",
          buttons: "اوکی",
        });
        queryClient.invalidateQueries({ queryKey: ["sessions"] });
      }
    },
  });

  // نمایش وضعیت لودینگ یا خطا
  if (isCoursesLoading || isSessionsLoading)
    return <StatusMessage status="loading" message="در حال بارگذاری..." />;
  if (isCoursesError || isSessionsError)
    return (
      <StatusMessage status="error" message="مشکلی در دریافت اطلاعات پیش آمد" />
    );

  return (
    <>
      <div className="container">
        <div className="w-[90%] h-auto bg-white mx-auto mt-10">
          <h1 className="font-Dana text-lg p-1">افزودن جلسه جدید</h1>

          <form className="grid grid-cols-2 mr-6" onSubmit={submitHandler}>
            {/* عنوان جلسه */}
            <div className="flex flex-col mt-3">
              <label className="font-DanaDemiBold"> عنوان جلسه</label>
              <Input
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                onInputHandler={onInputHandler}
                validations={[minValue]}
                id="title"
                element="input"
                type="text"
                placeholder=" لطفا عنوان جلسه را وارد کنید "
              />
            </div>

            {/* مدت زمان */}
            <div className="flex flex-col mt-3">
              <label className="font-DanaDemiBold"> مدت زمان جلسه</label>
              <Input
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                onInputHandler={onInputHandler}
                validations={[minValue]}
                id="time"
                element="input"
                type="text"
                placeholder="لطفا  مدت زمان جلسه را وارد کنید..."
              />
            </div>

            {/* ویدیو */}
            <div className="flex flex-col mt-3">
              <label className="font-DanaDemiBold">ویدیو جلسه </label>
              <input
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                type="file"
                onChange={(event) => setSessionsVideo(event.target.files[0])}
              />
            </div>

            {/* وضعیت دوره */}
            <div>
              <label className="font-DanaMeduim mb-2 mt-4">وضعیت دوره</label>
              <div className="flex items-center gap-x-3">
                <label className="font-Dana">
                  <span>رایگان</span>
                  <input
                    type="radio"
                    value="1"
                    name="condition"
                    checked={sessionsStatus == 1}
                    onChange={(e) => setSessionsStatus(e.target.value)}
                  />
                </label>
                <label className="font-Dana">
                  <span> نقدی</span>
                  <input
                    type="radio"
                    value="0"
                    name="condition"
                    checked={sessionsStatus == 0}
                    onChange={(e) => setSessionsStatus(e.target.value)}
                  />
                </label>
              </div>
            </div>

            {/* انتخاب دوره */}
            <div className="mt-3">
              <label className="font-Dana">انتخاب دوره</label>
              <select
                className="font-Dana bg-gray-200 mr-2"
                onChange={(event) => setSessionsCourse(event.target.value)}
              >
                <option value={"-1"}>دوره مد نظر را انتخاب کنید</option>
                {courses.map((course) => (
                  <option value={course._id} key={course._id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>

            {/* دکمه افزودن */}
            <div className="mt-3">
              <div className="!font-Dana btn btn-primary mt-9 mb-3">
                <input type="submit" value="افزودن" />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* جدول جلسات */}
      <DataTable title={"لیست جلسات"}>
        <div className="container">
          <Table>
            <thead className="font-DanaDemiBold">
              <tr>
                <th>شناسه</th>
                <th>عنوان</th>
                <th>زمان</th>
                <th>دوره</th>
                <th>آخرین به‌روزرسانی</th>
                <th> وضعیت </th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody className="font-Dana">
              {sessions.map((session, index) => (
                <tr key={session._id}>
                  <td>{index + 1}</td>
                  <td>{session.title}</td>
                  <td>{session.time}</td>
                  <td>{session.course?.name}</td>
                  <td>{session.updatedAt?.slice(0, 10)}</td>
                  <td>{session.free === 1 ? "رایگان" : "نقدی"}</td>


                  <td>
                    <button
                      onClick={() => removeSessionMutation.mutate(session._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs md:text-sm"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </DataTable>
    </>
  );
}
