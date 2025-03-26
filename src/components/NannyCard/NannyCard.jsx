import Text from '../ui/Text/Text';
import Title from '../ui/Title/Title';

const NannyCard = ({ nanny }) => {
  return (
    <>
      <img src={nanny.avatar_url} alt={nanny.name} />
      <div className="nanny-info">
        <div>
          <Text variant="nanny">Nanny</Text>
          <Title variant="name">{nanny.name}</Title>
        </div>
        <div>
          <Text variant="bold">{nanny.location}</Text>
          <Text variant="bold">Rating: {nanny.rating}</Text>
          <Text variant="bold">Price / 1 hour: {nanny.price_per_hour}$</Text>
        </div>
        <div>
          <Text variant="nanny">Age: {nanny.age || 'N/A'}</Text>
          <Text variant="nanny">Experience: {nanny.experience} лет</Text>
          <Text variant="nanny">Kids Age: {nanny.kids_age}</Text>
          <Text variant="nanny">Characters: {nanny.characters.join(', ')}</Text>
          <Text variant="nanny">Education: {nanny.education}</Text>
          <Text variant="light">{nanny.about}</Text>
        </div>
      </div>
    </>
  );
};

export default NannyCard;
