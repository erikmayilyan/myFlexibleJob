import React from 'react';
import Search from './Search';
import "./Hero.css";

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <h1>Your <span className='career'>career</span> starts here. Discover <span className='career'>oppotunities</span> made for students like you. </h1>
      <div className='hero-more'>
        <h2>Search For The Job Now</h2>
        <div className='search'>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Hero
