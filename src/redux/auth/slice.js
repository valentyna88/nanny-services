import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from './operations';

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
  isRefreshing: false,
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
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = {
          uid: action.payload.uid,
          email: action.payload.email,
          name: action.payload.name,
        };
      })
      .addCase(registerUser.rejected, handleRejected)

      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = {
          uid: action.payload.uid,
          email: action.payload.email,
          name: action.payload.name,
        };
      })
      .addCase(loginUser.rejected, handleRejected)

      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.isLoggedIn = false;
        state.favorites = [];
      })
      .addCase(getCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = {
          uid: action.payload.uid,
          email: action.payload.email,
          name: action.payload.name,
        };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
