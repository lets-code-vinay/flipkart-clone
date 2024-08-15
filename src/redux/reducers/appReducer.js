import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "flipkart-clone",
  initialState: {
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = appSlice.actions;
export default appSlice.reducer;
