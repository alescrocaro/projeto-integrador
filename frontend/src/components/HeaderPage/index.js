import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

import "./style.css";

export default function StyledCard({ title='SEM TITULO', filter=false }) {
  return (
    <Card 
      sx={{ 
        margin: '2vh 0',
        backgroundColor: '#3D3D3D',
        width: '100%',
      }}
    >
      <CardContent
        sx={{
          paddingBottom: '16px !important',
        }}
      >
        <div 
          id='card-content'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '0px',
          }}
        >
          <div 
            id='texts'
            style={{
              display: 'flex',
              flexDirection: 'column', 
              color: 'white',
            }}  
          >
            <Typography vartiant='h5' style={{
              fontFamily: 'Montserrat, Sans Serif',
              fontWeight: '600',
              letterSpacing: '-0.05em',
            }}>
              {title}
            </Typography>

          </div>
          <div id='filter'>
            {filter &&
              <div className="filterButton" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Typography
                  size="large"
                  color="white"
                  style={{
                    fontFamily: 'Montserrat, Sans Serif',
                    fontWeight: '600',
                  }}
                >
                  FILTROS
                </Typography>
                <ArrowDropDownCircleIcon sx={{color:'white', fontSize: '1.5rem', margin: '-.1em 0 0 5px'}} />
              </div>
            } 
          </div>
        </div>
      </CardContent>
    </Card>
  );
}