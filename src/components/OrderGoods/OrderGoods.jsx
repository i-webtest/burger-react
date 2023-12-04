import { Count } from '../Count/Count';
import s from './OrderGoods.module.css';

export const OrderGoods = ({ item }) => {
  return (
    <li className={s.order__item}>
      <img className={s.order__image} src='img/burger_1.jpg' alt={item} />

      <div className={s.goods}>
        <h3 className={s.goods__title}>{item}</h3>

        <p className={s.goods__weight}>512г</p>

        <p className={s.goods__price}>
          1279
          <span className='currency'>₽</span>
        </p>
      </div>

      <Count count={1} />
    </li>
  );
};
