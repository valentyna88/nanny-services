import { NavLink } from 'react-router-dom';
import Button from '../ui/Button/Button';
import css from './AuthBtn.module.css';

const AuthBtn = () => {
  return (
    <div className={css.authNav}>
      <Button type="button" variant="outline" to="/login" as={NavLink}>
        Log In
      </Button>
      <Button type="button" variant="filled" to="/register" as={NavLink}>
        Registration
      </Button>
    </div>
  );
};

export default AuthBtn;
