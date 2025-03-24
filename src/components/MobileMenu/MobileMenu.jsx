import { MdClose } from 'react-icons/md';
import Navigation from '../Navigation/Navigation';
import AuthBtn from '../AuthBtn/AuthBtn';
import css from './MobileMenu.module.css';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className={css.menu}>
      <button className={css.closeButton} type="button" onClick={closeMenu}>
        <MdClose />
      </button>
      <Navigation closeMenu={closeMenu} />
      <AuthBtn />
    </div>
  );
};

export default MobileMenu;
