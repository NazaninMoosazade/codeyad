import { createContext, memo, useState, useEffect } from "react";
import { getFromLocal, setToLocal } from "../Js/utils/BrowserMemo";

const ThemeContext = createContext(null);

const ThemeContextProvider = memo(({ children }) => {
  const initTheme = getFromLocal("theme") === "dark";

  const [isDark, setIsDark] = useState(initTheme);

  // Sync tailwind class on <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // First load: Apply theme from localStorage
  useEffect(() => {
    const savedTheme = getFromLocal("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changToDark = () => {
    setIsDark(true);
    setToLocal("theme", "dark");
  };

  const changToLight = () => {
    setIsDark(false);
    setToLocal("theme", "light");
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    setToLocal("theme", newTheme ? "dark" : "light");
  };

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
});

export { ThemeContext, ThemeContextProvider };


