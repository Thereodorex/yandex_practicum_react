import {
  SET_BUN,
  APPEND_INGREDIENT,
  DELETE_INGREDIENT,
} from '../actions/burgerConstructor';
  
const initialState = {
  bun: null,
  mains: [],
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
    case APPEND_INGREDIENT: {
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
    case DELETE_INGREDIENT: {
      return {
        ...state,
        mains: state.mains.filter(item => item.id !== action.id),
      }
    }
    default: {
      return state;
    }
  }
};