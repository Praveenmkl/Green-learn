import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'



const Navbar = () => {
     const[sticky,setSticky]=useState(false);


     useEffect(()=>{
            window.addEventListener('scroll', () =>{
            window.scrollY > 400 ? setSticky(true) : setSticky (false);
          })
     },[])

  return (
    <nav className={` ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo' />
        <ul >
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