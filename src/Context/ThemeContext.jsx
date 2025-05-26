import { createContext, useState, useEffect } from "react";
import { getFromLocal, setToLocal } from "../Utils/BrowserMemo";

const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Safe default: use localStorage if exists, otherwise match system preference
    const savedTheme = getFromLocal("theme");
    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Sync Tailwind class with isDark state
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    setToLocal("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const changToDark = () => setIsDark(true);
  const changToLight = () => setIsDark(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  const ThemeContextValue = {
    isDark,
    changToDark,
    changToLight,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
