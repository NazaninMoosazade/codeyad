import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import ArticlesCard from '../ArticlesCard/ArticlesCard'

export default function LastArticles() {
  return (
    <div className='mt-24 w-full max-w-[1600px] mx-auto px-4 lg:px-8'>
        <SectionTitle title={'آخرین مقالات'} btnTitle={'همرو ببین'}/>
        <div className='w-full max-w-[1600px] mx-auto px-4 lg:px-8 gap-x-2  grid grid-col-1 md:grid-cols-2'>
         <ArticlesCard/>
         <ArticlesCard/>


        </div>
    </div>
  )
}
