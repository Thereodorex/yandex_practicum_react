import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from "react-dnd";

import { ingredientType } from '../../utils/types'

const DraggableIngredient = ({ element, onClick }) => {
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: element,
  });

  return (
    <li className={`${style.item} text text_type_main-default`} ref={dragRef} onClick={onClick}>
      {element.count ? <Counter count={element.count} size="default" /> : null}
      <img src={element.image} alt={`${element.name}`} />
      <div className={`mt-1 mb-1 ${style.price_row}`}><div className="pr-2 text text_type_digits-default">{element.price}</div><CurrencyIcon type="primary" /></div>
      <div>{element.name}</div>
    </li>
  );
}


DraggableIngredient.propTypes = {
  element: ingredientType.isRequired,
  onClick: PropTypes.func,
};

export default DraggableIngredient;