import React from "react";
import Header from "../Components/Headers/Header";
import Landing from "../Components/Landing/Landing";
import LastUpdateCourses from "../Components/LastUpdateCourses/LastUpdateCourses";
import Description from "../Components/Description/Description";
import LastArticles from "../Components/LastArticles/LastArticles";
import SpesialComments from "../Components/SpesialComments/SpesialComments";
import DailyOffers from "../Components/DailyOffer/DailyOffers";
import Footer from "../Components/Footer/Footer";
import ManyQuestions from "../Components/ManyQuestions/ManyQuestions";

export default function index() {
  return (
    <>
      <Header />
      <Landing />
      <LastUpdateCourses />
      <Description />
      <DailyOffers />
      <SpesialComments />
      <LastArticles />
      <ManyQuestions/>
      <Footer/>
    </>
  );
}
