import style from './style.module.css';
import PropTypes from 'prop-types';
import { CurrencyIcon, LockIcon, DeleteIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = ({bun, mains}) => {

  const mainsElements = mains.map(element => (
    <li key={element._id} className={`${style.item} mt-4 ml-8 pt-4 pr-8 pb-4 pl-6`}>
      <div className={`${style.drag}`}><DragIcon type="primary" /></div>
      <img className="" src={element.image} alt={element.name} width="80" height="40"/>
      <div className={`ml-5 text text_type_main-default ${style.name}`}>{element.name}</div>
      <div className={`ml-5 ${style.price}`}><div className="pr-2 text text_type_digits-default">{element.price}</div><CurrencyIcon type="primary" /></div>
      <div className={`ml-5 ${style.price}`}><DeleteIcon type="primary" /></div>
    </li>
  ))

  return (
    <section className={`${style.wrapper} mt-25 ml-10`}>
      <ul className={`${style.list} pl-4 pr-4`}>
        <li className={`${style.item} ${style['item-top']} ml-8 pt-4 pr-8 pb-4 pl-6`}>
          <img className="" src={bun.image} alt='bun' width="80" height="40"/>
          <div className={`ml-5 text text_type_main-default ${style.name}`}>{bun.name} (верх)</div>
          <div className={`ml-5 ${style.price}`}><div className="pr-2 text text_type_digits-default">{bun.price}</div><CurrencyIcon type="primary" /></div>
          <div className={`ml-5 ${style.price}`}><LockIcon type="secondary" /></div>
        </li>
        {mainsElements}
        <li className={`${style.item} ${style['item-bot']} mt-4 ml-8 pt-4 pr-8 pb-4 pl-6`}>
          <img className="" src={bun.image} alt='bun' width="80" height="40"/>
          <div className={`ml-5 text text_type_main-default ${style.name}`}>{bun.name} (низ)</div>
          <div className={`ml-5 ${style.price}`}><div className="pr-2 text text_type_digits-default">{bun.price}</div><CurrencyIcon type="primary" /></div>
          <div className={`ml-5 ${style.price}`}><LockIcon type="secondary" /></div>
        </li>
      </ul>
      <div className={`${style.submit_row} mt-10 pr-4`}>
        <div className={`${style.total_price} text text_type_main-large mr-10`}>
          <div>{[bun, ...mains].reduce((acc, elem) => acc + elem.price, 0)}</div>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" className="text text_type_main-default">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  bun: PropTypes.shape({
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
  }),
  mains: PropTypes.arrayOf(PropTypes.shape({
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

export default BurgerConstructor;