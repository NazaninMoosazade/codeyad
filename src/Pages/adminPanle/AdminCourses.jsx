import React from "react";
import DataTable from "../../Components/adminPanel/DataTable";
import Table from "react-bootstrap/Table";
import { useQuery } from "@tanstack/react-query";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";

export default function AdminCourses() {
  // ✅ گرفتن دوره‌ها
  const FetchCourses = async () => {
    const localStorageData = localStorage.getItem("user");
    if (!localStorageData) throw new Error("دوره ای ثبت نشده است");
    const user = JSON.parse(localStorageData);
    const response = await fetch("http://localhost:5000/v1/courses", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!response.ok) throw new Error("خطا در دریافت اطلاعات دوره ها");
    return response.json();
  };

  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: FetchCourses,
    refetchInterval: 5000, // ✅ هر ۵ ثانیه داده‌ها آپدیت می‌شوند
    refetchOnWindowFocus: true, // ✅ وقتی کاربر به تب برگردد، رفرش می‌شود
  });

  if (isLoading)
    return (
      <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />
    );
  if (isError)
    return (
      <StatusMessage status="error" message="در حال حاضر دوره ای وجود ندارد" />
    );

  return (
    <DataTable title={"لیست دوره ها"}>
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <Table>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>لینک</th>
              <th>پشتیبانی</th>
              <th>دسته بندی</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course._id || index} className="font-Dana">
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.price === 0 ? "رایگان" : course.price}</td>
                <td>
                  {course.isComplete === 0 ? "در حال برگزاری" : "تکمیل شده"}
                </td>
                <td className="cursor-pointer">{course.shortName}</td>
                <td>{course.support}</td>
                <td>
                  {course.categoryID && course.categoryID.title
                    ? course.categoryID.title
                    : "بدون دسته‌بندی"}
                </td>
                <td>
                  <button className="font-Dana text-white px-3 py-1 rounded bg-blue text-xs md:text-sm">
                    ویرایش
                  </button>
                </td>
                <td>
                  <button className="font-Dana bg-red-500 text-white px-3 py-1 rounded text-xs md:text-sm">
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </DataTable>
  );
}
