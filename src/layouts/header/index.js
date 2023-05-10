import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import MenuComponent from './components/MenuComponent';
import { useSelector } from 'react-redux';
function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const user = useSelector((state) => state.user.userData);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppBar position='sticky' color='default'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={handleToggleDarkMode} sx={{ mr: 2 }}>
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
          }}
        >
          <Typography variant='p'>{user.fullname}</Typography>
          <Typography variant='p'></Typography>
        </Box>
        <IconButton onClick={handleClick} sx={{ mr: 2 }}>
          <Avatar>A</Avatar>
        </IconButton>
        <MenuComponent anchorEl={anchorEl} handleClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
