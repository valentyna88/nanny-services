import { NavLink } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import Text from '../../components/ui/Text/Text';
import Title from '../../components/ui/Title/Title';
import sprite from '../../assets/sprite.svg';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.leftBlock}>
        <Title variant="main" className={css.title}>
          Make Life Easier for the Family:
        </Title>
        <Text variant="home" className={css.text}>
          Find Babysitters Online for All Occasions
        </Text>
        <Button
          type="button"
          variant="started"
          to="/nannies"
          as={NavLink}
          className={css.btn}
        >
          Get started
          <svg width={15} height={17} className={css.icon}>
            <use xlinkHref={`${sprite}#icon-Arrow16`}></use>
          </svg>
        </Button>
      </div>
      <div className={css.rightBlock}>
        <div className={css.checkBlock}>
          <div className={css.checkIcon}>
            <svg width={20} height={16}>
              <use xlinkHref={`${sprite}#icon-check`}></use>
            </svg>
          </div>
          <div className={css.checkText}>
            <Text variant="light">Experienced nannies</Text>
            <Text variant="check">15,000</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
