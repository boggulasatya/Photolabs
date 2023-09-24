import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

const TopNavigation = ({ isFavorited, selectedTopicId, onTopicClick }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList onTopicClick={onTopicClick} selectedTopicId={selectedTopicId} />
      <div className="top-nav-bar__icon-container">
        <FavBadge isFavorited={isFavorited} />
      </div>
    </div>
  );
}

export default TopNavigation;