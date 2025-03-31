import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState,
  reducers: {
    setNannies(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setNannies } = nanniesSlice.actions;
export default nanniesSlice.reducer;
