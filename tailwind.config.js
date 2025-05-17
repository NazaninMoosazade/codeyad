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
      colors: {
        blue: "#286bb8",
        bgComments : '#286bb81a',
        border: '#ffffff17'
      },
      fontFamily: {
        Dana: "Dana",
        DanaMeduim: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      // container: {
      //   center: true,
      //   padding: {
      //     DEFAULT: "1rem", // فاصله داخلی پیش‌فرض
      //     lg: "2rem", // فاصله در نمایشگرهای بزرگ‌تر
      //   },
      //   screens: {
      //     sm: "100%",
      //     md: "768px",
      //     lg: "1140px",
      //     xl: "1600px", // تغییر اندازه به 1600px
      //     "2xl": "1800px", // اندازه خیلی بزرگ‌تر
      //   },
      // },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
