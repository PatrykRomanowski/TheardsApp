import {
  configureStore
} from "@reduxjs/toolkit";

import modalContext from "./modal-context";
import unitContext from "./actualUnit-context";

const store = configureStore({
  reducer: {
    modalContext: modalContext.reducer,
    unitContext: unitContext.reducer,
  },
});

export default store;