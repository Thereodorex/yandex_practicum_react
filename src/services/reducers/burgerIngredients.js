import {
  SET_BUN,
} from '../actions/burgerConstructor';
import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  APPEND_ITEM,
  DELETE_ITEM,
} from '../actions/burgerIngredients';

const initialState = {
  items: [],
  isLoading: false,
  failed: false,
};

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        failed: false,
      }
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        failed: false,
        items: action.items.map(item => ({...item, count: 0})),
      }
    }
    case GET_ITEMS_FAILED: {
      return initialState;
    }
    case SET_BUN: {
      return {
        ...state,
        items: state.items.map(item => {
          if (item.type !== 'bun') {
            return item;
          } else if (item._id === action.bun._id) {
            return {
              ...item,
              count: 2,
            }
          } else {
            return {
              ...item,
              count: 0,
            }
          }
        })
      }
    }
    case APPEND_ITEM: {
      return {
        ...state,
        items: state.items.map(item => item._id === action.item._id ? {...item, count: item.count + 1} : item)
      }
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.map(item => item._id === action.item._id ? {...item, count: item.count - 1} : item)
      }
    }
    default: {
      return state;
    }
  }
};