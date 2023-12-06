import React, { useState } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import useApplicationData from 'hooks/useApplicationData';
function SearchBar() {
  const [field, setField] = useState('');
  const [query, setQuery] = useState(''); // Single input field for user query
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = () => {
    const apiUrl = "http://localhost:8001/api";
    // Send a GET request to the backend with the search query
    axios
      .get(`${apiUrl}/photos`, {
        params: { field, query },
      })
    .then((response) => {
      // Handle the response data (e.g., update state or perform actions)
      setSearchResults(response.data);
    })
    .catch((error) => {
      console.error('Error searching photo:', error);
    });
  }

  return (
    <div className="search-bar">
       <select value={field} onChange={(e) => setField(e.target.value)}>
        <option value="username">Username</option>
        <option value="location">Location</option>
        {/* Add other field options here */}
      </select>
      <input
        type="text"
        placeholder="SearchBar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default SearchBar;