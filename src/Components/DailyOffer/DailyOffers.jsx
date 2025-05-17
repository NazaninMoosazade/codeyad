import React from 'react'
import SectionTitle from "../SectionTitle/SectionTitle";
import CourseCard from "../CourseCard/CourseCard";

export default function DailyOffers() {
  return (
        <div className="mt-28 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <SectionTitle
            title={"پیشنهاد های روز"}
            
          />
          <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 gap-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
    
          </div>
        </div>
  )
}
