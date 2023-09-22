import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem'; 


const PhotoList = ({ photos, toggleFavourite, openModal, PhotoDetailsModal, setDisplayModal, setPhotoData, isFavorited }) => {
console.log('photos:', photos);
  return (
    
    <ul className="photo-list">
      {photos && photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={toggleFavourite}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.name}
          location={photo.location}
          openModal={() => openModal(photo)}
          PhotoDetailsModal={PhotoDetailsModal}
          setDisplayModal={setDisplayModal}
          setPhotoData={setPhotoData}
          isFavorited={isFavorited}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
