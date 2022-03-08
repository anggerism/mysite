import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import Body from "./Body"

/* in react fragment we can group children without adding the extra note 
shorthand : <>*/
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
