import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { setUser, clearUser } from './slice';

export const register =
  ({ email, password }) =>
  async dispatch => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error('Register error:', error.message);
    }
  };

export const login =
  ({ email, password }) =>
  async dispatch => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

export const logout = () => async dispatch => {
  try {
    await signOut(auth);
    dispatch(clearUser());
  } catch (error) {
    console.error('Logout error:', error.message);
  }
};

export const getCurrentUser = () => dispatch => {
  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(clearUser());
    }
  });
};
