import React from 'react';
import style from './styles.module.css';

import pathDoneImg from '../../images/done.png';

const OrderDetails = () => {
  return (
    <section className={`${style.wrapper} p-4`}>
      <div className={`text text_type_digits-large ${style['cosmic-text']}`} >034536</div>
      <div className="text text_type_main-large mt-8">идентификатор заказа</div>
      <img src={pathDoneImg} alt="done" width="120" height="120" className="mt-15" />
      <div className="text text_type_main-default mt-15">Ваш заказ начали готовить</div>
      <div className="text text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</div>
    </section>
  )
}

OrderDetails.propTypes = {
};

export default OrderDetails;