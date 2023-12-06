import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "./hooks/useApplicationData";
import SearchBar from 'components/SearchBar';

const App = () => {

  const {
    isModalOpen,
    selectedPhoto,
    isFavorited,
    toggleFavourite,
    openModal,
    closeModal,
    photoData,
    topicData,
    searchPhotos,
  } = useApplicationData();

  return (

    <div className="App">
        <SearchBar searchPhotos={searchPhotos} />
       {/* <SearchBar searchPhotos={searchPhotos} /> */}
       <HomeRoute photoData={photoData} topicData={topicData}  openModal={openModal} isFavorited={isFavorited} toggleFavourite={toggleFavourite} />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          toggleFavourite={toggleFavourite}
          onClose={() => {
            closeModal();
          }}
          similarPhotos={selectedPhoto.similar_photos} 
        />
      )}
      
    </div>

  );
};
export default App;
