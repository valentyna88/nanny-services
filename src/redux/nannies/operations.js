import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../../firebase';
import {
  get,
  ref,
  query,
  orderByKey,
  startAfter,
  limitToFirst,
} from 'firebase/database';

export const fetchNannies = createAsyncThunk(
  'nannies/fetchNannies',
  async ({ lastKey = null, sortBy = 'asc' }, { rejectWithValue }) => {
    try {
      const limit = 3;

      let baseQuery = query(
        ref(database, 'babysitters'),
        orderByKey(),
        limitToFirst(limit)
      );

      if (lastKey) {
        baseQuery = query(
          ref(database, 'babysitters'),
          orderByKey(),
          startAfter(lastKey),
          limitToFirst(limit)
        );
      }

      const snapshot = await get(baseQuery);
      if (!snapshot.exists()) {
        return { babysitters: [], lastKey: null, hasMore: false };
      }

      const data = [];
      snapshot.forEach(child => {
        data.push({ id: child.key, ...child.val() });
      });

      if (sortBy === 'asc') {
        data.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'desc') {
        data.sort((a, b) => b.name.localeCompare(a.name));
      } else if (sortBy === 'lt10') {
        data = data.filter(nanny => nanny.price < 10);
      } else if (sortBy === 'gt10') {
        data = data.filter(nanny => nanny.price >= 10);
      } else if (sortBy === 'popular') {
        data.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === 'notPopular') {
        data.sort((a, b) => a.rating - b.rating);
      }

      const newLastKey = data.length > 0 ? data[data.length - 1].id : null;

      return {
        babysitters: data,
        lastKey: newLastKey,
        hasMore: data.length === limit,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
