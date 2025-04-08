import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/slice';
import { logoutUser } from '../../redux/auth/operations';
import sprite from '../../assets/sprite.svg';
import Button from '../ui/Button/Button';
import css from './AuthBtn.module.css';

const AuthBtn = ({ isLoggedIn, user }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (isLoggedIn) {
    return (
      <div className={css.userWrapper}>
        <div className={css.user}>
          <svg width={40} height={40}>
            <use xlinkHref={`${sprite}#icon-user`}></use>
          </svg>
          <div className={css.userName}>{user?.name || 'User'}</div>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    );
  }

  return (
    <div className={css.authNav}>
      <Button
        type="button"
        variant="outline"
        onClick={() => dispatch(openModal({ modalType: 'login' }))}
      >
        Log In
      </Button>
      <Button
        type="button"
        variant="filled"
        onClick={() => dispatch(openModal({ modalType: 'register' }))}
      >
        Registration
      </Button>
    </div>
  );
};

export default AuthBtn;
