
import React, { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import Input from "../Components/Form/Input";
import Button from "../Components/Form/Button";
import { Link } from "react-router-dom";
import { useForm } from "../Hooks/UseForm";
import Rules from "../validators/Rules";
import AuthContext from "../Context/AuthContext";
import swal from "sweetalert";

export default function Login() {
  const authContext = useContext(AuthContext);

  const [formState, onInputHandler] = useForm(
    {
      username: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );

  const loginMutation = useMutation({
    mutationFn: async (userData) => {
      const res = await fetch(`http://localhost:4000/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "خطا در ورود به حساب کاربری");
      }

      return res.json();
    },
    onSuccess: (data) => {
      authContext.login(data.user, data.accessToken);
      Swal.fire({
        icon: "success",
        title: "ورود موفق!",
        text: `خوش آمدی ${data.user.name || data.user.username} 😊`,
        confirmButtonText: "برو داخل",
      });
    },
    onError: (err) => {
      Swal.fire({
        icon: "error",
        title: "ورود ناموفق!",
        text: err.message || "نام کاربری یا رمز عبور اشتباه است",
        confirmButtonText: "دوباره تلاش کنید",
      });
    },
  });

  const loginUser = (event) => {
    event.preventDefault();

    if (!formState.isFormValid) {
      Swal.fire({
        icon: "warning",
        title: "ورودی نامعتبر",
        text: "لطفاً فیلدهای فرم را به درستی پر کنید.",
      });
      return;
    }

    const userData = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value,
    };

    loginMutation.mutate(userData);
  };

  return (
    <>
      <Header />
           <section className="flex justify-center items-center mt-24">
        <div className="bg-white dark:!bg-darker border border-green-600 rounded-md w-[500px] h-auto">
          {/* Header Section */}
          <div className="mt-6 text-center flex flex-col">
            <span className="font-DanaDemiBold text-xl text-gray-600 dark:!text-gray-300">
              ورود به حساب کاربری
            </span>
            <span className="font-DanaMeduim text-gray-500 pt-2">
              خوشحالیم دوباره میبینیمت دوست عزیز :)
            </span>
          </div>

          <div className="flex items-center justify-center bg-sky-50 p-2 m-4">
            <span className="font-Dana text-gray-700">کاربر جدید هستید؟</span>
            <span className="font-Dana text-sm p-2 bg-sky-100 shadow-sm text-white rounded-md mr-2">
              <Link
                to="/register"
                className="text-black font-Dana no-underline cursor-pointer"
              >
                {" "}
                ثبت نام
              </Link>
            </span>
          </div>

          {/* Form */}

          <form onSubmit={loginUser}>
            <div className="m-4">
              <div className="relative">
                <Input
                  className="dark:placeholder-white w-full font-Dana  p-2 rounded-md "
                  id="username"
                  type="text"
                  placeholder="نام کاربری یا ایمیل"
                  validations={[
                    { value: Rules.requiredValue },
                    { value: Rules.minValue, min: 5 },
                    { value: Rules.maxValue, max: 20 },
                  ]}
                  onInputHandler={onInputHandler}
                />
                <svg
                  className="w-7 h-7 absolute top-2 left-2 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
            </div>

            <div className="m-4">
              <div className="relative">
                <Input
                  className="dark:placeholder-white w-full font-Dana p-2 rounded-md dark:!border "
                  id="password"
                  type="password"
                  placeholder="رمز عبور"
                  validations={[
                    { value: Rules.requiredValue },
                    { value: Rules.minValue, min: 8 },
                    { value: Rules.maxValue, max: 20 },
                  ]}
                  onInputHandler={onInputHandler}
                />
                <svg
                  className="w-7 h-7 absolute top-2 left-2 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
            </div>

            <div className="relative flex items-center justify-center m-4">
              <span className="absolute font-DanaDemiBold text-white">
                ورود
              </span>
              <Button
                type="submit"
                disabled={!formState.isFormValid}
                className={`w-full p-3 text-white rounded transition-colors duration-300 ${
                  formState.isFormValid
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              ></Button>

              <svg
                className="w-7 h-7 text-white absolute right-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between m-4">
              <label className="flex items-center">
                <input type="checkbox" />
                <span className="font-DanaMeduim text-sm pr-2 text-gray-500">
                  مرا به خاطر داشته باش
                </span>
              </label>

              <label>
                <a href="#" className="font-DanaMeduim text-sm text-gray-500">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>

          {/* Footer Section */}
          <div className="m-5">
            <span className="font-DanaDemiBold text-xl text-gray-600 dark:!text-gray-300">
              سلام کاربر محترم:
            </span>
            <ul className="py-3 list-disc">
              <li className="font-Dana text-sm text-gray-500 mr-5">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="font-Dana text-sm text-gray-500 mr-5">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="font-Dana text-sm text-gray-500 mr-5">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
