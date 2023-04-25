import axios from "axios";
const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";
const FILTER = "FILTER";
const ORDER = "ORDER";
const ALL = "ALL";
const CLEAN = "CLEAN";

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
    return dispatch({
      type: ADD_FAV,
      payload: data,
    });
    } catch (error) {
      console.log( `%cerror: ${error.message}`,`color:red;font-weight:bold`);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = axios.delete(endpoint);
    return dispatch({
      type: REMOVE_FAV,
      payload: data,
    });
    } catch (error) {
      console.log( `%cerror: ${error.message}`,`color:red;font-weight:bold`);
    }
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
    type: ORDER,
    payload: orden,
  };
};

export const all = () => {
  return {
    type: ALL,
  };
};

export const cleanFavorites = () => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/clean";
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
    return dispatch({
      type: CLEAN,
      payload: data,
    });
    } catch (error) {
      console.log( `%cerror: ${error.message}`,`color:red;font-weight:bold`);
    }
  };
};
