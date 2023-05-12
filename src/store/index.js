import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import companyProfileSlice from './slice/companyProfileSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    companyProfile: companyProfileSlice,
  },
});
