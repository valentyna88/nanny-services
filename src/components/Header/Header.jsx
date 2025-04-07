import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import MobileMenu from '../MobileMenu/MobileMenu';
import Navigation from '../Navigation/Navigation';
import AuthBtn from '../AuthBtn/AuthBtn';
import css from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={clsx(css.header, {
        [css.homeHeader]: isHomePage,
      })}
    >
      <div className={css.mobileHeader}>
        <Link to="/" className={css.logo}>
          Nanny.Services
        </Link>
        <button className={css.hamburger} type="button" onClick={toggleMenu}>
          <RxHamburgerMenu />
        </button>
      </div>

      <div className={css.wrapper}>
        <Link to="/" className={css.logo}>
          Nanny.Services
        </Link>
        <Navigation isLoggedIn={isLoggedIn} closeMenu={closeMenu} />
        <AuthBtn isLoggedIn={isLoggedIn} user={user} />
      </div>

      {menuOpen && <MobileMenu closeMenu={closeMenu} />}
    </header>
  );
};

export default Header;
