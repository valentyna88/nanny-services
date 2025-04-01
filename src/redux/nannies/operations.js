import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get } from 'firebase/database';
import { database } from '../../firebase';

export const fetchNannies = createAsyncThunk(
  'nannies/fetchNannies',
  async (_, { rejectWithValue }) => {
    try {
      const nanniesRef = ref(database, 'babysitters');
      const snapshot = await get(nanniesRef);
      if (!snapshot.exists()) {
        return [];
      }
      const data = snapshot.val();
      return Object.entries(data).map(([id, nanny]) => ({
        id,
        ...nanny,
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
