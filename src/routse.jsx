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

// Admin Page
import Panel from "./Pages/adminPanle/Panel";
import AdminUser from "./Pages/adminPanle/adminUser";
import AdminCourses from "./Pages/adminPanle/AdminCourses";
import AdminMenus from "./Pages/adminPanle/AdminMenus";
import AdmiArticles from "./Pages/adminPanle/AdmiArticles";

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

  {
    path: "/adminPanel/*",
    element: <Panel />,
    children: [
      { path: "users", element: <AdminUser /> },
      { path: "courses", element: <AdminCourses /> },
      { path: "menus", element: <AdminMenus /> },
      { path: "articles", element: <AdmiArticles/> },
      

    ],
  },
];


export default routes;
