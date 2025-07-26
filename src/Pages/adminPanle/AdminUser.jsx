import React from "react";
import DataTable from "../../Components/adminPanel/DataTable";
import Table from "react-bootstrap/Table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";
import swal from "sweetalert";

export default function AdminUser() {
  const queryClient = useQueryClient();

  const fetchUsers = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const response = await fetch("http://localhost:5000/v1/users", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });
    if (!response.ok) {
      throw new Error("خطا در دریافت اطلاعات کاربران");
    }
    return response.json();
  };

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  // ✅ Mutation برای حذف کاربر
  const deleteUserMutation = useMutation({
    mutationFn: async (userID) => {
      const localStorageData = JSON.parse(localStorage.getItem("user"));
      const response = await fetch(`http://localhost:5000/v1/users/${userID}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("خطا در حذف کاربر");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]); // دوباره لیست رو بگیر
      swal("کاربر با موفقیت حذف شد", { icon: "success" });
    },
    onError: () => {
      swal("خطا در حذف کاربر", { icon: "error" });
    },
  });

  const removeUser = (userID) => {
    swal({
      title: "آیا از حذف اطمینان داری؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (result) {
        deleteUserMutation.mutate(userID);
      }
    });
  };

  if (isLoading)
    return (
      <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />
    );

  if (isError)
    return (
      <StatusMessage status="error" message="در حال حاضر کاربری وجود ندارد " />
    );

  return (
    <DataTable title={"لیست کاربران"}>
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <Table>
          <thead>
            <tr className="font-DanaDemiBold">
              <th>شناسه</th>
              <th> نام و نام خانوادگی </th>
              <th>ایمیل</th>
              <th>رمز عبور</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="font-Dana">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password.slice(0, 10)}</td>
                <td>
                  <button
                    onClick={() => removeUser(user._id)}
                    disabled={deleteUserMutation.isLoading}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs md:text-sm"
                  >
                    {deleteUserMutation.isLoading ? "در حال حذف..." : "حذف"}
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
