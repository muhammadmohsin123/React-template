import { Box } from '@mui/material';

function Sidebar(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: 240, height: '100vh', background: 'yellow' }}>
        Sidebar content
      </Box>
      <Box>{props.children}</Box>
    </Box>
  );
}

export default Sidebar;
