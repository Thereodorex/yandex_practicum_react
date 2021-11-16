import {
  SET_BUN,
} from './burgerConstructor';

export const APPEND_ITEM = "APPEND_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

const ITEMS_URL = 'https://norma.nomoreparties.space/api/ingredients';

export function getItems() {
  return function(dispatch) {
    dispatch({type: GET_ITEMS_REQUEST});
    fetch(ITEMS_URL)
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type: GET_ITEMS_SUCCESS,
        items: data.data
      });
      const firstBun = data.data.find(x => x.type === 'bun');
      if (firstBun) {
        dispatch({
          type: SET_BUN,
          bun: firstBun,
        });
      }
    })
    .catch(err => {
      dispatch({type: GET_ITEMS_FAILED});
    });
  };
}