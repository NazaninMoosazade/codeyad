/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgBanner:
          "linear-gradient(270deg, #286bb8, #5fa4f0 23.78%, #286bb6 49.83%, #62a6f3 72.74%, #286bb8)",
      },
      backgroundColor: {
        bgWhite: "#f1f5f9",
      },
      colors : {
        blue : '#286bb8'
      },
      fontFamily: {
        Dana: "Dana",
        DanaMeduim: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "3rem", // افزایش padding به 3rem
          lg: "2rem", // تغییر padding در اندازه‌های بزرگتر
        },
        width: "100%", // عرض 100 درصد صفحه
        maxWidth: "1600px", // تعیین حداکثر عرض کانتینر به 1600px
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
