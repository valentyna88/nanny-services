import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { modalType: null },
  reducers: {
    openModal: (state, action) => {
      state.modalType = action.payload;
    },
    closeModal: state => {
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
