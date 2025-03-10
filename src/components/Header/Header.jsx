import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <header className={css.header}>
      <Link to="/" className={clsx(css.link, css.logo)}>
        Nanny.Services
      </Link>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/nannies" className={buildLinkClass}>
          Nannies
        </NavLink>
      </nav>
      <div>
        <Link to="/login" className={css.login}>
          Log In
        </Link>
        <Link to="/register" className={css.register}>
          Registration
        </Link>
      </div>
    </header>
  );
};

export default Header;
