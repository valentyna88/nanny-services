import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../redux/auth/operations';
import './App.module.css';
import Layout from '../Layout';
import PrivateRoute from '../PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NanniesPage = lazy(() => import('../../pages/NanniesPage/NanniesPage'));
const FavoritesPage = lazy(() =>
  import('../../pages/FavoritesPage/FavoritesPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        <Route
          path="/favorites"
          element={<PrivateRoute component={FavoritesPage} />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
