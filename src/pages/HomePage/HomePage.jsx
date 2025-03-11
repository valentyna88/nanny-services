import { NavLink } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.leftBlock}>
        <Title variant="main">Make Life Easier for the Family:</Title>
        <Text variant="home">Find Babysitters Online for All Occasions</Text>
        <Button type="button" variant="started" to="/nannies" as={NavLink}>
          Get started
        </Button>
      </div>
      <div className={css.rightBlock}>
        <div className={css.checkBlock}>
          <Text variant="light">Experienced nannies</Text>
          <Text variant="check">15,000</Text>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
