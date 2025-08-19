import React, { useState } from "react";
import Input from "../../Components/Form/Input";
import { useForm } from "../../Hooks/UseForm.jsx";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import swal from "sweetalert";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";
import { requiredValue, minValue, maxValue } from "../../validators/Rules.jsx";
import DataTable from "../../Components/AdminPanel/DataTable";
import Table from "react-bootstrap/Table";

export default function AdminArticles() {
  const queryClient = useQueryClient();

  const [articlesCategory, setArticlesCategory] = useState("-1");
  const [articlesCover, setArticlesCover] = useState({});

  const [formState, onInputHandler] = useForm(
    {
      title: { value: "", isValid: false },
      shortName: { value: "", isValid: false },
      description: { value: "", isValid: false },
      body: { value: "", isValid: false },
    },
    false
  );

  // گرفتن دسته‌بندی‌ها
  const { data: categories = [], isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/v1/category");
      if (!res.ok) throw new Error("خطا در دریافت دسته‌بندی‌ها");
      return res.json();
    },
  });

  // گرفتن مقالات
  const { data: articles = [] } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/v1/articles");
      if (!res.ok) throw new Error("خطا در دریافت مقالات");
      return res.json();
    },
  });

  // افزودن مقاله جدید
  const addArticleMutation = useMutation({
    mutationFn: async (newArticle) => {
      const localStorageData = JSON.parse(localStorage.getItem("user"));
      const res = await fetch("http://localhost:5000/v1/articles", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorageData?.token}`,
        },
        body: newArticle,
      });
      if (!res.ok) throw new Error("خطا در افزودن مقاله");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
      swal({ title: "مقاله جدید با موفقیت اضافه شد", icon: "success" });
    },
    onError: () => {
      swal({ title: "خطا در افزودن مقاله", icon: "error" });
    },
  });

  // حذف مقاله
  const deleteArticleMutation = useMutation({
    mutationFn: async (id) => {
      const localStorageData = JSON.parse(localStorage.getItem("user"));
      const res = await fetch(`http://localhost:5000/v1/articles/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorageData?.token}`,
        },
      });
      if (!res.ok) throw new Error("خطا در حذف مقاله");
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries(["articles"]),
  });

  const addNewArticles = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", formState.inputs.title.value);
    formData.append("shortName", formState.inputs.shortName.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("body", formState.inputs.body.value);
    formData.append("categoryID", articlesCategory);
    formData.append("cover", articlesCover);

    addArticleMutation.mutate(formData);
  };

  if (isLoading)
    return <StatusMessage status="loading" message="در حال بارگذاری دسته‌بندی‌ها..." />;
  if (isError)
    return <StatusMessage status="error" message="مشکلی در دریافت دسته‌بندی‌ها پیش آمد" />;

  return (
    <>
      <div className="bg-white w-[95%] h-auto mx-auto mt-5">
        <form onSubmit={addNewArticles}>
          <div className="p-3">
            <h1 className="font-DanaDemiBold text-xl dark:text-white">افزودن مقاله جدید</h1>

            <div className="flex flex-col">
              <label className="font-DanaDemiBold mt-4">عنوان</label>
              <Input
                type="text"
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                id="title"
                element="input"
                onInputHandler={onInputHandler}
                validations={[minValue]}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-DanaDemiBold mt-4">لینک</label>
              <Input
                type="text"
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                id="shortName"
                element="input"
                onInputHandler={onInputHandler}
                validations={[minValue]}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-DanaDemiBold mt-4">چکیده</label>
              <Input
                type="text"
                className="font-Dana w-[80%] !h-36 rounded-md p-2 mt-2 border border-gray-500"
                id="description"
                element="textarea"
                onInputHandler={onInputHandler}
                validations={[minValue]}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-DanaDemiBold mt-4">محتوای مقاله</label>
              <Input
                type="text"
                className="font-Dana w-[80%] !h-44 rounded-md p-2 mt-2 border border-gray-500"
                id="body"
                element="textarea"
                onInputHandler={onInputHandler}
                validations={[minValue]}
              />
            </div>

            <div className="flex flex-col w-[20%] mb-6">
              <label className="font-DanaDemiBold mt-4">دسته بندی</label>
              <select
                className="font-DanaMeduim mt-2 bg-slate-200"
                onChange={(event) => setArticlesCategory(event.target.value)}
              >
                <option value="-1" className="!font-DanaDemiBold">
                  دسته بندی مقاله را انتخاب کنید
                </option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col w-[25%]">
              <label className="font-DanaDemiBold mt-4">عکس محصول</label>
              <input
                type="file"
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                onChange={(event) => setArticlesCover(event.target.files[0])}
              />
            </div>

            <div className="mt-5">
              <input
                type="submit"
                value={addArticleMutation.isLoading ? "در حال افزودن..." : "افزودن"}
                className="btn btn-primary !font-DanaDemiBold"
                disabled={!formState.isFormValid || addArticleMutation.isLoading}
              />
            </div>
          </div>
        </form>
      </div>

      {/* جدول مقالات */}
      <DataTable title={"لیست مقاله ها"}>
        <div className="container">
          <Table>
            <thead className="font-DanaDemiBold">
              <tr>
                <th>شناسه</th>
                <th>عنوان</th>
                <th>لینک</th>
                <th>نویسنده</th>
                <th>دسته بندی</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody className="font-Dana">
              {articles.map((article, index) => (
                <tr key={article._id}>
                  <td>{index + 1}</td>
                  <td>{article.title}</td>
                  <td>{article.shortName}</td>
                  <td>{article.creator?.username || "ناشناخته"}</td>
                  <td>{article.categoryID?.title || "بدون دسته‌بندی"}</td>
                  <td>
                    <button
                      onClick={() =>
                        swal({
                          title: "از حذف مقاله مطمئن هستی؟",
                          icon: "warning",
                          buttons: ["نه", "آره"],
                        }).then((ok) => {
                          if (ok) deleteArticleMutation.mutate(article._id);
                        })
                      }
                      type="button"
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs md:text-sm"
                      disabled={deleteArticleMutation.isLoading}
                    >
                      {deleteArticleMutation.isLoading ? "..." : "حذف"}
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
