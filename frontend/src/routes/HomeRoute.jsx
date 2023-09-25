
import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/HomeRoute.scss'
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import useApplicationData from '../hooks/useApplicationData';

const HomeRoute = (props) => {
  const { photoData, topicData, fetchPhotosByTopic, toggleFavourite, isFavorited } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigation isFavorited={isFavorited} onTopicClick={fetchPhotosByTopic} />
      <PhotoList
        photos={photoData}
        topics={topicData}
        openModal={props.openModal}
        isFavorited={isFavorited}
        toggleFavourite={toggleFavourite} />

    </div>
  );
};

export default HomeRoute;
