import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
import { openModal } from '../../redux/modal/slice';
import { toast } from 'react-hot-toast';
import { getAuth } from 'firebase/auth';
import Text from '../ui/Text/Text';
import Title from '../ui/Title/Title';
import Button from '../ui/Button/Button';
import sprite from '../../assets/sprite.svg';
import css from './NannyCard.module.css';

const calculateAge = birthday => {
  if (!birthday) return 'N/A';

  const birthDate = new Date(birthday);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

const NannyCard = ({ nanny }) => {
  const dispatch = useDispatch();

  const onAppointmentClick = () => {
    dispatch(openModal('appointment'));
  };

  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some(fav => fav.id === nanny.id);

  const handleFavoriteClick = () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      toast('Please log in to add a nanny to favorites', {
        icon: '🔒',
      });
      return;
    }

    if (isFavorite) {
      dispatch(removeFavorite(nanny.id));
      toast.success('Removed from favorites');
    } else {
      dispatch(addFavorite(nanny));
      toast.success('Added to favorites');
    }
  };

  const [showReviews, setShowReviews] = useState(false);

  return (
    <div className={css.nannyCard}>
      <div className={css.avatarWrapper}>
        <div className={css.relative}>
          <img className={css.avatar} src={nanny.avatar_url} alt={nanny.name} />
          <svg width={14} height={14} className={css.icon}>
            <use xlinkHref={`${sprite}#icon-point`}></use>
          </svg>
        </div>
      </div>

      <div className={css.nannyInfo}>
        <div className={css.nannyInfoWrapper}>
          <div className={css.name}>
            <Text variant="nanny">Nanny</Text>
            <Title variant="name">{nanny.name}</Title>
          </div>
          <div className={css.info}>
            <ul className={css.infoList}>
              <li className={css.infoItem}>
                <svg width={16} height={16} className={css.mapIcon}>
                  <use xlinkHref={`${sprite}#icon-map-pin`}></use>
                </svg>
                <Text variant="bold">{nanny.location}</Text>
              </li>
              <li className={css.infoItem}>
                <svg width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-Star-2`}></use>
                </svg>
                <Text variant="bold">Rating: {nanny.rating}</Text>
              </li>
              <li>
                <Text variant="bold">
                  Price / 1 hour:{' '}
                  <span className={css.price}>{nanny.price_per_hour}$</span>
                </Text>
              </li>
            </ul>
            <button
              type="button"
              className={css.favoriteButton}
              onClick={handleFavoriteClick}
              aria-label={
                isFavorite ? 'Remove from favorites' : 'Add to favorites'
              }
            >
              <svg width={26} height={26} className={css.heartIcon}>
                <use
                  xlinkHref={
                    isFavorite
                      ? `${sprite}#icon-heart-fill`
                      : `${sprite}#icon-heart`
                  }
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <ul className={css.descriptionList}>
          <li className={css.item}>
            Age:{' '}
            <span className={css.span}>{calculateAge(nanny.birthday)}</span>
          </li>
          <li className={css.item}>
            Experience: <span className={css.span}>{nanny.experience}</span>
          </li>
          <li className={css.item}>
            Kids Age: <span className={css.span}>{nanny.kids_age}</span>
          </li>
          <li className={css.item}>
            Characters:{' '}
            <span className={css.span}>{nanny.characters.join(', ')}</span>
          </li>
          <li className={css.item}>
            Education: <span className={css.span}>{nanny.education}</span>
          </li>
        </ul>
        <Text variant="light">{nanny.about}</Text>

        {!showReviews && (
          <button
            type="button"
            className={css.readMore}
            onClick={() => setShowReviews(true)}
          >
            Read more
          </button>
        )}

        {showReviews && (
          <div className={css.reviews}>
            <ul className={css.reviewsList}>
              {nanny.reviews && Object.keys(nanny.reviews).length > 0 ? (
                Object.entries(nanny.reviews).map(([reviewId, review]) => (
                  <li className={css.reviewItem} key={reviewId}>
                    <div className={css.reviewHeader}>
                      <div className={css.initial}>
                        {review.reviewer.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p>{review.reviewer}</p>
                        <p className={css.reviewRating}>
                          <svg width={16} height={16}>
                            <use xlinkHref={`${sprite}#icon-Star-2`}></use>
                          </svg>
                          {review.rating}
                        </p>
                      </div>
                    </div>
                    <p className={css.comment}>{review.comment}</p>
                  </li>
                ))
              ) : (
                <p>No reviews yet</p>
              )}
            </ul>
            <Button type="button" variant="filled" onClick={onAppointmentClick}>
              Make an appointment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NannyCard;
