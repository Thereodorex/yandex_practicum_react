import React from 'react';
import { useState,  } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = useState('one');

  const createElementsByType = type => {
    return data.map(element => {
      if (element.type !== type) {
        return null;
      }
      return (
        <li key={element._id} className={`${style.item} text text_type_main-default`}>
          <Counter count={1} size="default" />
          <img src={element.image} alt={`${element.name}`} />
          <div className={`mt-1 mb-1 ${style.price_row}`}><div className="pr-2 text text_type_digits-default">{element.price}</div><CurrencyIcon type="primary" /></div>
          <div>{element.name}</div>
        </li>
      );
    })
  }

  return (
    <section className={`${style.wrapper} mt-10`}>
      <header className={`text text_type_main-large`}>Соберите бургер</header>
      <div className={`${style.tabs_wrapper} mt-5`}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${style.ingridients_wrapper} mt-10`}>
        <section>
          <h3 className={`text text_type_main-medium`}>Булки</h3>
          <ul className={`${style.list} pl-4 pr-4 pt-6`}>{createElementsByType('bun')}</ul>
        </section>
        <section className="mt-10">
          <h3 className={`text text_type_main-medium`}>Соусы</h3>
          <ul className={`${style.list} pl-4 pr-4 pt-6`}>{createElementsByType('sauce')}</ul>
        </section>
        <section className="mt-10">
          <h3 className={`text text_type_main-medium`}>Начинки</h3>
          <ul className={`${style.list} pl-4 pr-4 pt-6`}>{createElementsByType('main')}</ul>
        </section>
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
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

export default BurgerIngredients;