import { useState } from "react";

export default function StickyTabs({ tabs = [] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const handleClick = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("Element not found:", id);
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-bgWhite overflow-x-auto">
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex gap-x-14 mt-6 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`no-underline font-DanaDemiBold  pb-2 border-b-2 transition-colors duration-200 ${
                activeTab === tab.id
                  ? "border-b-blue text-blue-500"
                  : "border-b-transparent text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}