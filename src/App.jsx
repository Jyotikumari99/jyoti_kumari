import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
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
    </div>
    <Toaster/>
    </>
  )
}

export default App