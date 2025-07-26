import React from "react";

export default function DataTable({ title, children }) {
  return (
    <>
      <div className="m-4">
        <span className="font-DanaDemiBold m-3 text-blue-700">{title}</span>
        <div className="mt-4">{children}</div>
      </div>
    </>
  );
}
