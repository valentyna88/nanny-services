import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, login, logout, register } from './operations';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
    clearUser: state => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      })
      .addCase(login.pending, state => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.isLoggedIn = false;
        state.favorites = [];
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
