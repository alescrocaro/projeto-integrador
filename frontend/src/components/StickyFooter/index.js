import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        component="footer"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#3c9e44',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="black">
            {'Membros: Alexandre Scrocaro Junior, Caio Miglioli, Carlos Miguel, Leonardo Omori'}
          </Typography>
        </Container>
        <Container maxWidth="sm">
          <img 
            style={{maxWidth: '20vw', maxHeight: '10vh'}} 
            src={require('../../img/utfpr.png')} 
            alt='Logo UTFPR'
          />
        </Container>
      </Box>
    </Box>
  );
}