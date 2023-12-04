import { CatalogProduct } from '../CatalogProduct/CatalogProduct';
import { Container } from '../Container/Container';
import { Order } from '../Order/Order';
import s from './Catalog.module.css';

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

export const Catalog = () => {
  return (
    <section className={s.catalog}>
      <Container className={s.catalog__container}>
        <Order />
        <div className={s.catalog__wrapper}>
          <h2 className={s.catalog__title}>Бургеры</h2>

          <div className={s.catalog__wrap_list}>
            <ul className={s.catalog__list}>
              {goodsList.map((item, index) => {
                return (
                  <li key={index} className={s.catalog__item}>
                    <CatalogProduct title={item.title} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
