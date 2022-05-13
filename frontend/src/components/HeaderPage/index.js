import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

import {
  DescricaoG,
} from "./style";

export default function StyledCard({ title='SEM TITULO', userName, dateFound, filter=false }) {
  const date = new Date(dateFound);
  return (
    <Card 
      sx={{ 
        margin: '2vh 0',
        backgroundColor: '#3D3D3D',
        width: '100%',
        height: 'fit-content', 
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
            
            {!userName && !dateFound &&
              <Typography vartiant='h5' style={{
                fontFamily: 'Montserrat, Sans Serif',
                fontWeight: '600',
                letterSpacing: '-0.05em',
              }}>
                {title}
              </Typography>
            }

            {!!userName && !!dateFound &&
              <div>
              <Typography vartiant='h5' style={{
                fontFamily: 'Montserrat, Sans Serif',
                fontWeight: '600',
                letterSpacing: '-0.05em',
                fontSize: '2em',
                lineHeight: '1',
              }}>
                {title}
              </Typography>

              <DescricaoG>
                Observado por <b>{userName}</b> em <b>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</b>.
              </DescricaoG>
              </div>
            }
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