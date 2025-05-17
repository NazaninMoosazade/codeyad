import React from 'react'
import Header from '../Components/Headers/Header'
import Landing from '../Components/Landing/Landing'
import LastUpdateCourses from '../Components/LastUpdateCourses/LastUpdateCourses'
import Description from '../Components/Description/Description'
import LastArticles from '../Components/LastArticles/LastArticles'
import SpesialComments from '../Components/SpesialComments/SpesialComments'

export default function index() {
  return (
    <>
    <Header/>
    <Landing/>
    <LastUpdateCourses/>
    <Description/>
    <SpesialComments/>
    <LastArticles/>
    </>
  )
}
