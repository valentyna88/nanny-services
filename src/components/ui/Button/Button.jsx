import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ children, variant, type = 'button', onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(css.btn, css[variant])}
    >
      {children}
    </button>
  );
};

export default Button;
