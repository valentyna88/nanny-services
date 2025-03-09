import clsx from 'clsx';
import css from './Text.module.css';

const Text = ({ children, variant = 'default', className }) => {
  return <p className={clsx(css.text, css[variant], className)}>{children}</p>;
};

export default Text;
