import React, { useState } from 'react';
import mainLogo from '../../public/primaryLogo.png';
import "./Navbar.css";

const Navbar = ({theme, setTheme}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className='navbar'>
      <img src={mainLogo} alt='logo' className='mainLogo' />
      <button
        type='button'
        className='menu-toggle'
        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {isMobileMenuOpen ? '' : '='}
      </button>
      <div className={`nice-navbar ${isMobileMenuOpen ? 'open' : ''}`}>
        <button
          type='button'
          className='close-menu'
          aria-label='Close navigation menu'
          onClick={closeMobileMenu}
        >
          X
        </button>
        <a href="#" className='nav-tabs' onClick={closeMobileMenu}>Home</a>
        <a href="#about" className='nav-tabs' onClick={closeMobileMenu}>About</a>
        <a href="#jobs" className='nav-tabs' onClick={closeMobileMenu}>Jobs</a>
        <a href="#log-in" className='mobile-login' onClick={closeMobileMenu}>
          Log In
        </a>
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
