import { TODO_ACTIONS } from '../constants';

export const addTodo = (text) => {
  return { type: TODO_ACTIONS.ADD, payload: text}
};

export const toggleTodo = (id) => {
  return { type: TODO_ACTIONS.TOGGLE, payload: id}
}

export const deleteTodo = (id) => {
  return { type: TODO_ACTIONS.DELETE, payload: id}
}