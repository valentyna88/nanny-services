import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.module.css';
import Layout from '../Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NanniesPage = lazy(() => import('../../pages/NanniesPage/NanniesPage'));
const FavoritesPage = lazy(() =>
  import('../../pages/FavoritesPage/FavoritesPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
