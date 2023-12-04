import s from './CatalogProduct.module.css';

export const CatalogProduct = ({ title }) => {
  return (
    <article className={s.product}>
      <img src='img/photo-5.jpg' alt={title} className={s.product__image} />

      <p className={s.product__price}>
        689<span className='currency'>₽</span>
      </p>

      <h3 className={s.product__title}>
        <button className={s.product__detail}>{title}</button>
      </h3>

      <p className={s.product__weight}>520г</p>

      <button className={s.product__add} type='button'>
        Добавить
      </button>
    </article>
  );
};
