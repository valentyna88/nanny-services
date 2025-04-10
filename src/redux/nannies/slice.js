import { createSlice } from '@reduxjs/toolkit';
import { fetchNannies } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  page: 1,
  hasMore: false,
  lastKey: null,
  sortBy: 'all',
  isLoading: false,
  error: null,
};

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState,
  reducers: {
    resetNannies: state => {
      state.items = [];
      state.page = 1;
      state.hasMore = false;
      state.lastKey = null;
      state.error = null;
    },
    incrementPage: state => {
      state.page += 1;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNannies.pending, handlePending)
      .addCase(fetchNannies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.hasMore;
        state.lastKey = action.payload.lastKey || null;

        const newItems = action.payload.babysitters.filter(
          nanny => !state.items.some(existing => existing.id === nanny.id)
        );
        if (newItems.length > 0) {
          state.items.push(...newItems);
        }
      })
      .addCase(fetchNannies.rejected, handleRejected);
  },
});

export const { resetNannies, incrementPage, setSortBy } = nanniesSlice.actions;
export default nanniesSlice.reducer;
