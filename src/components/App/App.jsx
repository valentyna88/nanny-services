import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import Layout from '../Layout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Nannies = lazy(() => import('../../pages/Nannies/Nannies'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
