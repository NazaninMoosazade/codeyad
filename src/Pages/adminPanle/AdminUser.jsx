import React from "react";
import DataTable from "../../Components/adminPanel/DataTable";
import Table from "react-bootstrap/Table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";
import swal from "sweetalert";
import Input from "../../Components/Form/Input";
import { useForm } from "../../Hooks/UseForm";
import { maxValue, minValue, requiredValue } from "./../../validators/Rules.jsx";

export default function AdminUser() {
  const [formState, onInputHandler] = useForm(
    {
      name: { value: "", isValid: false },
      username: { value: "", isValid: false },
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
      phone: { value: "", isValid: false },
    },
    false
  );

  const queryClient = useQueryClient();

  // ✅ گرفتن کاربران
  const fetchUsers = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const response = await fetch("http://localhost:5000/v1/users", {
      headers: { Authorization: `Bearer ${localStorageData.token}` },
    });
    if (!response.ok) throw new Error("خطا در دریافت اطلاعات کاربران");
    return response.json();
  };

  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  // ✅ حذف کاربر
  const deleteUserMutation = useMutation({
    mutationFn: async (userID) => {
      const localStorageData = JSON.parse(localStorage.getItem("user"));
      const response = await fetch(`http://localhost:5000/v1/users/${userID}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorageData.token}` },
      });
      if (!response.ok) throw new Error("خطا در حذف کاربر");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      swal("کاربر با موفقیت حذف شد", { icon: "success" });
    },
    onError: () => swal("خطا در حذف کاربر", { icon: "error" }),
  });

  const removeUser = (userID) => {
    swal({
      title: "آیا از حذف اطمینان داری؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (result) deleteUserMutation.mutate(userID);
    });
  };

  // ✅ اضافه کردن کاربر جدید با useMutation
  const registerNewUserMutation = useMutation({
    mutationFn: async (newUserInfo) => {
      const response = await fetch("http://localhost:5000/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserInfo),
      });
      if (!response.ok) throw new Error("خطا در افزودن کاربر");
      return response.json();
    },
    onSuccess: () => {
      swal("کاربر با موفقیت افزوده شد", { icon: "success" });
      queryClient.invalidateQueries(["users"]);
    },
    onError: () => swal("افزودن کاربر با خطا مواجه شد", { icon: "error" }),
  });

  const registerNewUser = (event) => {
    event.preventDefault();
    const newUserInfo = {
      name: formState.inputs.name.value,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      phone: formState.inputs.phone.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value,
    };
    registerNewUserMutation.mutate(newUserInfo);
  };

  if (isLoading) return <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />;
  if (isError) return <StatusMessage status="error" message="در حال حاضر کاربری وجود ندارد" />;

  return (
    <>
      <div className="bg-white w-[95%] h-96 mx-auto mt-5 ">
        <form onSubmit={registerNewUser}>
          <div className="grid grid-cols-2 p-3 relative">
            {/* نام */}
            <div className="flex flex-col">
              <label className="font-DanaDemiBold mt-4">نام و نام خانوادگی</label>
              <Input
                type="text"
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                id="name"
                element="input"
                validations={[{ value: requiredValue }, { value: minValue, min: 8 }, { value: maxValue, max: 20 }]}
                onInputHandler={onInputHandler}
                placeholder="لطفا  نام و نام خانوادگی را وارد کنید..."
              />
            </div>
            {/* نام کاربری */}
            <div className="flex flex-col">
              <label className="font-DanaDemiBold mt-4">نام کاربری</label>
              <Input
                type="text"
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                id="username"
                element="input"
                validations={[{ value: requiredValue }, { value: minValue, min: 8 }, { value: maxValue, max: 20 }]}
                onInputHandler={onInputHandler}
                placeholder="لطفا نام کاربری را وارد کنید..."
              />
            </div>
            {/* ایمیل */}
            <div className="flex flex-col">
              <label className="font-DanaDemiBold mt-4">ایمیل</label>
              <Input
                type="text"
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                id="email"
                element="input"
                placeholder="لطفا ایمیل کاربر را وارد کنید..."
                validations={[{ value: requiredValue }, { value: minValue, min: 8 }, { value: maxValue, max: 20 }]}
                onInputHandler={onInputHandler}
              />
            </div>
            {/* رمز عبور */}
            <div className="flex flex-col">
              <label className="font-DanaDemiBold mt-4">رمز عبور</label>
              <Input
                type="text"
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                id="password"
                element="input"
                placeholder="لطفا رمز عبور کاربر را وارد کنید..."
                validations={[{ value: requiredValue }, { value: minValue, min: 8 }, { value: maxValue, max: 20 }]}
                onInputHandler={onInputHandler}
              />
            </div>
            {/* شماره تلفن */}
            <div className="flex flex-col">
              <label className="font-DanaDemiBold mt-4">شماره تلفن</label>
              <Input
                type="text"
                className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
                id="phone"
                element="input"
                placeholder="لطفا شماره تلفن کاربر را وارد کنید..."
                validations={[{ value: requiredValue }, { value: minValue, min: 8 }, { value: maxValue, max: 20 }]}
                onInputHandler={onInputHandler}
              />
            </div>
          </div>
          <div className="absolute left-32 font-DanaDemiBold">
            <input
              type="submit"
              value={registerNewUserMutation.isLoading ? "در حال افزودن..." : "افزودن"}
              disabled={registerNewUserMutation.isLoading}
              className="btn btn-primary font-DanaDemiBold"
            />
          </div>
        </form>
      </div>

      {/* جدول کاربران */}
      <DataTable title={"لیست کاربران"}>
        <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <Table>
            <thead>
              <tr className="font-DanaDemiBold">
                <th>شناسه</th>
                <th>نام و نام خانوادگی</th>
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
    </>
  );
}



