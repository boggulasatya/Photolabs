import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem'; 
import useApplicationData from 'hooks/useApplicationData';

const PhotoList = ({  photos, toggleFavourite, openModal, PhotoDetailsModal, setDisplayModal, setPhotoData, setTopicData, isFavorited }) => {
  const { photoData } = useApplicationData();
// console.log('photos:', photos);
  return (
    
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          // photoData={photoData}
          toggleFavourite={toggleFavourite}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.name}
          location={photo.location}
          openModal={() => openModal(photo)}
          PhotoDetailsModal={PhotoDetailsModal}
          setDisplayModal={setDisplayModal}
          setPhotoData={setPhotoData}
          setTopicData={setTopicData}
          isFavorited={isFavorited}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
