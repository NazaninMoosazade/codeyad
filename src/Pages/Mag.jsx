import React from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer/Footer";
import { useQuery } from "@tanstack/react-query";
import ArticlesCard from "../Components/ArticlesCard/ArticlesCard";


export default function Mag() {

   const {data : articles = [] , isError , isLoading } = useQuery({
    queryKey:['allArtilces'],
    queryFn: () => {
      return fetch('http://localhost:4000/v1/articles').then((res) => {
       if(!res.ok) {
        throw new Error("response not ok");
       }
       return res.json()
      })
    }
   })

   console.log(articles);

   if (isLoading) return <p>Loading...</p>
if (isError) return <p>خطا در دریافت اطلاعات</p>
 
  return (
    <>
      <Header />
      <div className="mt-28 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
       {
        articles.map(article => (
          <ArticlesCard {...article}/>
        ))
       }
      </div>
      <Footer />
    </>
  );
}
