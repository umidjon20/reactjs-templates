import React from 'react'
import {Navigate , Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import About from '../pages/About'
import InternationalTour from '../pages/InternationalTour'
import LocalTour from '../pages/LocalTour'
import NotFound from '../pages/NotFoundPage'

export default function Routess() {
  return (
    
    <Routes>
    <Route path={'/'} element={<Navigate to={'/home'} />} ></Route>
    <Route path='/home' element ={<HomePage/>} />

        <Route path='/about-us' element ={<About/>} />
        <Route path='/contact' element = {<InternationalTour/>}/>
        <Route path='/service' element = {<LocalTour/>}/>

    <Route path={'*'} element={<NotFound/>} ></Route>
    
  </Routes>
  )
}
