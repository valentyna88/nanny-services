import clsx from 'clsx';
import css from './Title.module.css';

const Title = ({ children, level = 'h1', variant, className }) => {
  const Tag = level;

  return (
    <Tag className={clsx(css.title, css[variant], className)}>{children}</Tag>
  );
};

export default Title;
