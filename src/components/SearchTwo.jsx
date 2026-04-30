import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SearchTwo.css";

const SearchTwo = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    
    if (query.trim() !== '') {
      navigate(`/jobs?search=${query}`);
    } else {
      navigate(`/jobs`);
    }
  };

  return (
    <form className='search-two' onSubmit={handleSearch}>
      <input 
        type="text" 
        className='search-two-input' 
        placeholder='Job title, keywords, or company' 
        value={query}
        onChange={(event => setQuery(event.target.value))}
      />
      <button type='submit' className='find-jobs-two'>Find Jobs</button>
    </form>
  )
};

export default SearchTwo;
