import {
  SET_BUN,
} from './burgerConstructor';

export const SET_ITEMS = 'GET_ITEMS_REQUEST';
export const APPEND_ITEM = "APPEND_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

const ITEMS_URL = 'https://norma.nomoreparties.space/api/ingredients';

export function getItems() {
  return function(dispatch) {
    fetch(ITEMS_URL)
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type: SET_ITEMS,
        items: data.data
      });
      const firstBun = data.data.find(x => x.type === 'bun');
      if (firstBun) {
        console.log(firstBun)
        console.log(SET_BUN)
        dispatch({
          type: SET_BUN,
          bun: firstBun,
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
  };
}