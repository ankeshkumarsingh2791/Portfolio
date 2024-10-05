import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'

const Layout = () => {
  return (
    <>
    <div className=' py-10 w-full'>
        <NavBar />
        <div>
            
            <Outlet/ >
        </div>

    </div>
    </>
  )
}

export default Layout
