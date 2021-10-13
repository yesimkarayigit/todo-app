import { TODO_ACTIONS } from '../constants';
const { v4: uuid } = require('uuid');

const INITIAL_STATE = {
  list: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TODO_ACTIONS.ADD:
      return { 
        ...state, 
        list: [ ...state.list, {
          id: uuid(),
          text: action.payload,
          isCompleted: false
      }]}

    case TODO_ACTIONS.TOGGLE:
      return { 
        ...state, 
        list: state.list.map((item) => {
          if (item.id === action.payload) {
            return { ...item, isCompleted: !item.isCompleted }
          }

          return item;
        } )
      }

    case TODO_ACTIONS.DELETE:
      return {
        ...state,
        list: state.list.filter((item) => {
          return item.id !== action.payload
        })
      }

    default: return state;
  }
}