// import React from "react";
// import DataTable from "../../Components/adminPanel/DataTable";
// import Table from "react-bootstrap/Table";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import StatusMessage from "../../Components/StatusMessage/StatusMessage";
// import swal from "sweetalert";
// import Input from "../../Components/Form/Input";
// import { useForm } from "../../Hooks/UseForm";
// import {
//   maxValue,
//   minValue,
//   requiredValue,
// } from "./../../validators/Rules.jsx";
// export default function AdminUser() {
//   const [formState, onInputHandler] = useForm(
//     {
//       name: {
//         value: "",
//         isValid: false,
//       },
//       username: {
//         value: "",
//         isValid: false,
//       },
//       email: {
//         value: "",
//         isValid: false,
//       },
//       password: {
//         value: "",
//         isValid: false,
//       },
//       phone: {
//         value: "",
//         isValid: false,
//       },
//     },
//     false
//   );

//   const queryClient = useQueryClient();

//   const fetchUsers = async () => {
//     const localStorageData = JSON.parse(localStorage.getItem("user"));
//     const response = await fetch("http://localhost:5000/v1/users", {
//       headers: {
//         Authorization: `Bearer ${localStorageData.token}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error("خطا در دریافت اطلاعات کاربران");
//     }
//     return response.json();
//   };

//   const {
//     data: users = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchUsers,
//     staleTime: 5 * 60 * 1000,
//     retry: 2,
//   });

//   const deleteUserMutation = useMutation({
//     mutationFn: async (userID) => {
//       const localStorageData = JSON.parse(localStorage.getItem("user"));
//       const response = await fetch(`http://localhost:5000/v1/users/${userID}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${localStorageData.token}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error("خطا در حذف کاربر");
//       }
//       return response.json();
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["users"]); // دوباره لیست رو بگیر
//       swal("کاربر با موفقیت حذف شد", { icon: "success" });
//     },
//     onError: () => {
//       swal("خطا در حذف کاربر", { icon: "error" });
//     },
//   });

//   const removeUser = (userID) => {
//     swal({
//       title: "آیا از حذف اطمینان داری؟",
//       icon: "warning",
//       buttons: ["نه", "آره"],
//     }).then((result) => {
//       if (result) {
//         deleteUserMutation.mutate(userID);
//       }
//     });
//   };

//   if (isLoading)
//     return (
//       <StatusMessage status="loading" message="در حال بارگذاری اطلاعات..." />
//     );

//   if (isError)
//     return (
//       <StatusMessage status="error" message="در حال حاضر کاربری وجود ندارد " />
//     );

//   const registerNewUser = (event) => {
//     event.preventDefault();
//     const newUserInfo = {
//       name: formState.inputs.name.value,
//       username: formState.inputs.username.value,
//       email: formState.inputs.email.value,
//       phone: formState.inputs.phone.value,
//       password: formState.inputs.password.value,
//       confirmPassword: formState.inputs.password.value,
//     };

