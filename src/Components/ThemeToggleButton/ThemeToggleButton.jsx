import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center">
      <input
        type="checkbox"
        id="themeCheck"
        className="sr-only"
        checked={isDark}
        onChange={toggleTheme}
      />
      <label
        htmlFor="themeCheck"
        className="flex items-center justify-between cursor-pointer w-[60px] h-[30px] bg-gray-300 dark:bg-gray-600 rounded-full p-1 relative transition-colors duration-300"
      >
        {/* Moon icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>

        {/* Sun icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>

        {/* ball */}
        <span
          className={`absolute top-[3px] left-[4px] w-[24px] h-[24px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDark ? "translate-x-[30px]" : ""
          }`}
        ></span>
      </label>
    </div>
  );
}
