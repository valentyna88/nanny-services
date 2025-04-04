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
  selectSortBy,
} from '../../redux/nannies/selectors';
import NannyList from '../../components/NannyList/NannyList';
import Filter from '../../components/Filter/Filter';
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
  const sortBy = useSelector(selectSortBy);

  useEffect(() => {
    dispatch(resetNannies());
    dispatch(fetchNannies({ lastKey: null, page: 1, sortBy }));
  }, [dispatch]);

  const handleLoadMore = async () => {
    dispatch(incrementPage());
    await dispatch(fetchNannies({ lastKey, page: page + 1, sortBy }));

    window.scrollBy({
      top: window.innerHeight / 2,
      behavior: 'smooth',
    });
  };

  return (
    <section>
      <Filter />
      {!isLoading && nannies.length === 0 ? (
        <p className={css.noResults}>
          No nannies found for the selected filter.
        </p>
      ) : (
        <NannyList nannies={nannies} />
      )}
      <div className={css.btnWrapper}>
        {hasMore && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      </div>
      {isLoading && <Loader loading={isLoading} />}
      {error && <p>Error: {error}</p>}
    </section>
  );
};

export default NanniesPage;
