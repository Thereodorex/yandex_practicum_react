import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.module.css';

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

IngredientDetails.propTypes = {
  "_id": PropTypes.string,
  "name": PropTypes.string.isRequired,
  "type": PropTypes.string,
  "proteins": PropTypes.number.isRequired,
  "fat": PropTypes.number.isRequired,
  "carbohydrates": PropTypes.number.isRequired,
  "calories": PropTypes.number.isRequired,
  "price": PropTypes.number,
  "image": PropTypes.string.isRequired,
  "image_mobile": PropTypes.string,
  "image_large": PropTypes.string.isRequired,
  "__v": PropTypes.number,
};

export default IngredientDetails;