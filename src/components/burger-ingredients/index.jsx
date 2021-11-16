import React, { useEffect, useRef } from 'react';
import { useState,  } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import { Tab} from '@ya.praktikum/react-developer-burger-ui-components';

import DraggebleIngredient from './draggableIngredient';

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = useState('one');

  const wrapperRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const createElementsByType = type => {
    return data.map(element => {
      if (element.type !== type) {
        return null;
      }
      return (
        <DraggebleIngredient key={element._id} element={element} />
      );
    })
  }

  const handleTabClick = ref => () => {
    ref.current.scrollIntoView();
  }

  useEffect(() => {
    const onScroll = () => {
      if (thirdRef.current.getBoundingClientRect().y <= wrapperRef.current.getBoundingClientRect().y) {
        setCurrent('three');
      } else if (secondRef.current.getBoundingClientRect().y <= wrapperRef.current.getBoundingClientRect().y) {
        setCurrent('two');
      } else if (firstRef.current.getBoundingClientRect().y <= wrapperRef.current.getBoundingClientRect().y) {
        setCurrent('one');
      }
    };
    wrapperRef.current.addEventListener("scroll", onScroll);
    return () => wrapperRef.current.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <section className={`${style.wrapper} mt-10`}>
      <header className={`text text_type_main-large`}>Соберите бургер</header>
      <div className={`${style.tabs_wrapper} mt-5`}>
        <Tab value="one" active={current === 'one'} onClick={handleTabClick(firstRef)}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={handleTabClick(secondRef)}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={handleTabClick(thirdRef)}>
          Начинки
        </Tab>
      </div>
      <div className={`${style.ingridients_wrapper} mt-10`} ref={wrapperRef}>
        <section ref={firstRef}>
          <h3 className={`text text_type_main-medium`}>Булки</h3>
          <ul className={`${style.list} pl-4 pr-4 pt-6`}>{createElementsByType('bun')}</ul>
        </section>
        <section className="mt-10" ref={secondRef}>
          <h3 className={`text text_type_main-medium`}>Соусы</h3>
          <ul className={`${style.list} pl-4 pr-4 pt-6`}>{createElementsByType('sauce')}</ul>
        </section>
        <section className="mt-10" ref={thirdRef}>
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