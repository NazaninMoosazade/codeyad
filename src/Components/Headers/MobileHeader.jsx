import React , { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import MobileMenuWrapper from "./MobileMenuWrapper";
import { MobileMenuContext } from "../../Context/MobileContextMenu";


export default function MobileHeader() {
  const authContext = useContext(AuthContext);
  const { userInfos, isLoggedIn } = useContext(AuthContext);
 const mobileMenuSetting = useContext(MobileMenuContext);
 

  return (
    <div className="block lg:hidden w-full h-20 dark:!bg-bgDarker bg-white p-3.5">
      <div className="flex items-center justify-between">
        {/* Menu */}
            <button
              onClick={() => {
                mobileMenuSetting.openMenu();
              }}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
       
        {/* Logo */}
        <img src="/img/logo.png" alt="logo" className="h-[30px]" />
        {/* Login & Register */}
        {isLoggedIn && userInfos.name ? (
          <Link
            to="/register"
            className="no-underline text-white text-sm bg-blue rounded-lg p-1 w-28 font-Dana"
          >
            {" "}
            سلام، {userInfos.name} !
          </Link>
        ) : (
          <Link
            to="/login"
            className="no-underline text-white bg-blue rounded-lg p-2.5 font-Dana"
          >
            ورود یا ثبت نام
          </Link>
        )}
      </div>
    </div>
  );
}
