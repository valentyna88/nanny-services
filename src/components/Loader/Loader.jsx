import { PulseLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <PulseLoader color="#39665d" speedMultiplier={0.5} className={css.loader} />
  );
};

export default Loader;
