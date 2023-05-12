import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import PageLayout from './pageLayout';
import { Grid, Box, Container } from '@mui/material';
import useAuth from '../hooks/auth/useAuth';
import { useNavigate } from 'react-router-dom';
import { getData } from '../store/slice/userSlice';
import { useDispatch } from 'react-redux';
import useUrlParams from '../hooks/auth/useUrlParams';
const AppLayout = (props) => {
  const { userId } = useUrlParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    if (token) {
      dispatch(getData());
    }
  }, []);
  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [userId]);
  return (
    <>
      <div>
        <PageLayout>
          <Header />
          {/* App Content  */}
          <Box mb={4} />
          <Outlet />
          {/* <Footer /> */}
        </PageLayout>
      </div>
    </>
  );
};

export default AppLayout;
