import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import Layout from '../Layout';
import Home from '../../pages/Home/Home';
import Nannies from '../../pages/Nannies/Nannies';
import Favorites from '../../pages/Favorites/Favorites';
import NotFound from '../../pages/NotFound/NotFound';

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
