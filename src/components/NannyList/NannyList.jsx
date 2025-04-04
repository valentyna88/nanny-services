import NannyCard from '../NannyCard/NannyCard';
import css from './NannyList.module.css';

const NannyList = ({ nannies }) => {
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
