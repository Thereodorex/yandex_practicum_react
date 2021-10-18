import React from 'react';
import styles from './style.module.css';
import { useState } from 'react';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.container} pb-4 pt-4 text text_type_main-default`}>
        <div className={`p5 ${styles.button}`}><BurgerIcon type="primary" /><div className="ml-2">Конструктор</div></div>
        <div className={`ml-2 p5 ${styles.button} text_color_inactive`}><ListIcon type="secondary" /><div className="ml-2">Лента заказов</div></div>
        <div className={`${styles.logo}`}><Logo /></div>
        <div className={`p5 ${styles.button} text_color_inactive`}><ProfileIcon type="secondary" /><div className="ml-2">Личный кабинет</div></div>
      </div>
    </div>
  )
}

export default AppHeader;