import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/slice';
import { logoutUser } from '../../redux/auth/operations';
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
        <span className={css.userName}>Hi, {user?.name || 'User'}</span>
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
        onClick={() => dispatch(openModal('login'))}
      >
        Log In
      </Button>
      <Button
        type="button"
        variant="filled"
        onClick={() => dispatch(openModal('register'))}
      >
        Registration
      </Button>
    </div>
  );
};

export default AuthBtn;
