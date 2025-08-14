import React from "react";
import DataTable from "../../Components/adminPanel/DataTable";
import Table from "react-bootstrap/Table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import swal from "sweetalert";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";
import Input from "../../Components/Form/Input";
import {
  maxValue,
  minValue,
  requiredValue,
} from "./../../validators/Rules.jsx";
import { useForm } from "../../Hooks/UseForm.jsx";

export default function AdminCategory() {
  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const queryClient = useQueryClient();

const addCategoryMutation = useMutation({
  mutationFn: async (newCategory) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const response = await fetch("http://localhost:5000/v1/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorageData.token}`,
      },
      body: JSON.stringify(newCategory),
    });
    if (!response.ok) throw new Error("خطا در افزودن دسته‌بندی");
    return response.json();
  },
  onSuccess: () => {
    swal("دسته‌بندی با موفقیت اضافه شد", { icon: "success" });
    queryClient.invalidateQueries(["categorys"]); // آپدیت لیست
  },
  onError: () => {
    swal("خطا در افزودن دسته‌بندی", { icon: "error" });
  },
});

const addNewCategory = (event) => {
  event.preventDefault();

  const newCategory = {
    title: formState.inputs.title.value,
    name: formState.inputs.shortName.value,
  };

  addCategoryMutation.mutate(newCategory);
};


  

  // گرفتن دسته‌بندی‌ها
  const FetchCategory = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await fetch("http://localhost:5000/v1/category", {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
    return response.json();
  };

  const {
    data: categorys = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categorys"],
    queryFn: FetchCategory,
    refetchOnWindowFocus: true,
  });

  // حذف دسته‌بندی
  const deleteCategoryMutation = useMutation({
    mutationFn: async (id) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await fetch(`http://localhost:5000/v1/category/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${user.token}` },
      });
      if (!response.ok) throw new Error("خطا در حذف دسته‌بندی");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["categorys"]);
      swal("دسته‌بندی با موفقیت حذف شد", { icon: "success" });
    },
    onError: () => swal("خطا در حذف دسته‌بندی", { icon: "error" }),
  });

  const removeCategory = (id) => {
    swal({
      title: "آیا از حذف مطمئن هستی؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((ok) => {
      if (ok) deleteCategoryMutation.mutate(id);
    });
  };

  if (isLoading)
    return <StatusMessage status="loading" message="در حال بارگذاری..." />;
  if (isError) return <StatusMessage status="error" message="مشکلی پیش آمده" />;

  return (
    <>
      <div className="bg-white w-a h-52 mx-auto mt-5 ">
        <form>
          <div className="grid grid-cols-2 p-3 relative">
            <div className="flex flex-col">
              <label className="font-DanaDemiBold mt-4">عنوان</label>
              <Input
                type="text"
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                id="title"
                element="input"
                placeholder="لطفا عنوان را وارد کنید"
               validations={[{ value: requiredValue }, { value: minValue, min: 8 }, { value: maxValue, max: 20 }]}
                onInputHandler={onInputHandler}
              />
              <span className="error-message text-danger"></span>
            </div>

            <div className="flex flex-col">
              <label className="font-DanaDemiBold mt-4">اسم کوتاه </label>
              <Input
                type="text"
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                id="shortName"
                element="input"
                placeholder="لطفا اسم کوتاه را وارد کنید"
validations={[{ value: requiredValue }, { value: minValue, min: 8 }, { value: maxValue, max: 20 }]}
                onInputHandler={onInputHandler}
              />
              <span className="error-message text-danger"></span>
            </div>
          </div>

          <div className="absolute left-32">
       <input
  type="submit"
  value={addCategoryMutation.isLoading ? "در حال افزودن..." : "افزودن دسته‌بندی جدید"}
  className="btn btn-primary !font-Dana"
  onClick={addNewCategory}
/>

          </div>
        </form>
      </div>
      <DataTable title={"دسته‌بندی‌ها"}>
        <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <Table>
            <thead>
              <tr className="font-DanaMeduim">
                <th>شناسه</th>
                <th>عنوان</th>
                <th>ویرایش</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
              {categorys.map((category, index) => (
                <tr key={category._id} className="font-DanaMeduim">
                  <td>{index + 1}</td>
                  <td>{category.title}</td>
                  <td>
                    <button className="bg-blue text-white px-3 py-1 font-DanaMeduim rounded">
                      ویرایش
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => removeCategory(category._id)}
                      className="bg-red-500 text-white px-3 py-1 font-DanaMeduim rounded"
                      disabled={deleteCategoryMutation.isLoading}
                    >
                      {deleteCategoryMutation.isLoading
                        ? "در حال حذف..."
                        : "حذف"}
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
