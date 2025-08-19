import React, { useState } from "react";
import DataTable from "../../Components/AdminPanel/DataTable";
import Table from "react-bootstrap/Table";
import swal from "sweetalert";
import Input from "../../Components/Form/Input";
import {
  maxValue,
  minValue,
  requiredValue,
} from "./../../validators/Rules.jsx";
import { useForm } from "../../Hooks/UseForm.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";

// helper گرفتن توکن
const getAuthHeaders = () => {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  return {
    Authorization: `Bearer ${localStorageData?.token}`,
  };
};

export default function AdminCourses() {
  const queryClient = useQueryClient();

  const [courseCategory, setCourseCategory] = useState("-1");
  const [courseStatus, setCourseStatus] = useState("start");
  const [courseCover, setCourseCover] = useState({});

  const [formState, onInputHandler] = useForm(
    {
      name: { value: "", isValid: false },
      description: { value: "", isValid: false },
      shortName: { value: "", isValid: false },
      price: { value: "", isValid: false },
    },
    false
  );

  // 📌 گرفتن لیست دوره‌ها
  const { data: courses = [], isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/v1/courses", {
        headers: getAuthHeaders(),
      });
      if (!res.ok) throw new Error("خطا در دریافت لیست دوره‌ها");
      return res.json();
    },
  });

  // 📌 گرفتن دسته‌بندی‌ها
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/v1/category");
      if (!res.ok) throw new Error("خطا در دریافت دسته‌بندی‌ها");
      return res.json();
    },
  });

  // 📌 افزودن دوره جدید
  const addCourseMutation = useMutation({
    mutationFn: async (newCourse) => {
      const res = await fetch("http://localhost:5000/v1/courses", {
        method: "POST",
        headers: getAuthHeaders(),
        body: newCourse,
      });
      if (!res.ok) throw new Error("خطا در افزودن دوره");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
      swal({ title: "دوره جدید با موفقیت اضافه شد", icon: "success" });
    },
    onError: () => {
      swal({ title: "خطا در افزودن دوره", icon: "error" });
    },
  });

  // 📌 حذف دوره
  const deleteCourseMutation = useMutation({
    mutationFn: async (courseID) => {
      const res = await fetch(`http://localhost:5000/v1/courses/${courseID}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!res.ok) throw new Error("خطا در حذف دوره");
      return courseID;
    },
    onSuccess: (deletedId) => {
      queryClient.setQueryData(["courses"], (old) =>
        old.filter((c) => c._id !== deletedId)
      );
      swal({ title: "دوره حذف شد", icon: "success" });
    },
    onError: () => {
      swal({ title: "خطا در حذف دوره", icon: "error" });
    },
  });

  // 📌 Submit فرم
  const addNewCourse = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("name", formState.inputs.name.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("shortName", formState.inputs.shortName.value);
    formData.append("categoryID", courseCategory);
    formData.append("price", formState.inputs.price.value);
    formData.append("status", courseStatus);
    formData.append("cover", courseCover);

    addCourseMutation.mutate(formData);
  };

  if (isLoading)
    return <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />;
  if (isError)
    return <StatusMessage status="error" message="مشکلی در دریافت دوره‌ها پیش آمد" />;

  return (
    <>
      <div className="container bg-white h-auto">
        <form className="grid grid-cols-2 mr-6" onSubmit={addNewCourse}>
          {/* نام دوره */}
          <div className="flex flex-col mt-3">
            <label className="font-DanaDemiBold">نام دوره</label>
            <Input
              type="text"
              className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
              id="name"
              element="input"
              placeholder="لطفا نام دوره را وارد کنید"
              validations={[
                { ...requiredValue },
                { ...minValue, min: 5 },
                { ...maxValue, max: 50 },
              ]}
              onInputHandler={onInputHandler}
            />
          </div>

          {/* توضیحات دوره */}
          <div className="flex flex-col mt-3">
            <label className="font-DanaDemiBold">توضیحات دوره</label>
            <Input
              type="text"
              className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
              id="description"
              element="input"
              placeholder="لطفا توضیحات دوره را وارد کنید"
              validations={[
                { ...requiredValue },
                { ...minValue, min: 10 },
                { ...maxValue, max: 200 },
              ]}
              onInputHandler={onInputHandler}
            />
          </div>

          {/* URL دوره */}
          <div className="flex flex-col mt-3">
            <label className="font-DanaDemiBold">Url دوره</label>
            <Input
              type="text"
              className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
              id="shortName"
              element="input"
              placeholder="Url دوره را وارد کنید"
              validations={[
                { ...requiredValue },
                { ...minValue, min: 5 },
                { ...maxValue, max: 30 },
              ]}
              onInputHandler={onInputHandler}
            />
          </div>

          {/* قیمت دوره */}
          <div className="flex flex-col mt-3">
            <label className="font-DanaDemiBold">قیمت دوره</label>
            <Input
              type="number"
              className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
              id="price"
              element="input"
              placeholder="لطفا قیمت دوره را وارد کنید"
              validations={[
                { ...requiredValue },
                { ...minValue, min: 1 },
              ]}
              onInputHandler={onInputHandler}
            />
          </div>

          {/* دسته‌بندی دوره */}
          <div>
            <label className="font-Dana pl-3">دسته‌بندی دوره</label>
            <select
              onChange={(e) => setCourseCategory(e.target.value)}
              className="mt-3 font-DanaDemiBold"
            >
              <option value="-1">دسته بندی دوره را انتخاب کنید</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          {/* عکس دوره */}
          <div className="mt-3">
            <label className="block font-DanaMeduim">عکس دوره</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setCourseCover(e.target.files[0])}
            />
          </div>

          {/* وضعیت دوره */}
          <div className="mt-3">
            <label className="font-DanaMeduim mb-2">وضعیت دوره</label>
            <div className="flex items-center gap-x-3">
              <label className="font-Dana">
                <span>در حال برگزاری</span>
                <input
                  type="radio"
                  value="start"
                  name="condition"
                  defaultChecked
                  onInput={(e) => setCourseStatus(e.target.value)}
                />
              </label>
              <label className="font-Dana">
                <span>پیش فروش</span>
                <input
                  type="radio"
                  value="presell"
                  name="condition"
                  onInput={(e) => setCourseStatus(e.target.value)}
                />
              </label>
            </div>
            <div className="!font-DanaMeduim btn btn-primary mt-9 mb-3">
              <input
                type="submit"
                value={addCourseMutation.isLoading ? "در حال افزودن..." : "افزودن"}
                disabled={!formState.isFormValid || addCourseMutation.isLoading}
              />
            </div>
          </div>
        </form>
      </div>

      {/* جدول دوره‌ها */}
      <DataTable title={"لیست دوره ها"}>
        <div className="container">
          <Table>
            <thead className="font-DanaDemiBold">
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
            <tbody className="font-Dana">
              {courses.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>{course.name}</td>
                  <td>{course.price === 0 ? "رایگان" : course.price}</td>
                  <td>{course.isComplete === 0 ? "در حال برگزاری" : "تکمیل شده"}</td>
                  <td className="cursor-pointer">{course.shortName}</td>
                  <td>{course.support}</td>
                  <td>{course.categoryID?.title || "بدون دسته‌بندی"}</td>
                  <td>
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs md:text-sm"
                    >
                      ویرایش
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        swal({
                          title: "از حذف دوره مطمئن هستی؟",
                          icon: "warning",
                          buttons: ["نه", "آره"],
                        }).then((ok) => {
                          if (ok) deleteCourseMutation.mutate(course._id);
                        })
                      }
                      type="button"
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs md:text-sm"
                      disabled={deleteCourseMutation.isLoading}
                    >
                      {deleteCourseMutation.isLoading ? "..." : "حذف"}
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
