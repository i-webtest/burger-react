import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Container/Container';
import s from './Navigation.module.css';
import cn from 'classnames';
import { categoryRequestAsync, changeCategory } from '../../store/category/categorySlice';
import { useEffect } from 'react';
import { API_URI } from '../../const';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync('max'));
  }, []);

  return (
    <nav className={s.navigation}>
      <Container className={s.navigation__container}>
        <ul className={s.navigation__list}>
          {category.map((item, i) => (
            <li key={item.title} className={s.navigation__item}>
              <button
                className={cn(s.navigation__button, activeCategory === i ? s.navigation__button_active : '')}
                style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: i }));
                }}
              >
                {item.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
