import { useDispatch, useSelector } from 'react-redux';
import { fetchNannies } from '../../redux/nannies/operations';
import { incrementPage } from '../../redux/nannies/slice';
import {
  selectError,
  selectHasMore,
  selectIsLoading,
  selectLastKey,
  selectPage,
  selectSortBy,
} from '../../redux/nannies/selectors';
import { selectFavorites } from '../../redux/favorites/selectors';
import NannyList from '../../components/NannyList/NannyList';
import Filter from '../../components/Filter/Filter';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import Loader from '../../components/Loader/Loader';
import css from './FavoritesPage.module.css';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const lastKey = useSelector(selectLastKey);
  const page = useSelector(selectPage);
  const hasMore = useSelector(selectHasMore);
  const sortBy = useSelector(selectSortBy);

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
      {favorites.length === 0 ? (
        <p className={css.noResults}>You have no favorite nannies yet.</p>
      ) : (
        <NannyList nannies={favorites} />
      )}
      <div className={css.btnWrapper}>
        {hasMore && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      </div>
      {isLoading && <Loader loading={isLoading} />}
      {error && <p>Error: {error}</p>}
    </section>
  );
};

export default Favorites;
