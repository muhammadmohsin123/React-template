import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  accessToken: '',
  userData: {},
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    getUserTocken: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.loggedIn = true;
    },
    getUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUserTocken, getUserData } = userSlice.actions;

export default userSlice.reducer;
