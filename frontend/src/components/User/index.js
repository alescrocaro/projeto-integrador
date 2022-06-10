import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../../Context/AuthContext';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

const settings = ['Perfil', 'Sair'];

export default function User() {
  const { handleLogout } = useToken();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Button
          variant="text"
          color="inherit"
          size="large"
          sx={{ color: 'white' }}
        >
          Login
        </Button>
      </Link>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Abrir opções de usuário">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map(setting => (
            <MenuItem
              key={setting}
              onClick={() => {
                handleCloseUserMenu();
                // if sair: handle logout from context
                // if perfil: get user id from headers and redirect to /users/${id}
                if (setting === 'Perfil') navigate(`/users/1`);
                if (setting === 'Sair') handleLogout();
              }}
            >
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}
