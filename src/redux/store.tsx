// "use client";

import { configureStore } from "@reduxjs/toolkit";
import LeadReducer from "@/redux/features/leadSlice";

export const store = configureStore({
  reducer: {
    LeadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
