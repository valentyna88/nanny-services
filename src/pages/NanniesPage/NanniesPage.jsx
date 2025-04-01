import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNannies } from '../../redux/nannies/operations';
import {
  selectError,
  selectIsLoading,
  selectNannies,
} from '../../redux/nannies/selectors';
import NannyList from '../../components/NannyList/NannyList';

const NanniesPage = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchNannies());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <NannyList nannies={nannies} />;
};

export default NanniesPage;
