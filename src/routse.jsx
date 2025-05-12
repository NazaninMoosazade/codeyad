import Index from "./Pages"
import Course from "./Pages/Course"
import CourseCat from "./Pages/CourseCat"
import Blug from "./Pages/Blug"


const routes = [
{path: '/' , elements: <Index/>},
{path: '/course/:courseName' , elements: <Course/>},
{path: '/course-cat/:categoryName' , elements: <CourseCat/>},
{path: '/blug/:blugName' , elements: <Blug/>},


]

export default routes