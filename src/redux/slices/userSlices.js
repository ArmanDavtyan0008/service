import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.auth.authUser;

export default userSlice.reducer;
