import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import Container from './ui/Container/Container';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
