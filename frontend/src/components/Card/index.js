import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';

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
      maxHeight: '190px'
    }}>
      <CardActionArea sx={{
        display: 'flex',
        flexDirection: 'row',
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
          <Typography variant="h4" component="div" sx={{right: 0}}>
            Title: {post.id}
          </Typography>
          <Typography variant="h7" color="#3c9e44">
            Avistado por {post.userName} em {post.dateFound}
          </Typography>
          <StyledCardDescription>
            <div>
              <Typography variant="body1" color="#3c9e44">
                Espécime: {<br/>}
              </Typography>
              <Typography variant="body2" color="black">
                Espécie: {post.specie}{<br/>}
                Gênero: {post.genus}{<br/>}
                Família: {post.family}{<br/>}
              </Typography>
            </div>
            <Divider orientation="vertical" variant="middle" flexItem />
            <div>
              <Typography variant="body1" color="#3c9e44">
                Local: {<br/>}
              </Typography>            
              <Typography variant="body2" color="black">
                Bioma: {post.weather}{<br/>}
                Clima: {post.weather}{<br/>}
                Cidade: {post.city}{<br/>}
              </Typography>            
            </div>
          </StyledCardDescription>
        </StyledCardContent>
      </CardActionArea>
    </Card>
  );
}