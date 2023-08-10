import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Store from '../pages/Store'
import Exportcontext from '../context/Exportcontext'


const Approuter = () => {
  return (
    <>
    <Exportcontext>
    <Routes>
    <Route path='/home'  element={<Home/>}/>
    <Route path='/Contact'  element={<Contact/>}/>
    <Route path='/Store'  element={<Store/>}/>
    <Route path='/Cart'  element={<Cart/>}/>
    </Routes>
    </Exportcontext>
   
    </>

    
  )
}

export default Approuter