import React, { useEffect, useState } from 'react';
import mainLogo from '../../public/primaryLogo.png';
import { useLocation } from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({theme, setTheme}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (!storedUser) {
      setUser(null);
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch {
      setUser(null);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
    closeMobileMenu();
  };

  return (
    <div className='navbar'>
      <a href='/'>
        <img src={mainLogo} alt='logo' className='mainLogo' />
      </a>
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
        <a href="/" className='nav-tabs' onClick={closeMobileMenu}>Home</a>
        <a href="/about" className='nav-tabs' onClick={closeMobileMenu}>About</a>
        <a href="/jobs" className='nav-tabs' onClick={closeMobileMenu}>Jobs</a>
        {user ? (
          <div>
            <div 
              className='mobile-user'>
              <span className='avatar'>{user.name.charAt(0).toUpperCase()}</span>
              <span>{user.name}</span>
            </div>
            <button type='button' className='mobile-logout' onClick={handleLogout}>
              Log Out
            </button>
          </div>
        ) : (
          <a href="/login" className='mobile-login' onClick={closeMobileMenu}>
            Log In
          </a>
        )}
      </div>
      {user ? (
        <div className='desktop-user'>
          <div className='user-trigger' onClick={() => setIsDropdownOpen((prev) => !prev)}>
            <span className='avatar'>{user.name.charAt(0).toUpperCase()}</span>
            <span className='user-name'>{user.name}</span>
          </div>
          {isDropdownOpen && (
            <div className='dropdown-menu'>
              <a href="#" onClick={() => setIsDropdownOpen(false)}>
                Profile
              </a>
              <button type='button' className='dropdown-logout' onClick={handleLogout}>
                Log Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className='login'>
          <a href="/login">
            Log In 
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar
