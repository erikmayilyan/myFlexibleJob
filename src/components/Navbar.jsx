import React from 'react';
import mainLogo from '../../public/primaryLogo.png';
import "./Navbar.css";

const Navbar = ({theme, setTheme}) => {
  return (
    <div className='navbar'>
      <img src={mainLogo} alt='logo' className='mainLogo' />
      <div className='nice-navbar'>
        <a href="#" className='nav-tabs'>Home</a>
        <a href="#about" className='nav-tabs'>About</a>
        <a href="#jobs" className='nav-tabs'>Jobs</a>
      </div>
      <div className='login'>
        <a href="#log-in">
          Log In 
        </a>
      </div>
    </div>
  )
}

export default Navbar
