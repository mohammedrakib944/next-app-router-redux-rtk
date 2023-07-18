import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/api/userSlice";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userSlice.middleware]),
});

// setupListeners(store.dispatch);
