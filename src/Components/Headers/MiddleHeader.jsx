import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import AuthContext from "../../Context/AuthContext";
import MobileHeader from "./MobileHeader";
import SearchBox from "../SearchBox/SearchBox";

export default function MiddleHeader() {
  const authContext = useContext(AuthContext);
  const { userInfos, isLoggedIn } = useContext(AuthContext);
  // console.log("Header userInfos:", userInfos, "isLoggIn:", isLoggedIn);

  return (
    <>
      <header>
        {/* Desktop Header */}
        <div className="hidden lg:block w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Right Header */}
            <div className="flex items-center mt-4">
              {/* Logo */}
              <a href="">
                <img src="/img/logo.png" alt="logo" className="h-[40px] pl-8" />
              </a>
              {/* Links */}
              <ul className="pt-4 flex items-center md:gap-x-5 lg:gap-x-8 ">

                <li>
                  <Link
                    to="/mag"
                    className="no-underline font-Dana dark:!text-white text-black lg:text-lg"
                  >
                    مقالات
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="no-underline font-Dana dark:!text-white text-black lg:text-lg"
                  >
                    درباره ما
                  </Link>
                </li>
              </ul>
            </div>

            {/* Left Header */}
            <div className="flex items-center gap-x-8 pt-4">
              {/* Search Box */}
              <SearchBox />

              {/* Dark & Light Mode */}
              <ThemeToggleButton />

              {/* Login & Register */}
              {/* {isLoggedIn && userInfos.name && <span>سلام، {userInfos.name}!</span>} */}

              {isLoggedIn && userInfos.name ? (
                <Link
                  to="/register"
                  className="no-underline text-white bg-blue rounded-lg text-sm p-1.5 font-Dana"
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
        </div>
        {/* Mobile Header */}
        <MobileHeader />
      </header>
    </>
  );
}
