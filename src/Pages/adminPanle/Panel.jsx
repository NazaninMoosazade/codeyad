import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/adminPanel/Sidebar'

export default function Panel() {
  return (
    <>
    <div className="flex">
        <Sidebar />
        <div className="flex-1">
          {/* <Topbar /> */}
          <Outlet />
        </div>
      </div>
    </>
  )
}
