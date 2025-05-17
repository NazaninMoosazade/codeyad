import React from 'react'

export default function Footer() {
  return (
    <section className='w-full h-auto bg-blue'>
    <div className="mt-24 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
      <img src="/img/logo-white.webp" alt="logo-white" className='text-center mx-auto pt-10'/>
      <span className='w-full h-px block bg-border mt-3'></span>
      <p className='font-Dana text-white text-center mx-auto pt-10'>هر کسی باید یاد بگیره که چه‌طور کد بزنه چرا که برنامه‌نویسی به شما یاد می‌ده که چه‌طور فکر کنید.</p>
      <div className='font-Dana text-black text-center mx-auto pt-3 pb-3'>
        <span>ساخته شده با </span>
        <span>&#128150;</span>
        <span> توسط</span>
        <span className='font-DanaDemiBold'>  نازنین موسی زاده  </span>
      </div>
    </div>
    </section>

  )
}
