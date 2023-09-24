import React from 'react';
import  { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ photo, toggleFavourite }) {
  const [isLiked, setIsLiked] = useState(false);
  function handleClick() {
    setIsLiked(!isLiked);
    toggleFavourite(photo);
  }
  return (
    
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg"> 
          <FavIcon selected={isLiked} displayAlert={false} /> 
      </div>
    </div>
  );
}

export default PhotoFavButton;



