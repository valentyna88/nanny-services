import { createSlice } from '@reduxjs/toolkit';
import { fetchNannies } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNannies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNannies.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchNannies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default nanniesSlice.reducer;
