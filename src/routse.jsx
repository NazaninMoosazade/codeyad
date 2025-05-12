import Index from "./Pages";
import Course from "./Pages/Course";
import CourseCat from "./Pages/CourseCat";
import Blug from "./Pages/Blug";

const routes = [
  { path: '/', element: <Index /> },
  { path: '/course/:courseName', element: <Course /> },
  { path: '/course-cat/:categoryName', element: <CourseCat /> },
  { path: '/blug/:blugName', element: <Blug /> },
];

export default routes;
