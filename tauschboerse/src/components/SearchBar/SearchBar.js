import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Was suchen Sie?" 
        value={searchTerm} 
        onChange={handleSearch} 
      />
      <button onClick={() => console.log(`Suche nach: ${searchTerm}`)}>Suchen</button>
    </div>
  );
};

export default SearchBar;
