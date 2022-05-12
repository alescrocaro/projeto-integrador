import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StyledImage, StyledImage2, Projeto, Pfooter, Membros, UTFPR } from './style';

export default function StickyFooter() {
  return (
    <Box 
      component="footer"
      sx={{
        display: 'grid',
        gridTemplateColumns: '30% 30% 30%',
        //gap: '5vw',
        alignItems: 'start',
        justifyContent: 'space-between',
        width: '1hz',
        marginTop: '5vh',
        backgroundColor: '#3D3D3D',
        padding: '3vh 12.5vw',
        borderTop: '5px solid',
        borderImage: 'linear-gradient(90deg, #2ea0c4 0%, #14aa6b 40%, #14aa6b 60%, #2ea0c4 100%) 1',
      }}
    >
      {/* Info do projeto */}
      <Projeto>
        <StyledImage2 
          src={require('../../img/logofooter.png')} 
          alt='Logo Invasores'
        />
        <Pfooter>Projeto desenvolvido para as disciplinas "BCC35C - Projeto Integrador" e "BCC35E - Eng. de Software 1".</Pfooter>

      </Projeto>

      <Membros>
        <Typography variant="h6" color="#14aa6b" fontWeight="600">
          {'Membros:'}
        </Typography>
        <Pfooter>Alexandre Scrocaro Junior</Pfooter>
        <Pfooter>Caio Miglioli</Pfooter>
        <Pfooter>Carlos Miguel</Pfooter>
        <Pfooter>Leonardo Omori</Pfooter>
      </Membros>

      <UTFPR>
        <StyledImage 
          src={require('../../img/utfpr.png')} 
          alt='Logo UTFPR'
          />
      </UTFPR>
    </Box>
  );
}