import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import clsx from 'clsx';
import Button from '../ui/Button/Button';

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
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
      <div className={css.authButtons}>
        <Button type="button" variant="outline" to="/login" as={NavLink}>
          Log In
        </Button>
        <Button type="button" variant="filled" to="/register" as={NavLink}>
          Registration
        </Button>
      </div>
    </header>
  );
};

export default Header;
