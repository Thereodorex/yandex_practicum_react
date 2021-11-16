import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  APPEND_ITEM,
  DELETE_ITEM,
} from '../actions/burgerIngredients';

const initialState = {
  items: null,
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