import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.module.css';

import { ingredientType } from '../../utils/types';

const IngredientDetails = ({ image_large, name, calories, proteins, fat, carbohydrates }) => {
  return (
    <section className={`${style.wrapper} p-4`}>
      <img src={image_large} alt={name} width="480" height="240" />
      <div className="text text_type_main-medium mt-4">{name}</div>
      <ul className={`${style.calories_wrapper} text text_type_main-default text_color_inactive mt-4`}>
        <li className={`${style.calories_item}`}>
          <div>Калории,ккал</div>
          <div className="text text_type_digits-default">{calories}</div>
        </li>
        <li className={`${style.calories_item} ml-5`}>
          <div>Белки, г</div>
          <div className="text text_type_digits-default">{proteins}</div>
        </li>
        <li className={`${style.calories_item} ml-5`}>
          <div>Жиры, г</div>
          <div className="text text_type_digits-default">{fat}</div>
        </li>
        <li className={`${style.calories_item} ml-5`}>
          <div>Углеводы, г</div>
          <div className="text text_type_digits-default">{carbohydrates}</div>
        </li>
      </ul>
    </section>
  )
}

IngredientDetails.propTypes = ingredientType;

export default IngredientDetails;