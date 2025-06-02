import React, { useEffect } from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { useParams } from "react-router-dom";

export default function MagInfo() {
  const { magName } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:4000/v1/articles/${magName}`).then((res) =>
  //     res.json()
  //   .then(artcileInfo => {
  //       console.log(a);
        
  //   })
  //   );
  // }, []);

  return (
    <>
      <Header />
      <section className="mt-7 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="w-full lg:w-[90%] mx-auto text-center h-auto bg-white dark:!bg-bgDarker p-4 rounded-md">
          <img
            src="/img/courseBanner.webp"
            alt=""
            className="h-auto lg:h-96 mx-auto text-center rounded-md"
          />
          <h1 className="font-DanaDemiBold text-lg lg:text-4xl mt-14 dark:text-white">
            سرفصل بلاگ
          </h1>
          <p className="font-Dana lg:text-lg dark:text-gray-300">
            زمانی که ما به دنبال اطلاعاتی در مورد یک موضوع خاص هستیم، خب اولین
            قدمی که به ذهن ما خواهد رسید، جستجو در گوگل است تا بتوانیم با مراجعه
            به سایت های مختلف به اطلاعاتی که نیازمند آن هستیم برسیم. تمام این
            اطلاعات در وبلاگ وب سایت ها برای مخاطبان به اشتراک گذاشته می شود تا
            بتوانند با خواندن مقاله ها به اطلاعات مورد نظر دسترسی پیدا کنند. ما
            به عنوان یک مدیر وب سایت اطلاعات بسیار زیادی را در بستر وبلاگ ها
            برای دیده شدن توسط مخاطبان منتشر می کنیم. هدف این اشتراک گذاری، اول
            از همه به دلیل ایجاد محتوای با کیفیت برای جامعه ی تخصصی خود و در
            نهایت آگاه سازی دیگران از وجودمان می باشد تا بتوانیم محصول خودمان را
            به افراد حاضر در اینترنت نمایش دهیم و همچنین بتوانیم مخاطبین را به
            افرادی تبدیل کنیم که متقاضی محتوا های دیگر ما شوند. این رویه شگفت
            انگیز همان بازاریابی محتوا است. زمانی که محتوایی را به رایگان برای
            دیده شدن عموم به اشتراک می گذارید به کسب کار خود اجازه می دهید تا در
            ذهن مخاطبان اعتماد سازی شکل بگیرد و آن ها تبدیل به مشتری دائمی کسب و
            کار ما شوند. در این مقاله از آکادمی برنامه نویسی کدیاد، قصد داریم تا
            به صورت تخصصی و جامع در مورد بازاریابی محتوا یا همان (Content
            Marketing) همراه با مزایا و ویژگی ها و چرخه فعالیتی و … آن صحبت
            کنیم.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
