/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgBanner:
          "linear-gradient(270deg, #286bb8, #5fa4f0 23.78%, #286bb6 49.83%, #62a6f3 72.74%, #286bb8)",
      },
    },
  },
  plugins: [],
};
