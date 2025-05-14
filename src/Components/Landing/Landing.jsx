import React from "react";
import RightSectionLanding from "./RightSectionLanding";
import LeftSectionLanding from "./LeftSectionLanding";

export default function Landing() {
  return (
    <section className="mt-24">
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
         <RightSectionLanding/>
         <LeftSectionLanding/>
        </div>
      </div>
    </section>
  );
}
