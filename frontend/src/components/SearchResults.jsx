import React from 'react';
import "../styles/SearchResults.scss";
function SearchResults({ searchResults }) {
  return (
    <div className="search-results">
        {searchResults.map((result) => (
          <div key={result.id} className="photo-item">
            <img src={result.urls.regular} alt={`Photo ${result.id}`} />
            <p>{result.user.username}</p>
            {/* Add other details you want to display */}
          </div>
        ))}
      </div>
    
  );
}

export default SearchResults;
