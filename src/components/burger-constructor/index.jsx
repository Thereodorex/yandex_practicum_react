import React, { useState } from 'react';
import style from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CurrencyIcon, LockIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop } from "react-dnd";

import Modal from '../modal/modal';
import OrderDetails from '../order-details';
import DraggableSortableIngredient from './draggableSortableIngredient';

import {
  SET_BUN,
} from '../../services/actions/burgerConstructor';
import {
  APPEND_ITEM,
} from '../../services/actions/burgerIngredients';
import { makeOrder } from '../../services/actions/orderDetails';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const [showOrder, setShowOrder] = useState(false);

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
    <DraggableSortableIngredient element={element} key={element.id} />
  ));


  return (
    <section className={`${style.wrapper} mt-25 ml-10`} ref={dropTarget}>
      <ul className={`${style.list} pl-4 pr-4`}>
        {bun && <li className={`${style.item} ${style['item-top']} ml-8 pt-4 pr-8 pb-4 pl-6`}>
          <img className="" src={bun.image} alt='bun' width="80" height="40"/>
          <div className={`ml-5 text text_type_main-default ${style.name}`}>{bun.name} (верх)</div>
          <div className={`ml-5 ${style.price}`}><div className="pr-2 text text_type_digits-default">{bun.price}</div><CurrencyIcon type="primary" /></div>
          <div className={`ml-5 ${style.price}`}><LockIcon type="secondary" /></div>
        </li>}
        {mainsElements}
        {bun && <li className={`${style.item} ${style['item-bot']} mt-4 ml-8 pt-4 pr-8 pb-4 pl-6`}>
          <img className="" src={bun.image} alt='bun' width="80" height="40"/>
          <div className={`ml-5 text text_type_main-default ${style.name}`}>{bun.name} (низ)</div>
          <div className={`ml-5 ${style.price}`}><div className="pr-2 text text_type_digits-default">{bun.price}</div><CurrencyIcon type="primary" /></div>
          <div className={`ml-5 ${style.price}`}><LockIcon type="secondary" /></div>
        </li>}
      </ul>
      <div className={`${style.submit_row} mt-10 pr-4`}>
        <div className={`${style.total_price} text text_type_main-large mr-10`}>
          <div>{[bun || {price: 0}, ...mains].reduce((acc, elem) => acc + elem.price + (elem.type === 'bun' ? elem.price : 0), 0)}</div>
          <CurrencyIcon type="primary" />
        </div>
        { bun === null
          ? <span>Добавьте булку</span>
          : <Button type="primary" size="large" className="text text_type_main-default" onClick={handleOrder}>
            Оформить заказ
          </Button>
        }
      </div>
      {showOrder && (
        <Modal onClose={() => setShowOrder(false)}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  )
}

export default BurgerConstructor;