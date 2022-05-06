import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { 
  BannerImage,
  StyledCardContent,
  StyledCardDescription
} from './style.js';

export default function StyledCard({ post }) {
  return (
    <Card sx={{ 
      margin: '5px',
      width:'100%',
    }}>
      <CardActionArea sx={{
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '100%',
        height: '100%'
      }}
      >
        <BannerImage 
          component='img'
          src={require('../../img/foto1.jpg')} 
          alt='img'
        />
        <StyledCardContent>
          <Typography variant="h5" component="div">
            Title: {post.id}
          </Typography>
          <Typography variant="h7" color="#3c9e44">
            Avistado por {post.userName} em {post.dateFound}
          </Typography>
          <StyledCardDescription>
            <Typography variant="body2" color="#3c9e44">
              Espécime: {<br/>}
              Espécie: {post.specie}{<br/>}
              Gênero: {post.genus}{<br/>}
              Família: {post.family}{<br/>}
            </Typography>
            <Typography variant="body2" color="#3c9e44">
              Local: {<br/>}
              Bioma: {post.weather}{<br/>}
              Clima: {post.weather}{<br/>}
              Cidade: {post.city}{<br/>}
            </Typography>            
          </StyledCardDescription>
        </StyledCardContent>
      </CardActionArea>
    </Card>
  );
}