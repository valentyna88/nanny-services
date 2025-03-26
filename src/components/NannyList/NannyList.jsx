import NannyCard from '../NannyCard/NannyCard';

const NannyList = ({ nannies }) => {
  if (!nannies) {
    return <p>No nannies found</p>;
  }

  return (
    <ul>
      {nannies.map(nanny => (
        <li key={nanny.id}>
          <NannyCard nanny={nanny} />
        </li>
      ))}
    </ul>
  );
};

export default NannyList;
