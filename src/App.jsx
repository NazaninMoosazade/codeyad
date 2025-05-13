import React from 'react'
import routes from './routse'
import { RouterProvider, createBrowserRouter } from "react-router-dom";


export default function App() {
 const router = createBrowserRouter(routes);
  return (
    <>
    <div className='min-h-screen bg-bgWhite'>
      <RouterProvider router={router} />
    </div>
    </>
  )
}

