import Index from "./Pages";
import Course from "./Pages/Course";
import CourseCat from "./Pages/CourseCat";
// import Blug from "./Pages/Blug";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AllCourse from "./Pages/AllCourse";
import AboutUs from "./Pages/AboutUs";
import Mag from "./Pages/Mag";
import Courses from "./Pages/Courses";

const routes = [
  { path: "/", element: <Index /> },
  { path: "course/:courseName", element: <Course /> },
  { path: "/course-cat/:categoryName", element: <CourseCat /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/allCourse", element: <AllCourse /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/mag", element: <Mag /> },
  { path: "/courses", element: <Courses /> },



];

export default routes;
