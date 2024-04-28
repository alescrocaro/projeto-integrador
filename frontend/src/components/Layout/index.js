import Box from '@mui/material/Box';
import React from 'react';
import HeaderMenu from '../HeaderMenu';

export default function Layout({ children }) {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <HeaderMenu />
      {children}
      {/* <StickyFooter /> */}
    </Box>
  );
}
