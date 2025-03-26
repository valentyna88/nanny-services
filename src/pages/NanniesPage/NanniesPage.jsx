import { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../../firebase';
import NannyList from '../../components/NannyList/NannyList';

const NanniesPage = () => {
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    const fetchNannies = async () => {
      try {
        const nanniesRef = ref(database, 'babysitters');
        const snapshot = await get(nanniesRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const formattedData = Object.values(data);
          setNannies(formattedData);
        }
      } catch (error) {
        console.error('Loading failed:', error);
      }
    };
    fetchNannies();
  }, []);

  return <NannyList nannies={nannies} />;
};

export default NanniesPage;
