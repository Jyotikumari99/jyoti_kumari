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

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import About from './components/About'
// import Portfolio from './components/Portfolio'
// import Experience from './components/Experience'
// import Contact from './components/Contact'
// import { Toaster } from 'react-hot-toast'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <>
//       <Router>
//         {/* <Navbar /> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         {/* <Footer /> */}
//         <Toaster />
//       </Router>
//     </>
//   )
// }

// export default App
