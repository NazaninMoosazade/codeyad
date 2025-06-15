import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Panel() {
  return (
    <>
    <div>
        panle
        <Outlet/>
    </div>
    </>
  )
}
