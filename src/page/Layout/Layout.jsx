import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AppRoutes from "../Layout/Layout"

const Layout = () => {
  return (
    <div>
        <Header/>
        <AppRoutes/>
        <Footer/>
    </div>
  )
}

export default Layout 