import { createSlice } from "@reduxjs/toolkit";

const modalContext = createSlice({
  name: "sliceHandler",

  initialState: {
    showModalForUnitOfMeasure: false,
  },
  reducers: {
    showModal(state) {
      state.showModalForUnitOfMeasure = true;
    },
    closeModal(state) {
      state.showModalForUnitOfMeasure = false;
    },
  },
});

export const modalActions = modalContext.actions;

export default modalContext;
