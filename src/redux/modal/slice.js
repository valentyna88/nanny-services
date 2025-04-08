import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { modalType: null, nannyId: null },
  reducers: {
    openModal: (state, action) => {
      state.modalType = action.payload.modalType;
      state.nannyId = action.payload.nannyId;
    },
    closeModal: state => {
      state.modalType = null;
      state.nannyId = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
