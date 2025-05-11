import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VidePlayer/VideoPlayer'
import Puzzle from './Pages/Puzzle'

import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';


const Home = ({ playState, setPlayState }) => (
  <>
    <Navbar />
    <Hero />
    <div className='container'>
    <Title subTitle="Our Program" Title="Interactive Eco-Education" />
    <Program />
    <About setPlayState={setPlayState}/>
    <Title subTitle="TESTIMONIALS" Title="What Parents Say" />
    <Testimonials />
    <Title subTitle="CONTACT US" Title="Get in Touch" />
    <Contact />
    <Footer />
</div>
    <VideoPlayer playState={playState} setPlayState={setPlayState} />
  </>
)

const App = () => {
  const [playState, setPlayState] = useState(false)

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home playState={playState} setPlayState={setPlayState} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
    </Router>
  )
}

export default App