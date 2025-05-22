import Index from "./Pages";
import Course from "./Pages/Course";
import CourseCat from "./Pages/CourseCat";
import Blug from "./Pages/Blug";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AllCourse from "./Pages/AllCourse";

const routes = [
  { path: '/', element: <Index /> },
  { path: '/course/:courseName', element: <Course /> },
  { path: '/course-cat/:categoryName', element: <CourseCat /> },
  { path: '/blug/:blugName', element: <Blug /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/allCourse', element: <AllCourse /> },

  

];

export default routes;
