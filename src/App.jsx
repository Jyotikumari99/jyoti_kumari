import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Experience'
import Experience from './components/Portfolio'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster/>
    </>
  )
}

export default App