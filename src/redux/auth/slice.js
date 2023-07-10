import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state, action) => {
      state.token = null;
    },
  },
});

export const { setToken, logOut } = authReducer.actions;
export default authReducer.reducer;
