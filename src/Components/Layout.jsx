import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'


const Layout = () => {
  return (
    <>
    <div className=' py-10 w-full'>
        <NavBar />
        <div>
            
            <Outlet/ >
        </div>
         <Footer />


    </div>
    </>
  )
}

export default Layout
