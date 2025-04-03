import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNannies } from '../../redux/nannies/operations';
import { resetNannies, incrementPage } from '../../redux/nannies/slice';
import {
  selectError,
  selectHasMore,
  selectIsLoading,
  selectLastKey,
  selectNannies,
  selectPage,
} from '../../redux/nannies/selectors';
import NannyList from '../../components/NannyList/NannyList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import Loader from '../../components/Loader/Loader';
import css from './NanniesPage.module.css';

const NanniesPage = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const lastKey = useSelector(selectLastKey);
  const page = useSelector(selectPage);
  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    dispatch(resetNannies());
    dispatch(fetchNannies({ lastKey: null, page: 1 }));
  }, [dispatch]);

  const handleLoadMore = async () => {
    dispatch(incrementPage());
    await dispatch(fetchNannies({ lastKey, page: page + 1 }));

    window.scrollBy({
      top: window.innerHeight / 2,
      behavior: 'smooth',
    });
  };

  return (
    <section>
      <NannyList nannies={nannies} />
      <div className={css.btnWrapper}>
        {hasMore && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      </div>
      {isLoading && <Loader loading={isLoading} />}
      {error && <p>Error: {error}</p>}
    </section>
  );
};

export default NanniesPage;
