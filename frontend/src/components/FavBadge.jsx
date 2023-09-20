import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavorited }) => {
  const hasFavoritedItems = isFavorited && isFavorited.length > 0;

  return (
    <div className={`top-nav-bar__icon-container ${hasFavoritedItems ? 'active' : ''}`}>
       {hasFavoritedItems ? (
      <FavIcon selected={true} displayAlert={true} /> 
       ) : (
    
    <FavIcon selected={false} displayAlert={false} />
       )}
       </div>
  );
};

export default FavBadge;