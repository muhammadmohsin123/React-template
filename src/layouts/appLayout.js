import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import { Grid, Box } from '@mui/material';

const AppLayout = (props) => {
  return (
    <>
      <Grid container>
        <Sidebar>
          <Grid item md={12}>
            <Header />
          </Grid>
          {/* App Content  */}
          <Outlet />
          <Grid item container md={12}>
            <Footer />
          </Grid>
        </Sidebar>
      </Grid>
    </>
  );
};

export default AppLayout;
