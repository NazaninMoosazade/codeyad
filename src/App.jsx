import React, { useState, useCallback, useEffect } from "react";
import routes from "./routse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthContext from "./Context/AuthContext";
import { ThemeContextProvider } from "./Context/ThemeContext";

export default function App() {
  const router = createBrowserRouter(routes);

  const [isLoggIn, setIsLoggedIng] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});

  const login = useCallback((userInfos, token) => {
    setToken(token);
    setIsLoggedIng(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIng(true);
          setUserInfos(userData);
          console.log("userInfos in App.jsx", userInfos);
        });
    }
  }, [login]);

  return (
    <>
      <ThemeContextProvider>
        <AuthContext.Provider
          value={{
            isLoggIn,
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
    </>
  );
}
