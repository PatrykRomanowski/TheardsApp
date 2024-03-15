import { configureStore } from "@reduxjs/toolkit";

import modalContext from "./modal-context";

const store = configureStore({
  reducer: {
    modalContext: modalContext.reducer,
  },
});

export default store;
