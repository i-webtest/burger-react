import s from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { Container } from '../Container/Container';

export const Header = () => (
  <header className={s.header}>
    <Container>
      <div className={s.header__container}>
        <img className={s.header__logo} src={logo} alt='Логотип YourMeal' />

        <div className={s.header__wrapper}>
          <h1 className={s.header__title}>
            <span>Только самые</span> <span className={s.header__red}>сочные бургеры!</span>
          </h1>

          <p className={s.header__appeal}>Бесплатная доставка от 599₽</p>
        </div>
      </div>
    </Container>
  </header>
);
