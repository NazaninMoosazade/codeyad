import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import ArticlesCard from '../ArticlesCard/ArticlesCard'

export default function LastArticles() {
  return (
    <div className='mt-24 w-full max-w-[1600px] mx-auto px-4 lg:px-8'>
      <SectionTitle title={'آخرین مقالات'} btnTitle={'همرو ببین'} btnHref={'/mag'}/>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {/* ستون راست: دو تا کارت زیر هم */}
        <div className="flex flex-col gap-4 order-2 md:order-1">
          <ArticlesCard />
          <ArticlesCard />
        </div>

        {/* ستون چپ: یک کارت بلند هم‌ارتفاع با دو تای بالا */}
        <div className="md:col-span-2 order-1 md:order-2 flex">
          <ArticlesCard className="h-full w-full" />
        </div>
      </div>
    </div>
  )
}
