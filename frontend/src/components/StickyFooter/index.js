import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StyledImage } from './style';

export default function StickyFooter() {
  return (
    <Box 
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '110px',
        width: '100%',
        marginTop: 'auto',
        backgroundColor: '#3c9e44',
      }}
    >
      <Typography variant="body2" color="black">
        {'Membros: Alexandre Scrocaro Junior, Caio Miglioli, Carlos Miguel, Leonardo Omori'}
      </Typography>
      <StyledImage 
        src={require('../../img/utfpr.png')} 
        alt='Logo UTFPR'
      />
    </Box>
  );
}