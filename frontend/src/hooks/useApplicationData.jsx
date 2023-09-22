import { useReducer } from "react";
import mockphotos from '../mocks/photos';
import mocktopics from '../mocks/topics';

//initial state
const initialState = {
  photos: mockphotos,
  topicData: mocktopics,
  isModalOpen: false,
  selectedPhoto: null,
  isFavorited: [],
};

// Define your reducer function
function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      // Check if the photo is already favorited
      if (state.isFavorited.includes(action.payload)) {
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
    default:
      return state;
  }
} 

function useApplicationData() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Destructuring  state
  const { photos, topicData, isModalOpen, selectedPhoto, isFavorited } = state;

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
    photos,
    topicData,
    isModalOpen,
    selectedPhoto,
    isFavorited,
    toggleFavourite,
    openModal,
    closeModal,
  };
}

export default useApplicationData;

// function useApplicationData() {
//   const [isFavorited, setIsFavourited] = useState([]);
//   //use useState to store the the photos and topics
//   const [photos, setPhotoData] = useState(mockphotos);
//   const [topicData, setTopicData] = useState(mocktopics);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);//track which photo item the user clicks on
//   const toggleFavourite = (photo) => {
//     if (isFavorited.includes(photo)) {
//       let newFavourites = [...isFavorited].filter((favouritePhoto) => photo !== favouritePhoto);
//       setIsFavourited(newFavourites);
//     } else {
//       setIsFavourited((prev) => [...prev, photo]);
//     }
//   };
//   const openModal = (photo) => {
//     setSelectedPhoto(photo);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   return {
//     isModalOpen,
//     selectedPhoto,
//     isFavorited,
//     toggleFavourite,
//     openModal,
//     closeModal,
//     photos,
//   };
// }
//   export default useApplicationData;