import React from 'react';
import { useState } from 'react';
import './App.scss';
import mockphotos from './mocks/photos';
import mocktopics from './mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [isFavorited, setIsFavourited] = useState([]);
  //use useState to store the the photos and topics
  const [photos, setPhotoData] = useState(mockphotos);
  const [topicData, setTopicData] = useState(mocktopics);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);//track which photo item the user clicks on
  const toggleFavourite = (photo) => {
    if (isFavorited.includes(photo)) {
      let newFavourites = [...isFavorited].filter((favouritePhoto) => photo !== favouritePhoto);
      setIsFavourited(newFavourites);
    } else {
      setIsFavourited((prev) => [...prev, photo]);
    }
  };
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  // Log state changes
  console.log('photos state:', photos);
  console.log('topicData state:', topicData);
  console.log('isModalOpen state:', isModalOpen);
  console.log('selectedPhoto state:', selectedPhoto);

  return (

    <div className="App">
      <HomeRoute photos={photos} openModal={openModal} isFavorited={isFavorited} toggleFavourite={toggleFavourite} />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          toggleFavourite={toggleFavourite}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPhoto(null);
          }}
        />
      )}
    </div>

  );
};
export default App;
