import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import PageLayout from './pageLayout';
import { Grid, Box, Container } from '@mui/material';
import useAuth from '../hookss/auth/useAuth';
import { useNavigate } from 'react-router-dom';

const AppLayout = (props) => {
  const { userId } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (userId) {
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
          <Footer />
        </PageLayout>
      </div>
    </>
  );
};

export default AppLayout;
