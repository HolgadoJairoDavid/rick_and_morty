const initialState = {
  myFavorites: [],
  allCharacters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case "REMOVE_FAV":
      return { ...state, myFavorites: action.payload };

    case "FILTER":
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };

    case "FILTERSPECIES":
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.species === action.payload
        ),
      };

    case "ALL":
      return {
        ...state,
        myFavorites: state.allCharacters.map((character) => character),
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

    case "CLEAN":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
