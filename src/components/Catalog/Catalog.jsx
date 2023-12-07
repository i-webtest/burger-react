import { useDispatch, useSelector } from 'react-redux';
import { CatalogProduct } from '../CatalogProduct/CatalogProduct';
import { Container } from '../Container/Container';
import { Order } from '../Order/Order';
import s from './Catalog.module.css';
import { useEffect } from 'react';
import { productRequestAsync } from '../../store/product/productSlice';

export const Catalog = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { category, activeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={s.catalog}>
      <Container className={s.catalog__container}>
        <Order />
        <div className={s.catalog__wrapper}>
          <h2 className={s.catalog__title}>{category[activeCategory]?.rus}</h2>

          <div className={s.catalog__wrap_list}>
            <ul className={s.catalog__list}>
              {products.map((item) => (
                <li key={item.id} className={s.catalog__item}>
                  <CatalogProduct item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
