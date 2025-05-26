/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
        bgComments: '#286bb81a',
        border: '#ffffff17',
        bgSecondary: '#e4edf8',
        bgSky: '#075985b3',
        textGreen:'rgb(93 202 167/var(--tw-text-opacity,1))',
         darker: "#171717",
         bgDarker: '#212123'
      },
      fontFamily: {
        Dana: "Dana",
        DanaMeduim: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
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
