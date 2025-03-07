import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container/Container';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <h1 className={css.title}>404</h1>
        <p className={css.text}>Oops! Page not found.</p>
        <Link to="/" className={css.link}>
          Go to Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;
