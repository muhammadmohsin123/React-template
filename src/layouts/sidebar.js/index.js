import React, { useState } from 'react';
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from '@mui/material';
import { SIDEBAR_ITEMS } from '../navigation/veritical';
import { useLocation, useNavigate } from 'react-router-dom';
import invoteam_logo from '../../assets/invoteam-logo-dark.svg';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SIDEBAR_WIDTH = 260;

const sidebarItemStyles = (isSelected) => ({
  background: isSelected
    ? 'linear-gradient(118deg,#7367f0,rgba(115,103,240,.7));'
    : 'inherit',
  boxShadow: isSelected ? '0 0 10px 1px rgba(115,103,240,.7)' : 'inherit',
  borderRadius: isSelected ? '4px' : 'inherit',
  color: isSelected ? '#fff' : 'inherit',
});

function SideBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        width: isCollapsed ? '50px' : SIDEBAR_WIDTH,
        height: '100vh',
        background: '#fff',
        boxShadow: '0 0 15px 0 rgba(34,41,47,.05)',
        color: '#6e6b7b',
        paddingLeft: '10px',
        paddingRight: '10px',
        transition: 'width 0.3s ease-in-out',
      }}
    >
      <Grid container mt={2} justifyContent='center' alignContent='center'>
        {!isCollapsed ? (
          <Grid item>
            <img src={invoteam_logo} alt='Invoteam Logo' />
          </Grid>
        ) : null}

        {!isCollapsed && <Grid item sx={{ flexGrow: 1 }} />}
        <Grid item>
          <Box
            pt={2}
            onClick={handleCollapse}
            sx={{ cursor: 'pointer', display: 'flex' }}
          >
            {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </Box>
        </Grid>
      </Grid>
      <List>
        {SIDEBAR_ITEMS.map(({ path, label, icon }) => (
          <ListItem
            key={path}
            button
            selected={pathname === path}
            sx={sidebarItemStyles(pathname === path)}
            onClick={() => navigate(path)}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            {!isCollapsed && <ListItemText primary={label} />}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideBar;
