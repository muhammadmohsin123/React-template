import React from 'react';
import { Grid, Box } from '@mui/material';
import sideImage from '../../assets/sidebar.png';

function ScreenLayout(props) {
  return (
    <Grid
      container
      sx={{
        border: '1px solid #DADADA',
        borderRadius: '10px',
        height: '80vh',
        display: 'flex', // new styles
        // new styles
      }}
    >
      <Grid item md={3}>
        <img src={sideImage} style={{ height: '100%' }} />
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <Box pr={3} mt={3} sx={{ overflowY: 'auto' }}>
          {props.children}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ScreenLayout;
