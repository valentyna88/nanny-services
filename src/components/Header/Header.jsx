import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import AuthBtn from '../AuthBtn/AuthBtn';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Link to="/" className={css.logo}>
          Nanny.Services
        </Link>
        <Navigation />
        <AuthBtn />
      </div>
    </header>
  );
};

export default Header;
