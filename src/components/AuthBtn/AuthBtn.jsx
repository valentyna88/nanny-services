import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/slice';
import { NavLink } from 'react-router-dom';
import Button from '../ui/Button/Button';
import css from './AuthBtn.module.css';

const AuthBtn = () => {
  const dispatch = useDispatch();

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
