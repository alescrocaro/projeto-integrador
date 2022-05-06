import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function BasicCard({ title='SEM TITULO', userName, dateFound, filter=false }) {
  return (
    <Card 
      sx={{ 
        margin: '10px 0',
        backgroundColor: '#232423',
        minWidth: '100%',
        maxHeight: '100px',
      }}
    >
      <CardContent>
        <div 
          id='card-content'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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
            <Typography variant='h5' color='white'>
              {title}
            </Typography>

            {!!userName && !!dateFound &&
              <Typography sx={{ mb: 1.5 }} color="white">
                  Avistado por {userName} em {dateFound}
              </Typography>
            }
          </div>
          <div id='filter'>
            {filter &&
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Typography
                  size="large"
                  color="white"
                >
                  FILTROS
                </Typography>
                <KeyboardArrowDownIcon sx={{color:'white'}} />
                </div>
            } 
          </div>
        </div>
      </CardContent>
    </Card>
  );
}