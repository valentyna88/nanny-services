import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSortBy } from '../../redux/nannies/selectors';
import { selectFavorites } from '../../redux/favorites/selectors';
import NannyList from '../../components/NannyList/NannyList';
import Filter from '../../components/Filter/Filter';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import css from './FavoritesPage.module.css';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const sortBy = useSelector(selectSortBy);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredFavorites = [...favorites].sort((a, b) => {
    switch (sortBy) {
      case 'asc':
        return a.name.localeCompare(b.name);
      case 'desc':
        return b.name.localeCompare(a.name);
      case 'lt10':
        return a.price_per_hour - b.price_per_hour;
      case 'gt10':
        return b.price_per_hour - a.price_per_hour;
      case 'popular':
        return b.rating - a.rating;
      case 'notPopular':
        return a.rating - b.rating;
      case 'all':
      default:
        return 0;
    }
  });

  const paginatedFavorites = filteredFavorites.slice(
    0,
    currentPage * itemsPerPage
  );

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
    window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
  };

  return (
    <section>
      <Filter />
      {favorites.length === 0 ? (
        <p className={css.noResults}>You have no favorite nannies yet.</p>
      ) : (
        <NannyList nannies={paginatedFavorites} />
      )}
      <div className={css.btnWrapper}>
        {paginatedFavorites.length < filteredFavorites.length && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </div>
    </section>
  );
};

export default Favorites;
