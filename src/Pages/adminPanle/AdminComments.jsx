import React from "react";
import DataTable from "../../Components/AdminPanel/DataTable";
import Table from "react-bootstrap/Table";
import swal from "sweetalert";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";

export default function AdminComments() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const queryClient = useQueryClient();

  // دریافت تمام کامنت‌ها
  const { data: comments = [], isLoading, isError } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      fetch("http://localhost:5000/v1/comments").then((res) => res.json()),
  });

  // حذف کامنت
  const removeCommentMutation = useMutation({
    mutationFn: (commentID) =>
      fetch(`http://localhost:5000/v1/comments/${commentID}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorageData.token}` },
      }),
    onSuccess: () => {
      swal({ title: "کامنت با موفقیت حذف شد", icon: "success", buttons: "ok" });
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: () => {
      swal({ title: "عملیات با خطا مواجه شد", icon: "error", buttons: "تلاش مجدد" });
    },
  });

  // تایید کامنت
  const acceptCommentMutation = useMutation({
    mutationFn: (commentID) =>
      fetch(`http://localhost:5000/v1/comments/accept/${commentID}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${localStorageData.token}` },
      }),
    onSuccess: () => {
      swal({ title: "کامنت تایید شد", icon: "success", buttons: "ok" });
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: () => {
      swal({ title: "عملیات با خطا مواجه شد", icon: "error", buttons: "تلاش مجدد" });
    },
  });

  // پاسخ به کامنت
  const answerCommentMutation = useMutation({
    mutationFn: ({ commentID, answerText }) =>
      fetch(`http://localhost:5000/v1/comments/answer/${commentID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageData.token}`,
        },
        body: JSON.stringify({ body: answerText }),
      }),
    onSuccess: () => {
      swal({ title: "پاسخ با موفقیت ثبت شد", icon: "success", buttons: "ok" });
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: () => {
      swal({ title: "عملیات با خطا مواجه شد", buttons: "سعی مجدد" });
    },
  });

  // توابع مدیریت دکمه‌ها
  const handleRemove = (id) => {
    swal({ title: "از حذف کامنت اطمینان داری؟", icon: "warning", buttons: ["نه", "آره"] })
      .then((res) => { if (res) removeCommentMutation.mutate(id); });
  };

  const handleAccept = (id) => {
    swal({ title: "از تایید کامنت اطمینان داری؟", icon: "warning", buttons: ["نه", "آره"] })
      .then((res) => { if (res) acceptCommentMutation.mutate(id); });
  };

  const handleAnswer = (id) => {
    swal({ title: "پاسخ مورد نظر را وارد کنید", content: "input" })
      .then((answerText) => { if (answerText) answerCommentMutation.mutate({ commentID: id, answerText }); });
  };

  const showCommentBody = (body) => {
    swal({ title: body, buttons: "ok" });
  };

  if (isLoading)
    return <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />;
  if (isError)
    return <StatusMessage status="error" message="مشکلی در دریافت کامنت‌ها پیش آمد" />;

  return (
    <DataTable title={"لیست کامنت‌ها"}>
      <div className="container">
        <Table>
          <thead className="font-DanaDemiBold">
            <tr>
              <th>شناسه</th>
              <th>کاربر</th>
              <th>دوره</th>
              <th>مشاهده</th>
              <th>پاسخ</th>
              <th>تایید</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody className="font-Dana">
            {comments.map((comment, index) => (
              <tr key={comment._id}>
                <td className={comment.answer === 1 ? "!bg-green-500" : "!bg-red-500"}>
                  {index + 1}
                </td>
                <td>{comment.body}</td>
                <td>{comment.course}</td>

                {/* دکمه مشاهده */}
                <td>
                  <button
                    onClick={() => showCommentBody(comment.body)}
                    className=" px-3 py-1 rounded hover:bg-blue-600 text-xs md:text-sm"
                  >
                    مشاهده
                  </button>
                </td>

                {/* دکمه پاسخ */}
                <td>
                  <button
                    onClick={() => handleAnswer(comment._id)}
                    disabled={answerCommentMutation.isLoading}
                    className={` px-3 py-1 rounded hover:bg-blue-600 text-xs md:text-sm ${
                      answerCommentMutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {answerCommentMutation.isLoading ? "در حال ارسال..." : "پاسخ"}
                  </button>
                </td>

                {/* دکمه تایید */}
                <td>
                  <button
                    onClick={() => handleAccept(comment._id)}
                    disabled={acceptCommentMutation.isLoading}
                    className={`btn btn-success text-white px-3 py-1 rounded text-xs md:text-sm ${
                      acceptCommentMutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {acceptCommentMutation.isLoading ? "در حال تایید..." : "تایید"}
                  </button>
                </td>

                {/* دکمه حذف */}
                <td>
                  <button
                    onClick={() => handleRemove(comment._id)}
                    disabled={removeCommentMutation.isLoading}
                    className={`bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs md:text-sm ${
                      removeCommentMutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {removeCommentMutation.isLoading ? "در حال حذف..." : "حذف"}
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
