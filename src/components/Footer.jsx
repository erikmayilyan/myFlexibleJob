import React from 'react';
import mainLogo from '../../public/primaryLogo.png';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <img src={mainLogo} alt="" />
        <p>Find your side hustle today and start building your carrer!</p>
        <ul className='footer-nav'>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/jobs'>Jobs</a></li>
        </ul>
      </div>
      <div className='footer-right'>
        <h3>CONTACT US</h3>
        <p>For any inquiries please contact us by email or phone!</p>
        <ul>
          <li>
            <a>📞 Phone Number: +352 777 777 777</a>
          </li>
          <li>
            <a>📧 Email: myflexiblejob@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Footer;
