import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({
  children,
  variant,
  type = 'button',
  onClick,
  as: Component = 'button',
  to,
  className,
}) => {
  return (
    <Component
      type={type}
      onClick={onClick}
      className={clsx(css.btn, css[variant], className)}
      to={to}
    >
      {children}
    </Component>
  );
};

export default Button;
