import { Box, Container } from '@mui/material';
import SideBar from '../sidebar.js';
function PageLayout(props) {
  return (
    <Box sx={{ display: 'flex', paddiing: '0' }}>
      {/* /**************** SIDE BAR *************/}
      <SideBar />
      <Box sx={{ flex: 1, padding: '16px' }}>{props.children}</Box>
    </Box>
  );
}

export default PageLayout;
