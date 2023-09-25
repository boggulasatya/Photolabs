import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem'; 

const PhotoList = ({  photos, toggleFavourite, isFavorited,  openModal }) => {
  
  return (
    
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          toggleFavourite={toggleFavourite}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.name}
          location={photo.location}
          openModal={() => openModal(photo)}
          isFavorited={isFavorited}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
