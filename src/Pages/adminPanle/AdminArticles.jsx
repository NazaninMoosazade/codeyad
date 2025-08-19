import React from "react";
import { useQuery } from "@tanstack/react-query";
import DataTable from "../../Components/AdminPanel/DataTable";
import Table from "react-bootstrap/Table";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";

async function fetchArticles() {
  const res = await fetch("http://localhost:5000/v1/articles");
  if (!res.ok) throw new Error("خطا در دریافت مقالات");
  return res.json();
}

export default function AdminArticles() {
  const {
    data: articles = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });
  if (isLoading)
    return <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />;
  if (isError)
    return <StatusMessage status="error" message="مشکلی در دریافت دوره‌ها پیش آمد" />;

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
