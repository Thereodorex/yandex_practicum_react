import React, { useState } from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { CurrencyIcon, LockIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop } from "react-dnd";

import Modal from '../modal/modal';
import OrderDetails from '../order-details';
import IngridientDetails from '../ingredient-details';
import DraggableSortableIngredient from './draggableSortableIngredient';

import {
  SET_BUN,
} from '../../services/actions/burgerConstructor';
import {
  APPEND_ITEM,
} from '../../services/actions/burgerIngredients';
import { makeOrder } from '../../services/actions/orderDetails';
import { SET_ITEM_DETAILS, CLOSE_ITEM_DETAILS } from '../../services/actions/ingredientDetails';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const [showOrder, setShowOrder] = useState(false);

  const currentIngridient = useSelector(store => store.ingredientDetails.item);

  const setCurrentIngridient = (item) => {
    dispatch({
      type: SET_ITEM_DETAILS,
      item,
    })
  }

  const { bun, mains } = useSelector(store => store.burgerConstructor);

  const setBun = (item) => {
    dispatch({
      type: SET_BUN,
      bun: item,
    });
  };

  const appendItem = (item) => {
    dispatch({
      type: APPEND_ITEM,
      item: item,
    });
  }

  const handleDrop = item => {
    if (item.type === 'bun') {
      setBun(item);
    } else {
      appendItem(item);
    }
  }

  const [, dropTarget] = useDrop({
      accept: "ingredient",
      drop(item) {
        handleDrop(item);
      },
  });

  const handleOrder = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(makeOrder([bun, ...mains]));
    setShowOrder(true);
  }

  const mainsElements = mains.map(element => (
    <DraggableSortableIngredient setCurrentIngridient={setCurrentIngridient} element={element} key={element.id} />
  ));



  return (
    <section className={`${style.wrapper} mt-25 ml-10`}>
      <ul className={`${style.list} pl-4 pr-4`} ref={dropTarget}>
        {bun && <li className={`${style.item} ${style['item-top']} ml-8 pt-4 pr-8 pb-4 pl-6`} onClick={() => setCurrentIngridient(bun)}>
          <img className="" src={bun.image} alt='bun' width="80" height="40"/>
          <div className={`ml-5 text text_type_main-default ${style.name}`}>{bun.name} (верх)</div>
          <div className={`ml-5 ${style.price}`}><div className="pr-2 text text_type_digits-default">{bun.price}</div><CurrencyIcon type="primary" /></div>
          <div className={`ml-5 ${style.price}`}><LockIcon type="secondary" /></div>
        </li>}
        {mainsElements}
        {bun && <li className={`${style.item} ${style['item-bot']} mt-4 ml-8 pt-4 pr-8 pb-4 pl-6`} onClick={() => setCurrentIngridient(bun)}>
          <img className="" src={bun.image} alt='bun' width="80" height="40"/>
          <div className={`ml-5 text text_type_main-default ${style.name}`}>{bun.name} (низ)</div>
          <div className={`ml-5 ${style.price}`}><div className="pr-2 text text_type_digits-default">{bun.price}</div><CurrencyIcon type="primary" /></div>
          <div className={`ml-5 ${style.price}`}><LockIcon type="secondary" /></div>
        </li>}
      </ul>
      <div className={`${style.submit_row} mt-10 pr-4`}>
        <div className={`${style.total_price} text text_type_main-large mr-10`}>
          <div>{[bun || {price: 0}, ...mains].reduce((acc, elem) => acc + elem.price, 0)}</div>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" className="text text_type_main-default" onClick={handleOrder}>
          Оформить заказ
        </Button>
      </div>
      {showOrder && (
        <Modal onClose={() => setShowOrder(false)}>
          <OrderDetails />
        </Modal>
      )}
      {currentIngridient && (
        <Modal onClose={() => setCurrentIngridient(null)} title={"Детали ингредиента"}>
          <IngridientDetails {...currentIngridient} />
        </Modal>
      )}
    </section>
  )
}

BurgerConstructor.propTypes = {
  bun: PropTypes.shape({
    "id": PropTypes.string,
    "_id": PropTypes.string,
    "name": PropTypes.string,
    "type": PropTypes.string,
    "proteins": PropTypes.number,
    "fat": PropTypes.number,
    "carbohydrates": PropTypes.number,
    "calories": PropTypes.number,
    "price": PropTypes.number,
    "image": PropTypes.string,
    "image_mobile": PropTypes.string,
    "image_large": PropTypes.string,
    "__v": PropTypes.number,
  }),
  mains: PropTypes.arrayOf(PropTypes.shape({
    "id": PropTypes.string,
    "_id": PropTypes.string,
    "name": PropTypes.string,
    "type": PropTypes.string,
    "proteins": PropTypes.number,
    "fat": PropTypes.number,
    "carbohydrates": PropTypes.number,
    "calories": PropTypes.number,
    "price": PropTypes.number,
    "image": PropTypes.string,
    "image_mobile": PropTypes.string,
    "image_large": PropTypes.string,
    "__v": PropTypes.number,
  })).isRequired
};

export default BurgerConstructor;