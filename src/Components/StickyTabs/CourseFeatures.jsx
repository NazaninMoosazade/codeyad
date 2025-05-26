import React from "react";

export default function CourseFeatures({ features }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="dark:!bg-bgDarker flex  gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition"
        >
          <div className="w-10 h-10 ">{feature.icon}</div>
          <span className="font-Dana text-sm md:text-base dark:text-white">{feature.title}</span>
        </div>
      ))}
    </section>
  );
}
