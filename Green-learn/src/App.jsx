// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Programs/Program';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VidePlayer/VideoPlayer';
import Puzzle from './Pages/Puzzle';


import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';

const ScrollToHero = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToHero) {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

const Home = ({ setPlayState }) => (
  <>
    <Navbar />
    <Hero />
    <div className='container'>
      <Title subTitle='Our Program' Title='Interactive Eco-Education' />
      <Program />
      <About setPlayState={setPlayState} />
      <Title subTitle='TESTIMONIALS' Title='What Parents Say' />
      <Testimonials />
      <Title subTitle='CONTACT US' Title='Get in Touch' />
      <Contact />
      <Footer />
    </div>
  </>
);

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <ScrollToHero />
      <Routes>
        <Route path="/" element={<Home setPlayState={setPlayState} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </Router>
  );
};

export default App;
