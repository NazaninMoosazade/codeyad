import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import DataTable from "../../Components/AdminPanel/DataTable";
import Table from "react-bootstrap/Table";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";
import swal from "sweetalert";

// گرفتن توکن از localStorage
const getAuthHeaders = () => {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  return {
    Authorization: `Bearer ${localStorageData?.token}`,
    "Content-Type": "application/json",
  };
};

// گرفتن مقالات
async function fetchArticles() {
  const res = await fetch("http://localhost:5000/v1/articles");
  if (!res.ok) throw new Error("خطا در دریافت مقالات");
  return res.json();
}

// حذف مقاله
async function deleteArticle(articleID) {
  const res = await fetch(`http://localhost:5000/v1/articles/${articleID}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error("خطا در حذف مقاله");
  return res.json();
}

export default function AdminArticles() {
  const queryClient = useQueryClient();

  const {
    data: articles = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  const mutation = useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]); // رفرش لیست مقالات
      swal({
        title: "موفق!",
        text: "مقاله مورد نظر حذف شد ✅",
        icon: "success",
        button: "باشه",
      });
    },
    onError: () => {
      swal({
        title: "خطا!",
        text: "مشکلی در حذف مقاله پیش آمد ❌",
        icon: "error",
        button: "باشه",
      });
    },
  });

  const removeArticle = (articleID) => {
    swal({
      title: "آیا از حذف مقاله اطمینان داری؟",
      icon: "warning",
      buttons: ["انصراف", "حذف"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        mutation.mutate(articleID);
      }
    });
  };

  if (isLoading)
    return (
      <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />
    );
  if (isError)
    return (
      <StatusMessage status="error" message="مشکلی در دریافت مقالات پیش آمد" />
    );

  return (
    <DataTable title={"لیست مقاله ها"}>
      <div className="container">
        <Table striped bordered hover responsive>
          <thead className="font-DanaDemiBold">
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>لینک</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody className="font-Dana">
            {articles.map((article, index) => (
              <tr key={article._id}>
                <td>{index + 1}</td>
                <td>{article.title}</td>
                <td>{article.shortName}</td>
                <td>
                  <button
                    type="button"
                    className="bg-blue text-white px-3 py-1 rounded hover:bg-blue-600 text-xs md:text-sm"
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => removeArticle(article._id)}
                    type="button"
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
  );
}
