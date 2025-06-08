import React, { useEffect, useState } from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import CourseCard from "../Components/CourseCard/CourseCard";
import ArticlesCard from "../Components/ArticlesCard/ArticlesCard";

export default function SearchPage() {
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/v1/search/${name}`)
      .then((res) => res.json())
      .then((allData) => {
        // console.log(allData);
        setCourses(allData.allResultCourses);
        setArticles(allData.allResultArticles);
      });
  }, [name]);
  return (
    <>
      <Header />
      <section className="mt-10 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <SectionTitle title="نتیجه دوره ها برای جست و جوی شما : " />
        {courses.length === 0 ? (
          <p className="alert alert-danger font-DanaDemiBold">
            {" "}
            دوره ای برای جست و جوس شما وجود ندارد
          </p>
        ) : (
          <div className="flex grid-col-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3 mb-5">
            {courses.map((course) => (
              <CourseCard key={course._id} {...course} />
            ))}
          </div>
        )}

        <SectionTitle title="نتیجه  مقالات برای جست و جوی شما : " />
        {articles.length === 0 ? (
          <p className="alert alert-danger font-DanaDemiBold">
            {" "}
            دوره ای برای جست و جوس شما وجود ندارد
          </p>
        ) : (
          <div className="flex grid-col-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticlesCard key={article._id} {...article} />
            ))}
          </div>
        )}

      </section>
      <Footer />
    </>
  );
}
