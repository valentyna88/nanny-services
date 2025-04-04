import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      console.log('Registering user with:', { email, password });
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { uid, email: userEmail } = userCredential.user;
      return { uid, email: userEmail };
    } catch (error) {
      console.error('Firebase registration error:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { uid, email: userEmail } = userCredential.user;
      return { uid, email: userEmail };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, user => {
        if (user) {
          const { uid, email } = user;
          resolve({ uid, email });
        } else {
          reject('No user found');
        }
      });
    });
  }
);
