import Index from "./Pages";
import Course from "./Pages/Course";
import MagInfo from "./Pages/MagInfo";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AllCourse from "./Pages/AllCourse";
import AboutUs from "./Pages/AboutUs";
import Mag from "./Pages/Mag";
import Courses from "./Pages/Courses";
import SearchPage from "./Pages/SearchPage";
import Session from "./Pages/Session";

// Admin Page
import Panel from "./Pages/adminPanle/Panel";
import AdminUser from "./Pages/adminPanle/adminUser";
import AdminCourses from "./Pages/adminPanle/AdminCourses";
import AdminMenus from "./Pages/adminPanle/AdminMenus";
import AdminArticles from "./Pages/adminPanle/AdminArticles";
import AdminIndex from "./Pages/adminPanle/AdminIndex";
import AdminSession from "./Pages/adminPanle/AdminSession";
import AdminComments from "./Pages/adminPanle/AdminComments";
import AdminCategory from "./Pages/adminPanle/AdminCategory";

const routes = [
  { path: "/", element: <Index /> },
  { path: "course/:courseName", element: <Course /> },
  { path: "/mag/:articleName", element: <MagInfo /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/allCourse", element: <AllCourse /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/mag", element: <Mag /> },
  { path: "/courses", element: <Courses /> },
  { path: "/search/:name", element: <SearchPage /> },
  { path: "course/:sessionID", element: <Session /> },

  {
    path: "/adminPanel",
    element: <Panel />,
    children: [
      { path: "/adminPanel", element: <AdminIndex /> },
      { path: "users", element: <AdminUser /> },
      { path: "courses", element: <AdminCourses /> },
      { path: "menus", element: <AdminMenus /> },
      { path: "articles", element: <AdminArticles /> },
      { path: "sessions", element: <AdminSession /> },
      { path: "comments", element: <AdminComments /> },
      { path: "category", element: <AdminCategory /> },

    ],
  },
];

export default routes;
