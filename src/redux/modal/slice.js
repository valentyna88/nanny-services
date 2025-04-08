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
    // openModal: (state, action) => {
    //   if (typeof action.payload === 'string') {
    //     state.modalType = action.payload;
    //     state.nannyId = null;
    //   } else {
    //     state.modalType = action.payload.modalType;
    //     state.nannyId = action.payload.nannyId;
    //   }
    // },
    // closeModal: state => {
    //   state.modalType = null;
    //   state.nannyId = null;
    // },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
