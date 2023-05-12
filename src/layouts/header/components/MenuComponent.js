import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HelpIcon from '@mui/icons-material/Help';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import { logout } from '../../../store/slice/userSlice';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
function MenuComponent({ anchorEl, handleClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = 'https://invoteams.invo.zone/';
    handleClose();
  };

  const menuItems = [
    {
      label: 'Profile',
      icon: <AccountCircleIcon />,
      onClick: () => console.log('Clicked Profile'),
    },
    {
      label: 'Inbox',
      icon: <MailIcon />,
      onClick: () => console.log('Clicked Inbox'),
    },
    {
      label: 'Tasks',
      icon: <AssignmentIcon />,
      onClick: () => console.log('Clicked Tasks'),
    },
    {
      label: 'Chats',
      icon: <ChatIcon />,
      onClick: () => console.log('Clicked Chats'),
    },
    {
      label: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => console.log('Clicked Settings'),
    },
    {
      label: 'Pricing',
      icon: <AttachMoneyIcon />,
      onClick: () => console.log('Clicked Pricing'),
    },
    {
      label: 'FAQ',
      icon: <HelpIcon />,
      onClick: () => console.log('Clicked FAQ'),
    },
    {
      label: 'Logout',
      icon: <ExitToAppIcon />,
      onClick: () => handleLogout(),
    },
  ];
  const open = Boolean(anchorEl);
  return (
    <Menu
      anchorEl={anchorEl}
      id='account-menu'
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          background: '#fff',
          width: '12rem',
          boxShadow: '0 5px 25px rgba(34,41,47,.1)',
          overflow: 'visible',
          border: '1px solid rgba(34,41,47,.05)',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '& .MuiMenuItem-root:hover': {
            color: '#7367f0',
            background: 'rgba(115, 103, 240, 0.12)',
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {menuItems.map((item, index) => (
        <MenuItem key={index} onClick={item.onClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <Typography
            sx={{ color: '#6e6b7b', fontSize: '14px' }}
            variant='inherit'
            noWrap
          >
            {item.label}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default MenuComponent;
