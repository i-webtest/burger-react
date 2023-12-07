import { API_URI } from '../../const';
import s from './CatalogProduct.module.css';

export const CatalogProduct = ({ item }) => {
  console.log('item: ', item);
  return (
    <article className={s.product}>
      <img src={`${API_URI}/${item.image}`} alt={item.title} className={s.product__image} />

      <p className={s.product__price}>
        {item.price}
        <span className='currency'>₽</span>
      </p>

      <h3 className={s.product__title}>
        <button className={s.product__detail}>{item.title}</button>
      </h3>

      <p className={s.product__weight}>{item.weight}г</p>

      <button className={s.product__add} type='button'>
        Добавить
      </button>
    </article>
  );
};
