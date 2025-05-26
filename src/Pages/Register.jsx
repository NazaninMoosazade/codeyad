import React, { useContext } from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Input from "../Components/Form/Input";
import Button from "../Components/Form/Button";
import { useForm } from "../Hooks/UseForm";
import Rules from "../validators/Rules";
import { useMutation } from "@tanstack/react-query";
import AuthContext from "../Context/AuthContext";

export default function Register() {

  const authContext = useContext(AuthContext)

  

  const [formState, onInputHandler] = useForm(
    {
      username: { value: "", isValid: false },
      password: { value: "", isValid: false },
      name: { value: "", isValid: false },
      email: { value: "", isValid: false },
    },
    false
  );

  // const registerUser = async (newUserInfos) => {
  //   const response = await fetch("http://localhost:4000/v1/auth/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newUserInfos),
  //   });

  //   if (!response.ok) {
  //     authContext.login(result.user , result.accessToken)
  //     const errorData = await response.json();
  //     throw new Error(errorData.message || "خطایی در ثبت‌نام رخ داده است.");
  //   }

  //   return response.json();
  // };


const registerUser = async (newUserInfos) => {
  const response = await fetch("http://localhost:4000/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserInfos),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "خطایی در ثبت‌نام رخ داده است.");
  }

  // ثبت‌نام موفق: لاگین کن با داده‌ها
  authContext.login(result.user, result.accessToken);

  return result;
};


  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("ثبت‌نام موفق", data);
      alert("ثبت‌نام با موفقیت انجام شد.");
    },
    onError: (error) => {
      console.error("خطا در ثبت‌نام:", error.message);
      alert(error.message);
    },
  });
  

  const registerNewUser = (event) => {
    event.preventDefault();

    if (!formState.isFormValid) {
      alert("فرم معتبر نیست! لطفا ورودی‌ها را بررسی کنید.");
      return;
    }

    const newUserInfos = {
      name: formState.inputs.name.value,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value,
    };

    mutation.mutate(newUserInfos);
  };

  return (
    <>
      <Header />
      <section className="flex justify-center items-center mt-24">
        <div className="bg-white dark:!bg-darker border border-green-600 rounded-md w-[500px] h-auto">
          {/* header */}
          <div className="mt-6 text-center flex flex-col">
            <span className="font-DanaDemiBold text-xl text-gray-600 dark:!text-gray-300">
              ساخت حساب کاربری
            </span>
            <span className="font-DanaMeduim text-gray-500 pt-2">
              خوشحالیم قراره به جمع ما بپیوندی
            </span>
          </div>

          <div className="flex items-center justify-center bg-sky-50 p-2 m-4">
            <span className="font-Dana text-gray-600 dark:!text-gray-300">
              قبلا ثبت نام کرده اید ؟
            </span>
            <span className="font-Dana text-sm p-2 bg-sky-100 shadow-sm  rounded-md mr-2">
              <Link to="/login" className="text-black font-Dana no-underline">
                وارد شوید
              </Link>
            </span>
          </div>

          {/* form */}
          <form onSubmit={registerNewUser}>
            {/* Input: name */}
            <div className="m-4 relative">
              <Input
                id="name"
                type="text"
                placeholder="نام و نام خانوادگی"
                className="dark:placeholder-white w-full font-Dana p-2 rounded-md"
                validations={[
                  { value: Rules.requiredValue },
                  { value: Rules.minValue, min: 5 },
                  { value: Rules.maxValue, max: 20 },
                ]}
                onInputHandler={onInputHandler}
              />
            </div>

            {/* Input: username */}
            <div className="m-4 relative">
              <Input
                id="username"
                placeholder="نام کاربری"
                className="dark:placeholder-white w-full font-Dana p-2 rounded-md"
                validations={[
                  { value: Rules.requiredValue },
                  { value: Rules.minValue, min: 8 },
                  { value: Rules.maxValue, max: 20 },
                ]}
                onInputHandler={onInputHandler}
              />
            </div>

            {/* Input: email */}
            <div className="m-4 relative">
              <Input
                id="email"
                placeholder=" آدرس ایمیل"
                className="dark:placeholder-white w-full font-Dana p-2 rounded-md"
                validations={[
                  { value: Rules.requiredValue },
                  { value: Rules.minValue, min: 8 },
                  { value: Rules.maxValue, max: 20 },
                ]}
                onInputHandler={onInputHandler}
              />
            </div>

            {/* Input: password */}
            <div className="m-4 relative">
              <Input
                id="password"
                placeholder=" رمز عبور "
                className="dark:placeholder-white w-full font-Dana p-2 rounded-md"
                validations={[
                  { value: Rules.requiredValue },
                  { value: Rules.minValue, min: 8 },
                  { value: Rules.maxValue, max: 20 },
                ]}
                onInputHandler={onInputHandler}
              />
            </div>

            {/* Submit Button */}
            <div className="relative flex items-center justify-center m-4">
              <span className="absolute font-DanaDemiBold text-white">
                {mutation.isPending ? "در حال ثبت‌نام..." : "عضویت"}
              </span>
              <Button
                type="submit"
                disabled={!formState.isFormValid || mutation.isPending}
                className={`w-full p-3 text-white rounded transition-colors duration-300 ${
                  formState.isFormValid && !mutation.isPending
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              />
            </div>

            {/* Footer options */}
            <div className="flex items-center justify-between m-4">
              <label className="flex items-center">
                <input type="checkbox" />
                <span className="font-DanaMeduim text-sm pr-2 text-gray-500">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label>
                <a href="#" className="font-DanaMeduim text-sm text-gray-500">
                  رمز عبور را فراموش کرده‌اید؟
                </a>
              </label>
            </div>
          </form>

          {/* Footer reminder */}
          <div className="m-5">
            <span className="font-DanaDemiBold text-xl text-gray-600 dark:!text-gray-300">
              سلام کاربر محترم:
            </span>
            <ul className="py-3 list-disc">
              <li className="font-Dana text-sm text-gray-500 mr-5">
                لطفا از مرورگرهای مطمئن و بروز مانند گوگل کروم و فایرفاکس استفاده کنید.
              </li>
              <li className="font-Dana text-sm text-gray-500 mr-5">
                ما هرگز اطلاعات محرمانه شما را از طریق ایمیل درخواست نمی‌کنیم.
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

