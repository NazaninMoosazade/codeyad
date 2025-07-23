import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/adminPanel/Sidebar'

export default function Panel() {
  return (
    <>
 <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>

    </>
  )
}
