import { Container } from '../Container/Container';
import s from './Navigation.module.css';
import cn from 'classnames';

export const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <Container className={s.navigation__container}>
        <ul className={s.navigation__list}>
          <li className={s.navigation__item}>
            <button className={cn(s.navigation__button, s.navigation__button_burger, s.navigation__button_active)}>
              Бургеры
            </button>
          </li>
          <li className={s.navigation__item}>
            <button className={cn(s.navigation__button, s.navigation__button_snack)}>Закуски</button>
          </li>
          <li className={s.navigation__item}>
            <button className={cn(s.navigation__button, s.navigation__button_hotdog)}>Хот-доги</button>
          </li>
          <li className={s.navigation__item}>
            <button className={cn(s.navigation__button, s.navigation__button_combo)}>Комбо</button>
          </li>
          <li className={s.navigation__item}>
            <button className={cn(s.navigation__button, s.navigation__button_shawarma)}>Шаурма</button>
          </li>
          <li className={s.navigation__item}>
            <button className={cn(s.navigation__button, s.navigation__button_pizza)}>Пицца</button>
          </li>
          <li className={s.navigation__item}>
            <button className={cn(s.navigation__button, s.navigation__button_wok)}>Вок</button>
          </li>
          <li className={s.navigation__item}>
            <button className={cn(s.navigation__button, s.navigation__button_dessert)}>Десерты</button>
          </li>
          <li className={s.navigation__item}>
            <button className={cn(s.navigation__button, s.navigation__button_sauce)}>Соусы</button>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
