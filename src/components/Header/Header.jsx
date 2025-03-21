import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import AuthBtn from '../AuthBtn/AuthBtn';
import css from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={clsx(css.header, {
        [css.homeHeader]: isHomePage,
      })}
    >
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
