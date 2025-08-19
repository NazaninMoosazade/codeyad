import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/adminPanel/Sidebar";
import AdminTopbar from "../../Components/adminPanel/AdminTopbar";

export default function Panel() {
  return (
    <>
<div className="flex min-h-screen bg-gray-100">
  <main className="flex-1 p-6 md:mr-64">
    <AdminTopbar />
    <Outlet />
  </main>
  <Sidebar />
</div>

    </>
  );
}
