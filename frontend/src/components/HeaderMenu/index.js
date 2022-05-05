import React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import {StyledImage} from './style';

export default function HeaderMenu () {
  return (
    <AppBar 
      position="static"  
      sx={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: '#3c9e44',
        marginBottom: '20px'
    }}>
      <StyledImage
        src={require('../../img/logo.png')}
        alt='LOGO'
      />

      <Avatar sx={{ marginRight: '50px', width: '50px', height: '50px' }}/>
  </AppBar>
  );
};