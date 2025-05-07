import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
       <Title subTitle='Our Program' Title='Interactive Eco-Education'/>
       <Program/>
         
      </div>
    </div>
  )
}

export default App