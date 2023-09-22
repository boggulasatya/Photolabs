
import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss'
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

  const HomeRoute = (props) => {
    const defaultState = [];
    const [isFavorited, setIsFavourited] = useState(defaultState);
    const toggleFavourite = (photo) => {
      // console.log('Type of toggleFavourite:', typeof toggleFavourite);
      if(isFavorited.includes(photo)){
          let newFavourites = [...isFavorited].filter((favouritePhoto) =>  photo !== favouritePhoto)
          setIsFavourited(newFavourites);
    
      }else{
        setIsFavourited((prev) => 
           [...prev, photo]);
        
        }
    };
    // console.log(isFavorited);

    return (
      <div className="home-route">
     <TopNavigation isFavorited={isFavorited} /> 
          <PhotoList 
          photos = {props.photos}
          openModal = {props.openModal}
          isFavorited ={isFavorited}
         toggleFavourite={toggleFavourite} />

          </div>
    );
  };
  
  export default HomeRoute;
