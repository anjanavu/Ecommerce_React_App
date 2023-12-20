import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Logout from './components/Logout/Logout'
import Detail from './Details/Detail'

const Main = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ecommerce_React_App' element={<Home />} />
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default Main
