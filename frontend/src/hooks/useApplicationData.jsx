import { useReducer, useEffect } from "react";
import axios from "axios";
//initial state
const initialState = {
  photoData: [],
  topicData: [],
  isModalOpen: false,
  selectedPhoto: null,
  isFavorited: [],
};

// Define your reducer function
function appReducer(state, action) {

  switch (action.type) {
    case "TOGGLE_FAVOURITE":
      const photoId = action.payload;
      // Check if the photo is already favorited
      if (state.isFavorited.includes(photoId)) {
        return {
          ...state,
          isFavorited: state.isFavorited.filter((favouritePhotoId) => favouritePhotoId !== photoId),
        };
      } else {

        return {
          ...state,
          isFavorited: [...state.isFavorited, photoId],
        };
      }
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
      };
    case "SET_PHOTO_DATA":
      return {
        ...state,
        photoData: action.payload,
      };
    case "SET_TOPIC_DATA":
      return {
        ...state,
        topicData: action.payload,
      };

    default:
      return state;
  }
}

function useApplicationData() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  //Define action types
  const ACTIONS = {
    SET_PHOTO_DATA: "SET_PHOTO_DATA",
    SET_TOPIC_DATA: "SET_TOPIC_DATA",
    TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
  };

  // Fetch photos and topics when the custom hook is initialized
  const apiUrl = "http://localhost:8001/api";
  useEffect(() => {
    axios.get(`${apiUrl}/photos`)
    .then((response) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
    })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  const fetchTopics = () => {
    axios.get(`${apiUrl}/topics`)
    .then((response) => {
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data });
    })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  };

  const fetchPhotosByTopic = (topicId) => {
    // Fetch photos for the selected topic
    axios.get(`${apiUrl}/topics/photos/${topicId}`)
    .then((response) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
    })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  const searchPhotos = (field, query) => {
    axios
      .get(`${apiUrl}/photos`, {
        params: { field, query },
      })
      .then((response) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch((error) => {
        console.error("Error searching photos:", error);
      });
  };

  // Destructuring  state
  const { photoData, topicData, isModalOpen, selectedPhoto, isFavorited } = state;

  // action creators
  const toggleFavourite = (photoId) => {
    dispatch({ type: "TOGGLE_FAVOURITE", payload: photoId });
  };

  const openModal = (photo) => {
    dispatch({ type: "OPEN_MODAL", payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return {
    photoData,
    topicData,
    isModalOpen,
    selectedPhoto,
    isFavorited,
    toggleFavourite,
    openModal,
    closeModal,
    fetchPhotosByTopic,
    fetchTopics,
    searchPhotos,
  };
}
export default useApplicationData;

