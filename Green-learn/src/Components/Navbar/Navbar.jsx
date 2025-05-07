import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="" className='logo' />
        <ul>
           <li>Home</li>
           <li>Learn</li>
           <li>Mini games</li>
           <li>About us</li>
           <li className='btn'>Sign in</li>
        </ul>
    </nav>
  )
}

export default Navbar