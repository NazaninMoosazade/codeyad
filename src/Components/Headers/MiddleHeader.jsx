import React from 'react'
import { Link } from 'react-router-dom'

export default function MiddleHeader() {
  return (
    <>
    {/* Desktop Header */}
     <header>
        <div className='container'>
            {/* Right Header */}
            <Link to={'/'}>
                <img src="/img/logo.png" alt="logo" className='h-[40px]'/>
            </Link>
        </div>
     </header>

    {/* Mobile Header */}
    </>
  )
}
