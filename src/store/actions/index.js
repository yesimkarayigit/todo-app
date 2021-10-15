import axios from 'axios';
import { TODO_ACTIONS, IMAGE_ACTIONS } from '../constants';
import { API_KEY } from '../../config';

export const addTodo = (text) => {
  return { type: TODO_ACTIONS.ADD, payload: text}
};

export const toggleTodo = (id) => {
  return { type: TODO_ACTIONS.TOGGLE, payload: id}
};

export const deleteTodo = (id) => {
  return { type: TODO_ACTIONS.DELETE, payload: id}
};

export const getImage = () => dispatch => {
  axios
  .get(`https://api.unsplash.com/photos/random/?client_id=${API_KEY}`)
  .then(response => dispatch({ type: IMAGE_ACTIONS.GET_IMAGE, payload: response.data }))
  .catch(error => dispatch({ type: IMAGE_ACTIONS.GET_IMAGE_ERROR, payload: error }));
};