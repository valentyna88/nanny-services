import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Button from '../ui/Button/Button';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Link to="/" className={css.logo}>
          Nanny.Services
        </Link>

        <Navigation />

        <div className={css.authNav}>
          <Button type="button" variant="outline" to="/login" as={NavLink}>
            Log In
          </Button>
          <Button type="button" variant="filled" to="/register" as={NavLink}>
            Registration
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
