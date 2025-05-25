import React, { useState, useCallback, useEffect } from "react";
import routes from "./routse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthContext from "./Context/AuthContext";

export default function App() {
  const router = createBrowserRouter(routes);

  const [isLoggedIn, setIsLoggedIng] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState(false);

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
      fetch(`http://localhost:8000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIng(true);
          setUserInfos(userData);
          // console.log(userData);
        });
    }
  }, [login]);

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          token,
          userInfos,
          login,
          logout,
        }}
      >
        <div className="min-h-screen bg-bgWhite">
          <RouterProvider router={router} />
        </div>
      </AuthContext.Provider>
    </>
  );
}
