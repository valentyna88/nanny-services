import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
