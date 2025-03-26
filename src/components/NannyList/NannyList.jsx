import NannyCard from '../NannyCard/NannyCard';
import css from './NannyList.module.css';

const NannyList = ({ nannies }) => {
  if (!nannies) {
    return <p>No nannies found</p>;
  }

  return (
    <ul className={css.list}>
      {nannies.map(nanny => (
        <li key={nanny.id}>
          <NannyCard nanny={nanny} />
        </li>
      ))}
    </ul>
  );
};

export default NannyList;
