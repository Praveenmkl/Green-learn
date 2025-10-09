import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../Firebase/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import userIcon from '../../assets/user.png';


const Navbar = () => {
     const[sticky,setSticky]=useState(false);
     const [user, setUser] = useState(null);
     const [userData, setUserData] = useState(null);
     const [showDropdown, setShowDropdown] = useState(false);
     const navigate = useNavigate();

     useEffect(()=>{
            window.addEventListener('scroll', () =>{
            window.scrollY > 400 ? setSticky(true) : setSticky (false);
          })
     },[])

     useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
         if (currentUser) {
           setUser(currentUser);
           // Fetch user data from Firestore
           try {
             const userDocRef = doc(db, 'Users', currentUser.uid);
             const userDoc = await getDoc(userDocRef);
             if (userDoc.exists()) {
               setUserData(userDoc.data());
             }
           } catch (error) {
             console.error('Error fetching user data:', error);
           }
         } else {
           setUser(null);
           setUserData(null);
         }
       });

       return () => unsubscribe();
     }, []);

     // Close dropdown when clicking outside
     useEffect(() => {
       const handleClickOutside = (event) => {
         if (showDropdown && !event.target.closest('.user-profile')) {
           setShowDropdown(false);
         }
       };

       document.addEventListener('mousedown', handleClickOutside);
       return () => document.removeEventListener('mousedown', handleClickOutside);
     }, [showDropdown]);

     const handleSignOut = async () => {
       try {
         await signOut(auth);
         setShowDropdown(false);
         navigate('/');
       } catch (error) {
         console.error('Error signing out:', error);
       }
     };

  return (
    <nav className={` ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo' />
        <ul >
           <li><Link to ='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
           <li><Link to ='program' smooth={true} offset={-260} duration={500}>Learn</Link></li>
           <li><Link to ='about' smooth={true} offset={-190} duration={500}>About us</Link></li>
           <li><Link to ='testimonials' smooth={true} offset={-340} duration={500}>Testimonials</Link></li>
          <li><Link to ='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
          
          {user ? (
            <li className="user-profile">
              <div 
                className="user-info" 
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img 
                  src={user.photoURL || userIcon} 
                  alt="User" 
                  className="user-avatar"
                />
                <span className="user-name">
                  {userData?.fullName || user.displayName || 'User'}
                </span>
                <span className={`dropdown-arrow ${showDropdown ? 'up' : 'down'}`}>
                  ▼
                </span>
              </div>
              {showDropdown && (
                <div className="dropdown-menu">
                  <button onClick={() => {setShowDropdown(false); navigate('/profile')}}>
                    Profile
                  </button>
                  <button onClick={handleSignOut}>
                    Sign Out
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li><button className='btn' onClick={() => navigate('/login')}>Sign in</button></li>
          )}
        </ul>
    </nav>
  )
}

export default Navbar