import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalType: null,
  nanny: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalType = action.payload.modalType;
      state.nanny = action.payload.nanny ?? null;
    },
    closeModal: state => {
      state.modalType = null;
      state.nanny = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
