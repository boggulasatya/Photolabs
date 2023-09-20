import React from 'react';
import  { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ photo, toggleFavourite }) {
  // const { photo, toggleFavourite } = props;
  const [isLiked, setIsLiked] = useState(false);
  

  function handleClick() {
    // console.log(props);
    setIsLiked(!isLiked);
    toggleFavourite(photo);
  }
  // console.log('Props in PhotoFavButton:', props);
  return (
    
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg"> 
          <FavIcon selected={isLiked} displayAlert={false} /> 
      </div>
    </div>
  );
}

export default PhotoFavButton;



