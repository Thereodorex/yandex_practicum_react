import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
// import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

const LoginLink = ({ text, linkText, to }) => {
  return (
    <div className={`${styles.wrapper} text text_type_main-default`}>
      <div className="text text_type_main-default text_color_inactive">
        {text + ' '}
        <Link className={`text text_type_main-default ${styles.link}`} to={to}>{linkText}</Link>
      </div>
    </div>
  )
}

export default LoginLink;