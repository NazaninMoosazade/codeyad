import React, { useEffect, useState } from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import CourseCard from "../Components/CourseCard/CourseCard";

export default function () {

  const [allCourses , setAllCourses] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/v1/courses").then((res) => res.json())
    .then(data => {
      console.log(data);
      setAllCourses(data)
    })
  }, []);

  return (
    <>
      <Header />
      <div className="mt-10 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
       <div className="grid grid-cols-1 md:grid-cols-3">
      {
        allCourses.map(course => (
          <CourseCard key={course._id} {...course}/>
        ))
      }
       </div>
      </div>
      <Footer />
    </>
  );
}
