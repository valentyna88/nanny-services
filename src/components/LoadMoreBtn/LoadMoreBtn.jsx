import Button from '../ui/Button/Button';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button type="button" variant="filled" onClick={onClick}>
      Load more
    </Button>
  );
};

export default LoadMoreBtn;
