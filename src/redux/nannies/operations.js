import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../../firebase';
import { get, ref, query, orderByKey } from 'firebase/database';
import { sortAndFilterNannies } from '../../utils/sortAndFilterNannies';

export const fetchNannies = createAsyncThunk(
  'nannies/fetchNannies',
  async ({ lastKey = null, sortBy = 'all' }, { rejectWithValue }) => {
    try {
      const snapshot = await get(
        query(ref(database, 'babysitters'), orderByKey())
      );

      if (!snapshot.exists()) {
        return { babysitters: [], lastKey: null, hasMore: false };
      }

      let allData = [];
      snapshot.forEach(child => {
        allData.push({ id: child.key, ...child.val() });
      });

      const sortedData = sortAndFilterNannies(allData, sortBy);

      const limit = 3;
      const startIndex = lastKey
        ? sortedData.findIndex(item => item.id === lastKey) + 1
        : 0;
      const paginatedData = sortedData.slice(startIndex, startIndex + limit);
      const newLastKey =
        paginatedData.length > 0
          ? paginatedData[paginatedData.length - 1].id
          : null;

      return {
        babysitters: paginatedData,
        lastKey: newLastKey,
        hasMore: startIndex + limit < sortedData.length,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
