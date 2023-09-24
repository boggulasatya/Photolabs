import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
const PhotoDetailsModal = ({ photo, onClose, toggleFavourite }) => {
  console.log("photo:", photo);
  const similarPhotos = photo.similar_photos;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <div>
          <PhotoFavButton
            toggleFavourite={toggleFavourite} />
        </div>
        {/* <div className="photo-details-modal__image" /> */}
        <img src={photo.urls.full} className="photo-details-modal__image" alt="SelectedPhoto" />
        <div className="photo-details-modal__top-bar" />
        <div className="photo-details-modal__photographer-details">
          <img src={photo.user.profile} className="photo-list__user-profile" />
          <section className="photo-list__user-info">
            <div className="photo-list__user-info">{photo.user.name}</div>
            <div className="photo-list__user-info photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
          </section>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        {/* Render similar photos using the PhotoList component */}
        <PhotoList photos={similarPhotos} toggleFavourite={toggleFavourite} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
