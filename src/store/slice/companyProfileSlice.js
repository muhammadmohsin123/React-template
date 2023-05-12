import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { data } from '../../components/projects/ProjectsList';
const initialState = {
  companyProfile: {},
};

const companyProfileSlice = createSlice({
  name: 'companyProfileSlice',
  initialState,
  reducers: {
    getCompanyData: (state, action) => {
      state.companyProfile = action.payload;
    },
  },
});

// Action Creator
export const fetchCompanyData = () => {
  return async (dispatch, state) => {
    const companyData = await axios.get(
      'https://invoteams-client.invo.zone/v1/api/company/list?clientId=283'
    );
    dispatch(getCompanyData(companyData.data[companyData.data.length - 1]));
    console.log(companyData);
  };
};

export const { getCompanyData } = companyProfileSlice.actions;
export default companyProfileSlice.reducer;
