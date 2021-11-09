import {
  SET_ITEMS,
  APPEND_ITEM,
  DELETE_ITEM,
} from '../actions/burgerIngredients';

const initialState = {
  items: null,
};

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS: {
      return {
          ...state,
          items: action.items.map(item => ({...item, count: 0})),
      };
    }
    case APPEND_ITEM: {
      return {
        ...state,
        items: state.items.map(item => item._id === action.id ? {...item, count: item.count + 1} : item)
      }
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.map(item => item._id === action.id ? {...item, count: item.count - 1} : item)
      }
    }
    default: {
      return state;
    }
  }
};