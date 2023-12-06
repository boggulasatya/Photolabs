import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import SearchBar from './SearchBar';
const TopNavigation = ({ isFavorited, selectedTopicId, onTopicClick, handleSearchResults }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList onTopicClick={onTopicClick} selectedTopicId={selectedTopicId} />
      <div className="search-bar-container">
         <SearchBar handleSearchResults={handleSearchResults} />
      </div> 
  <div className="SearchResults"/>
      <div className="top-nav-bar__icon-container">
        <FavBadge isFavorited={isFavorited} />
      </div>
      </div>
    
  
  );
}

export default TopNavigation;