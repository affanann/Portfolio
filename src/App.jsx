import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
      <ScrollToTop smooth color='white' style={{ backgroundColor: '#3BB2F6', display:'flex', alignItems:'center', justifyContent:'center' }}/>
    </div>
  )
}

export default App;
