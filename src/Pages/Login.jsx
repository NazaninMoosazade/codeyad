import React from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import Input from "../Components/Form/Input";
import { Link } from "react-router-dom";
import { useForm } from "../Hooks/UseForm";
import Rules from "../validators/Rules";
import Button from "../Components/Form/Button.jsx";

export default function Login() {
  // مقدار اولیه فرم: هر فیلد مقدار و اعتبار اولیه دارد
  const [formState, onInputHandler] = useForm(
    {
      username: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false // کل فرم اول اعتبار ندارد
  );

  // وقتی دکمه ارسال زده می‌شود
  const loginUser = (event) => {
    event.preventDefault();
    // اگر فرم معتبر نبود، هشدار می‌دهد و ارسال نمی‌کند
    if (!formState.isFormValid) {
      alert("فرم معتبر نیست! لطفا ورودی‌ها را بررسی کنید.");
      return;
    }
    // ارسال داده‌ها به سرور یا پردازش فرم
    console.log("فرم ارسال شد:", formState.inputs);
    // اینجا می‌توان درخواست API یا هر پردازش دیگری انجام داد
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
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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

// import React from "react";
// import Header from "../Components/Headers/Header";
// import Footer from "../Components/Footer/Footer";
// import { Link } from "react-router-dom";
// import Input from "../Components/Form/Input.jsx";
// import Button from "../Components/Form/Button.jsx";
// import {
//   requiredValidator,
//   minValidator,
//   maxValidator,
//   emailValidator,
// } from "../validators/Rules.jsx";
// import { useForm } from "../Hooks/UseForm.jsx";

// export default function Login() {
// const [formState, onInputHandler] = useForm(
//     {
//       username: {
//         value: "",
//         isValid: false,
//       },
//       password: {
//         value: "",
//         isValid: false,
//       },
//     },
//     false
//   );

//   const loginUser = (event) => {
//     console.log("login");
//     event.preventDefault();
//   };

//   return (
//     <>
//       <Header />
//       <section className="flex justify-center items-center mt-24">
//         <div className="bg-white dark:!bg-darker border border-green-600 rounded-md w-[500px] h-auto">
//           {/* Header Section */}
//           <div className="mt-6 text-center flex flex-col">
//             <span className="font-DanaDemiBold text-xl text-gray-600 dark:!text-gray-300">
//               ورود به حساب کاربری
//             </span>
//             <span className="font-DanaMeduim text-gray-500 pt-2">
//               خوشحالیم دوباره میبینیمت دوست عزیز :)
//             </span>
//           </div>

//           <div className="flex items-center justify-center bg-sky-50 p-2 m-4">
//             <span className="font-Dana text-gray-700">کاربر جدید هستید؟</span>
//             <span className="font-Dana text-sm p-2 bg-sky-100 shadow-sm text-white rounded-md mr-2">
//               <Link
//                 to="/register"
//                 className="text-black font-Dana no-underline cursor-pointer"
//               >
//                 {" "}
//                 ثبت نام
//               </Link>
//             </span>
//           </div>

//           {/* Form */}
//           <form action="#">
//             <div className="m-4">
//               <div className="relative">
//                 <Input
//                   className="dark:placeholder-white w-full font-Dana  p-2 rounded-md "
//                   placeholder="نام کاربری یا آدرس ایمیل"
//                   id="username"
//                   type="text"
//                   element="input"
//                   validations={[
//                     requiredValidator(),
//                     minValidator(8),
//                     maxValidator(20),
//                   ]}
//                   onInputHandler={onInputHandler}
//                 />
//                 <svg
//                   className="w-7 h-7 absolute top-2 left-2 text-gray-600"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <div className="m-4">
//               <div className="relative">
//                 <Input
//                   className="dark:placeholder-white w-full font-Dana p-2 rounded-md dark:!border "
//                   placeholder="رمز عبور"
//                   id="password"
//                   type="text"
//                   element="input"
//                   validations={[
//                     requiredValidator(),
//                     minValidator(8),
//                     maxValidator(18),
//                   ]}
//                   onInputHandler={onInputHandler}
//                 />
//                 <svg
//                   className="w-7 h-7 absolute top-2 left-2 text-gray-600"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <div className="relative flex items-center justify-center m-4">
//               <span className="absolute font-DanaDemiBold text-white">
//                 ورود
//               </span>
//               <Button
//                  className={`w-full bg-green-500 p-4 text-center text-white font-DanaDemiBold ${
//                   formState.isFormValid ? "bg-green-500" : "bg-red-600"
//                 }`}
//                 type="submit"
//                 onClick={loginUser}
//                 disabled={!formState.isFormValid}
//               ></Button>
//               <svg
//                 className="w-7 h-7 text-white absolute right-2"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
//                 />
//               </svg>
//             </div>

//             <div className="flex items-center justify-between m-4">
//               <label className="flex items-center">
//                 <input type="checkbox" />
//                 <span className="font-DanaMeduim text-sm pr-2 text-gray-500">
//                   مرا به خاطر داشته باش
//                 </span>
//               </label>

//               <label>
//                 <a href="#" className="font-DanaMeduim text-sm text-gray-500">
//                   رمز عبور را فراموش کرده اید؟
//                 </a>
//               </label>
//             </div>
//           </form>

//           {/* Footer Section */}
//           <div className="m-5">
//             <span className="font-DanaDemiBold text-xl text-gray-600 dark:!text-gray-300">
//               سلام کاربر محترم:
//             </span>
//             <ul className="py-3 list-disc">
//               <li className="font-Dana text-sm text-gray-500 mr-5">
//                 لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
//                 استفاده کنید.
//               </li>
//               <li className="font-Dana text-sm text-gray-500 mr-5">
//                 ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
//               </li>
//               <li className="font-Dana text-sm text-gray-500 mr-5">
//                 لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }
