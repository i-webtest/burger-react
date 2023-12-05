import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Container/Container';
import s from './Navigation.module.css';
import cn from 'classnames';
import { changeCategory } from '../../store/category/categorySlice';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <nav className={s.navigation}>
      <Container className={s.navigation__container}>
        <ul className={s.navigation__list}>
          {category.map((item, i) => (
            <li key={i} className={s.navigation__item}>
              <button
                className={cn(s.navigation__button, activeCategory === i ? s.navigation__button_active : '')}
                style={{ backgroundImage: `url(${item.image})` }}
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
