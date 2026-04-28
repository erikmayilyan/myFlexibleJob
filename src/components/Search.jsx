import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Search.css";

const Search = () => {
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
    <form className='search' onSubmit={handleSearch}>
      <input 
        type="text" 
        className='search-input' 
        placeholder='Job title, keywords, or company' 
        value={query}
        onChange={(event => setQuery(event.target.value))}
      />
      <button type='submit' className='find-jobs'>Find Jobs</button>
    </form>
  )
};

export default Search
