import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  favorites: [],
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
      state.favorites = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, handleRejected)

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
