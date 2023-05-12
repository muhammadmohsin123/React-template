import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  loggedIn: false,
  accessToken: '',
  userId: '',
  userData: {},
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    getUserTocken: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userId = action.payload.userId;
      state.loggedIn = true;
    },
    getUserData: (state, action) => {
      state.userData = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.accessToken = '';
      state.userData = {};
    },
  },
});

// Action Creator
export const getData = () => {
  return async (dispatch, state) => {
    const accessToken = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('userId');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };

    const user = await axios.get(
      `https://invoteams-onboarding.invo.zone/api/auth/users?userId=${userId}`,
      config
    );
    const userData = user.data.result.content[0];
    dispatch(getUserData(userData));
  };
};

// Action creators are generated for each case reducer function
export const { getUserTocken, getUserData, logout } = userSlice.actions;

export default userSlice.reducer;
