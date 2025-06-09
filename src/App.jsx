import React, { useState, useCallback, useEffect } from "react";
import routes from "./routse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthContext from "./Context/AuthContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { MobileMenuContextProvider } from "./Context/MobileContextMenu";

export default function App() {
  const router = createBrowserRouter(routes);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState({});

  const login = useCallback((userInfos, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setIsLoggedIn(false);
    setUserInfos({});
    localStorage.removeItem("user");
  }, []);

  // وقتی اپ اجرا میشه، اگر توکن داشتیم اطلاعات کاربر رو می‌گیریم
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    if (localStorageData?.token) {
      fetch(`http://localhost:5000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then(async (res) => {
          if (!res.ok) {
            throw new Error("توکن نامعتبر است یا منقضی شده");
          }
          return res.json();
        })
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfos(userData);
          setToken(localStorageData.token);
        })
        .catch(() => {
          logout();
        });
    }
  }, [logout]);

  return (
    <MobileMenuContextProvider>
      <ThemeContextProvider>
        <AuthContext.Provider
          value={{
            isLoggedIn,
            token,
            userInfos,
            login,
            logout,
          }}
        >
          <div className="min-h-screen dark:bg-darker bg-bgWhite">
            <RouterProvider router={router} />
          </div>
        </AuthContext.Provider>
      </ThemeContextProvider>
    </MobileMenuContextProvider>
  );
}
