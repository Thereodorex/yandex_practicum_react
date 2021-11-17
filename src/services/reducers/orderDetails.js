import { CLOSE_ITEM_DETAILS } from '../actions/ingredientDetails';
import {
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAILED,
  CLOSE_ORDER_DETAILS,
} from '../actions/orderDetails';

const initialState = {
  isLoading: false,
  failed: false,
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        failed: false,
      }
    }
    case MAKE_ORDER_SUCCESS: {
      return {
        ...action.newState,
        isLoading: false,
        failed: false,
      }
    }
    case MAKE_ORDER_FAILED: {
      return initialState;
    }
    case CLOSE_ITEM_DETAILS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};