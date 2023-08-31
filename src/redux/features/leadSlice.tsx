// "use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: LeadState;
};
type LeadState = {
  leadName: string;
  email: string;
  phone: string;
  country: string;
};
const initialState = {
  value: {
    leadName: "",
    email: "",
    phone: "",
    country: "",
  } as LeadState,
} as InitialState;

export const lead = createSlice({
  name: "lead",
  initialState,
  reducers: {
    addLead: (state, action: PayloadAction<LeadState>) => {
      return {
        value: {
          leadName: action.payload.leadName,
          email: action.payload.email,
          phone: action.payload.phone,
          country: action.payload.country,
        },
      };
    },
  },
});
export const { addLead } = lead.actions;
export default lead.reducer;
