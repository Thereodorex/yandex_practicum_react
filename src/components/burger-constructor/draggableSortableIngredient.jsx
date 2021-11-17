import React, { useRef } from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CurrencyIcon, DeleteIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop, useDrag } from "react-dnd";

import { uniqueIngredientType } from '../../utils/types';

import {
  SWAP_ITEMS,
} from '../../services/actions/burgerConstructor';
import {
  DELETE_ITEM,
} from '../../services/actions/burgerIngredients';

const DraggableSortableElement = ({ element }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "constructor",
    hover(item, monitor) {
      if (!ref.current) {
          return;
      }
      const dragIndex = item.id;
      const hoverIndex = element.id;
      if (dragIndex === hoverIndex) {
          return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
      }

      dispatch({
        type: SWAP_ITEMS,
        firstItem: item,
        secondItem: element,
      })
  },
  });

  const [, drag] = useDrag({
    item: element,
    type: "constructor",
  });

  const deleteItem = (event, item) => {
    event.stopPropagation();
    dispatch({
      type: DELETE_ITEM,
      item: item,
    });
  }

  drag(drop(ref));

  return (
    <li className={`${style.item} mt-4 ml-8 pt-4 pr-8 pb-4 pl-6`} ref={ref}>
      <div className={`${style.drag}`}><DragIcon type="primary" /></div>
      <img className="" src={element.image} alt={element.name} width="80" height="40"/>
      <div className={`ml-5 text text_type_main-default ${style.name}`}>{element.name}</div>
      <div className={`ml-5 ${style.price}`}><div className="pr-2 text text_type_digits-default">{element.price}</div><CurrencyIcon type="primary" /></div>
      <div className={`ml-5 ${style.price}`} onClick={(e) => deleteItem(e, element)}><DeleteIcon type="primary" /></div>
    </li>
  );
}


DraggableSortableElement.propTypes = {
  element: uniqueIngredientType.isRequired,
};

export default DraggableSortableElement;