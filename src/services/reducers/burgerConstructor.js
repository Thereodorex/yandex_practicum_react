import {
  SET_BUN,
  SWAP_ITEMS,
} from '../actions/burgerConstructor';
import {
  APPEND_ITEM,
  DELETE_ITEM,
} from '../actions/burgerIngredients';
import {
  MAKE_ORDER_SUCCESS,
} from '../actions/orderDetails';
  
const initialState = {
  bun: null,
  mains: [],
  idLoading: false,
  failed: false,
};

const createId = (() => {
  let id = 0;
  return () => ++id;
})();
  
export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUN: {
      return {
        ...state,
        bun: action.bun,
      }
    }
    case APPEND_ITEM: {
      return {
        ...state,
        mains: [
          ...state.mains,
          {
            ...action.item,
            id: createId()
          }
        ],
      }
    }
    case DELETE_ITEM: {
      return {
        ...state,
        mains: state.mains.filter(item => item.id !== action.item.id),
      }
    }
    case SWAP_ITEMS: {
      const newState = {...state, mains: state.mains.map(item => {
        if (item.id === action.firstItem.id) return {...action.secondItem};
        else if (item.id === action.secondItem.id) return {...action.firstItem};
        return item;
      })};
      return newState;
    }
    case MAKE_ORDER_SUCCESS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};