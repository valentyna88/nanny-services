import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../../firebase';
import { get, ref, query, orderByKey } from 'firebase/database';

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

      if (sortBy === 'asc') {
        allData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'desc') {
        allData.sort((a, b) => b.name.localeCompare(a.name));
      } else if (sortBy === 'lt10') {
        allData = allData.filter(nanny => nanny.price_per_hour < 10);
      } else if (sortBy === 'gt10') {
        allData = allData.filter(nanny => nanny.price_per_hour >= 10);
      } else if (sortBy === 'popular') {
        allData.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === 'notPopular') {
        allData.sort((a, b) => a.rating - b.rating);
      }

      const limit = 3;
      const startIndex = lastKey
        ? allData.findIndex(item => item.id === lastKey) + 1
        : 0;
      const paginatedData = allData.slice(startIndex, startIndex + limit);
      const newLastKey =
        paginatedData.length > 0
          ? paginatedData[paginatedData.length - 1].id
          : null;

      return {
        babysitters: paginatedData,
        lastKey: newLastKey,
        hasMore: startIndex + limit < allData.length,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
