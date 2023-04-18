const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      const addFav = [...state.allCharacters, action.payload];
      return {
        ...state,
        myFavorites: [...addFav],
        allCharacters: [...addFav],
      };

    case "REMOVE_FAV":
      const deleteFav = state.myFavorites.filter(
        (character) => character.id !== action.payload
      );
      return {
        ...state,
        myFavorites: [...deleteFav],
        allCharacters: [...deleteFav],
      };

    case "FILTER":
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };

      case "ALL":
        return {
          ...state,
          myFavorites: state.allCharacters.map(character=> character)
        };

    case "ORDER":
      let orderFav;
      if (action.payload === "A") {
        orderFav = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        orderFav = state.myFavorites.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
      return {
        ...state,
        myFavorites: [...orderFav],
      };


    default:
      return state;
  }
};

export default reducer;
