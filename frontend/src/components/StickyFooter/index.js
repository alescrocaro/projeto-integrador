import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function StickyFooter() {
  return (
    <Box 
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '90px',
        width: '100%',
        marginTop: 'auto',
        backgroundColor: '#3c9e44',
      }}
    >
      <Typography variant="body2" color="black">
        {'Membros: Alexandre Scrocaro Junior, Caio Miglioli, Carlos Miguel, Leonardo Omori'}
      </Typography>
      <img 
        style={{maxWidth: '20vw', maxHeight: '10vh'}} 
        src={require('../../img/utfpr.png')} 
        alt='Logo UTFPR'
      />
    </Box>
  );
}