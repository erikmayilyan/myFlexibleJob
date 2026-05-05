import React from 'react';
import Search from './Search';
import "./Hero.css";
import Articles from './Articles';

const Hero = () => {
  return (
    <div>
      <div id='hero' className='hero'>
        <h1>Your <span className='career'>career</span> starts here. Discover <span className='career'>oppotunities</span> made for students like you. </h1>
        <div className='hero-more'>
          <h2>Search For The Job Now</h2>
          <div className='search'>
            <Search />
          </div>
        </div>
      </div>
      <div className='hero-about'>
        <h1>ABOUT US</h1>
        <p>We are a non-profit platform designed for students residing in the Grand Duchy of Luxembourg to find side-hustle jobs that allow them to earn money simultaneously with their studies.</p>
        <a href="/about">LEARN MORE</a>
      </div>
      <div>
        <Articles />
      </div>
    </div>
  )
}

export default Hero
