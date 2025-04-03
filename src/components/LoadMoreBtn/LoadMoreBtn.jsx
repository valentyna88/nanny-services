import Button from '../ui/Button/Button';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.btnWrapper}>
      <Button type="button" variant="filled" onClick={onClick}>
        Load more
      </Button>
    </div>
  );
};

export default LoadMoreBtn;
