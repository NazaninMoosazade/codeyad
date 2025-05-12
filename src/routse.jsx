import Index from "./Pages"
import Course from "./Pages/Course"
import CourseCat from "./Pages/CourseCat"


const routes = [
{path: '/' , elements: <Index/>},
{path: '/course/:courseName' , elements: <Course/>},
{path: '/course-cat/:categoryName' , elements: <CourseCat/>},

]

export default routes