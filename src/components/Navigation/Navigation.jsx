import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = ({ isLoggedIn, closeMenu }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass} onClick={closeMenu}>
        Home
      </NavLink>
      <NavLink to="/nannies" className={buildLinkClass} onClick={closeMenu}>
        Nannies
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/favorites" className={buildLinkClass} onClick={closeMenu}>
          Favorites
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
