import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import Container from './ui/Container/Container';

const Layout = () => {
  return (
    <>
      <Header />{' '}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            padding: '16px',
            marginTop: '80px',
          },
        }}
      />
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
