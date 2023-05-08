import React from 'react';
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useLocation, useNavigate } from 'react-router-dom';

const SIDEBAR_WIDTH = 260;

const SIDEBAR_ITEMS = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    path: '/company-profile',
    label: 'Company Profile',
    icon: <AssignmentIcon />,
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: <BusinessIcon />,
  },
];

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

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        width: SIDEBAR_WIDTH,
        height: '100vh',
        background: '#fff',
        boxShadow: '0 0 15px 0 rgba(34,41,47,.05)',
        color: '#6e6b7b',
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
    >
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
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideBar;
