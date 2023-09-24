import { useReducer, useEffect } from "react";

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
  
  switch(action.type) {
    case "TOGGLE_FAVORITE":
      // Check if the photo is already favorited
      if(state.isFavorited.includes(action.payload)) {
        return {
          ...state,
          isFavorited: state.isFavorited.filter((photo) => photo !== action.payload),
        };
      } else {
        return {
          ...state,
          isFavorited: [...state.isFavorited, action.payload],
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
  };

// Fetch photos and topics data when the custom hook is initialized
const apiUrl = "http://localhost:8001/api";
useEffect(() => {
  fetch(`${apiUrl}/photos`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
    })
    .catch((error) => {
      console.error("Error fetching photos:", error);
    });
}, []);


useEffect(() => {
  fetch(`${apiUrl}/topics`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
    })
    .catch((error) => {
      console.error("Error fetching topics:", error);
    });
}, []);

const fetchPhotosByTopic = (topicId) => {
  // Fetch photos for the selected topic
  fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
    })
    .catch((error) => {
      console.error('Error fetching photos:', error);
    });
};

  // Destructuring  state
  const { photoData, topicData, isModalOpen, selectedPhoto, isFavorited } = state;

  // action creators
  const toggleFavourite = (photo) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: photo });
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
  };
}
export default useApplicationData;

