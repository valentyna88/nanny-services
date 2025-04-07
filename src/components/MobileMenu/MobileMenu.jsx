import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import AuthBtn from '../AuthBtn/AuthBtn';
import css from './MobileMenu.module.css';

const MobileMenu = ({ closeMenu }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={css.menu}>
      <button className={css.closeButton} type="button" onClick={closeMenu}>
        <MdClose />
      </button>
      <Navigation isLoggedIn={isLoggedIn} closeMenu={closeMenu} />
      <AuthBtn isLoggedIn={isLoggedIn} user={user} />
    </div>
  );
};

export default MobileMenu;
