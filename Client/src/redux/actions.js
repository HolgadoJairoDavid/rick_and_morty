import axios from 'axios'
const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";
const FILTER = "FILTER";
const ORDER = "ORDER";
const ALL = 'ALL';
const CLEAN = 'CLEAN'


export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     });
  };
};

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: REMOVE_FAV,
           payload: data,
     });
     });
  };
};


export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
    return {
        type: ORDER, payload: orden
    }
}

export const all = ()=>{
  return{
      type: ALL
  }
}

export const cleanFavorites = () => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/clean';
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: CLEAN,
           payload: data,
     });
     });
  };
}
