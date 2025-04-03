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
  async ({ lastKey = null }, { rejectWithValue }) => {
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
