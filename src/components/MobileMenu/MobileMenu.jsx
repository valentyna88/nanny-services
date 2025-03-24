import { MdClose } from 'react-icons/md';
import Navigation from '../Navigation/Navigation';
import AuthBtn from '../AuthBtn/AuthBtn';
import css from './MobileMenu.module.css';
import clsx from 'clsx';

const MobileMenu = ({ closeMenu }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

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
