export const MAKE_ORDER_REQUEST = 'MAKE_ORDER_REQUEST';
export const MAKE_ORDER_SUCCESS = 'MAKE_ORDER_SUCCESS';
export const MAKE_ORDER_FAILED = 'MAKE_ORDER_FAILED';
export const CLOSE_ORDER_DETAILS = "CLOSE_ORDER_DETAILS";

const MAKE_ORDER_URL = 'https://norma.nomoreparties.space/api/orders';

export function makeOrder(items) {
    return function(dispatch) {
      dispatch({type: MAKE_ORDER_REQUEST});
      fetch(MAKE_ORDER_URL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify({
          "ingredients": items.map(item => item._id),
        }),
      })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: MAKE_ORDER_SUCCESS,
          newState: data,
        });
      })
      .catch(err => {
        dispatch({type: MAKE_ORDER_FAILED});
      });
    };
  }