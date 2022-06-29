import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navList__item}>
          <NavLink to="/" className={s.navList__link}>
            Converter
          </NavLink>
        </li>
        <li className={s.navList__item}>
          <NavLink to="/rates" className={s.navList__link}>
            Rates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
