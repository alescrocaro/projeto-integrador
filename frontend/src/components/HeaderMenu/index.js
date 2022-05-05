import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function HeaderMenu () {
  return (
    <AppBar 
      position="static"  
      sx={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'space-between'
    }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
      >
        LOGO AQUI
      </Typography>

      <Avatar />
  </AppBar>
  );
};