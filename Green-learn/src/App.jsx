import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'

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
       
      
      </div>
    </div>
  )
}

export default App