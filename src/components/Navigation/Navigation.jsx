import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = ({ closeMenu }) => {
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
    </nav>
  );
};

export default Navigation;
