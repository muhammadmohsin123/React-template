import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import PageLayout from './pageLayout';
import { Grid, Box, Container } from '@mui/material';

const AppLayout = (props) => {
  return (
    <>
      <div>
        <PageLayout>
          <Header />
          {/* App Content  */}
          <Outlet />
          <Footer />
        </PageLayout>
      </div>
    </>
  );
};

export default AppLayout;