//     fetch("http://localhost:5000/v1/auth/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body : JSON.stringify(newUserInfo)
//     }).then(res => res.json())
//     .then(result => {
//       if(result) {
//           swal({
//             title: "کاربر با موفقیت افزوده شد",
//             icon: "success",
//           });
//       }
//     })
//   };

 

//   return (
//     <>
//       <div className="bg-white w-[95%] h-96 mx-auto mt-5 ">
//         <form>
//           <div className="grid grid-cols-2 p-3 relative">
//             <div className="flex flex-col">
//               <label className="font-DanaDemiBold mt-4">
//                 {" "}
//                 نام و نام خانوادگی{" "}
//               </label>
//               <Input
//                 type="text"
//                 className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
//                 id="name"
//                 element="input"
//                 validations={[
//                   { value: requiredValue },
//                   { value: minValue, min: 8 },
//                   { value: maxValue, max: 20 },
//                 ]}
//                 onInputHandler={onInputHandler}
//                 placeholder="لطفا  نام و نام خانوادگی را وارد کنید..."
//               />
//               <span className="error-message text-danger"></span>
//             </div>

//             <div className="flex flex-col">
//               <label className="font-DanaDemiBold mt-4">نام کاربری</label>
//               <Input
//                 type="text"
//                 className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
//                 id="username"
//                 element="input"
//                 validations={[
//                   { value: requiredValue },
//                   { value: minValue, min: 8 },
//                   { value: maxValue, max: 20 },
//                 ]}
//                 onInputHandler={onInputHandler}
//                 placeholder="لطفا نام کاربری را وارد کنید..."
//               />
//               <span className="error-message text-danger"></span>
//             </div>

//             <div className="flex flex-col">
//               <label className="font-DanaDemiBold mt-4"> ایمیل </label>
//               <Input
//                 type="text"
//                 className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
//                 id="email"
//                 element="input"
//                 placeholder="لطفا ایمیل کاربر را وارد کنید..."
//                 validations={[
//                   { value: requiredValue },
//                   { value: minValue, min: 8 },
//                   { value: maxValue, max: 20 },
//                 ]}
//                 onInputHandler={onInputHandler}
//               />

//               <span className="error-message text-danger"></span>
//             </div>

//             <div className="flex flex-col">
//               <label className="font-DanaDemiBold mt-4"> رمز عبور </label>
//               <Input
//                 type="text"
//                 className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
//                 id="password"
//                 element="input"
//                 placeholder="لطفا رمز عبور کاربر را وارد کنید..."
//                 validations={[
//                   { value: requiredValue },
//                   { value: minValue, min: 8 },
//                   { value: maxValue, max: 20 },
//                 ]}
//                 onInputHandler={onInputHandler}
//               />
//               <span className="error-message text-danger"></span>
//             </div>

//             <div className="flex flex-col">
//               <label className="font-DanaDemiBold mt-4"> شماره تلفن </label>
//               <Input
//                 type="text"
//                 className="font-Dana rounded-md p-2 mt-2 border border-gray-500 w-[80%]"
//                 id="phone"
//                 element="input"
//                 placeholder="لطفا شماره تلفن کاربر را وارد کنید..."
//                 validations={[
//                   { value: requiredValue },
//                   { value: minValue, min: 8 },
//                   { value: maxValue, max: 20 },
//                 ]}
//                 onInputHandler={onInputHandler}
//               />
//               <span className="error-message text-danger"></span>
//             </div>
//           </div>

//           <div className="absolute left-32 font-DanaDemiBold">
//             <input
//               type="submit"
//               value="افزودن"
//               className="btn btn-primary font-DanaDemiBold"
//               onClick={registerNewUser}
//             />
//           </div>
//         </form>
//       </div>
//       <DataTable title={"لیست کاربران"}>
//         <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
//           <Table>
//             <thead>
//               <tr className="font-DanaDemiBold">
//                 <th>شناسه</th>
//                 <th> نام و نام خانوادگی </th>
//                 <th>ایمیل</th>
//                 <th>رمز عبور</th>
//                 <th>حذف</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={user._id} className="font-Dana">
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.password.slice(0, 10)}</td>
//                   <td>
//                     <button
//                       onClick={() => removeUser(user._id)}
//                       disabled={deleteUserMutation.isLoading}
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs md:text-sm"
//                     >
//                       {deleteUserMutation.isLoading ? "در حال حذف..." : "حذف"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </DataTable>
//     </>
//   );
// }
