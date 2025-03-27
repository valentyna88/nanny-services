import Text from '../ui/Text/Text';
import Title from '../ui/Title/Title';
import sprite from '../../assets/sprite.svg';
import css from './NannyCard.module.css';

const calculateAge = birthday => {
  if (!birthday) return 'N/A'; // Якщо дати народження немає

  const birthDate = new Date(birthday);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Якщо день народження ще не настав у цьому році — віднімаємо 1 рік
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

const NannyCard = ({ nanny }) => {
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
            <Text variant="bold">{nanny.location}</Text>
            <Text variant="bold">Rating: {nanny.rating}</Text>
            <Text variant="bold">Price / 1 hour: {nanny.price_per_hour}$</Text>
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
      </div>
    </div>
  );
};

export default NannyCard;
