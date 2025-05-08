import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
       <Title subTitle='Our Program' Title='Interactive Eco-Education'/>
       <Program/>
       <About/>
       <Title subTitle='TESTIMONIALS' Title='What Parents Say'/>
       <Testimonials/>
       <Title subTitle='CONTACT US' Title='Get in Touch'/>
       <Contact/>
       <Footer/>
       
      
      </div>
    </div>
  )
}

export default App