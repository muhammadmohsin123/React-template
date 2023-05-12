import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import '../../styles/companyProfile/index.css';
import CompanyInfoForm from '../../components/companyProfile/companyInfoForm';
import { fetchCompanyData } from '../../store/slice/companyProfileSlice';
import { useDispatch } from 'react-redux';

function CompanyProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanyData());
  }, []);
  return (
    <Box>
      <CompanyInfoForm />
    </Box>
  );
}

export default CompanyProfile;
