import {
  SET_ITEM_DETAILS,
  CLOSE_ITEM_DETAILS,
} from '../actions/ingredientDetails';

const initialState = {
  item: null,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM_DETAILS: {
      return {
        ...state,
        item: action.item,
      }
    }
    case CLOSE_ITEM_DETAILS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};