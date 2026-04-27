import React from 'react';
import "./Search.css";

const Search = () => {
  return (
    <div className='search'>
      <input type="text" className='search-input' placeholder='Job title, keywords, or company' />
      <button className='find-jobs'>Find Jobs</button>
    </div>
  )
};

export default Search
