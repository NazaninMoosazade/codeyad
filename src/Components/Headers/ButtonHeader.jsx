import React from "react";
import BoxButtonHeader from "./BoxButtonHeader";
<BoxButtonHeader />;

export default function ButtonHeader() {
  return (
    <div className="hidden lg:block w-full max-w-[1600px] mx-auto px-4 lg:px-8">
      <BoxButtonHeader />
      <BoxButtonHeader />
      <BoxButtonHeader />
      <BoxButtonHeader />
      <BoxButtonHeader />
    </div>
  );
}
