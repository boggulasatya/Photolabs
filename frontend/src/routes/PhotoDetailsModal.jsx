import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
const PhotoDetailsModal = ({ photo, onClose, toggleFavourite }) => {
  console.log("photo:", photo);
  
  const similarPhotos = Object.values(photo.similar_photos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
       <div>
      <PhotoFavButton
          photo={photo}
          toggleFavourite={toggleFavourite}/>
      </div> 
        <div className="photo-details-modal__image" />
        <img src={photo.urls.full} className="photo-details-modal__image" alt="SelectedPhoto" />
       <div className="photo-details-modal__top-bar"/>
      <div className="photo-details-modal__photographer-details">
        <img src={photo.user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p className="photo-list__user-info">{photo.user.name}</p>
          <p className="photo-list__user-info photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
      <div className="photo-details-modal__header">Similar Photos</div>
      <p className="photo-details-modal__images"></p>
        {/* Render similar photos using the PhotoList component */}
        <PhotoList photos={similarPhotos} />
      </div>
  
  )
};

export default PhotoDetailsModal;
