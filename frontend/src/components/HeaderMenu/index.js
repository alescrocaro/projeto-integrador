import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { StyledImage } from './style';

import User from '../User';

export default function HeaderMenu() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#3D3D3D',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '2vh 12.5vw'
      }}
    >
      <Link to="/">
        <StyledImage src={require('../../img/logo.png')} alt="LOGO" />
      </Link>
      <User />
    </AppBar>
  );
}
