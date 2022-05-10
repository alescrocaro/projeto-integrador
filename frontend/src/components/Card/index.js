import * as React from 'react';
import { Link } from 'react-router-dom';
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
  console.log(post)
  return (
    <Link 
      to={'/posts/'+post.id}
      style={{
        textDecoration: 'none',
        width: '100%',
        margin: '10px 0', 
      }}
    >
      <Card sx={{ 
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
              {post.title}
            </Typography>
            <Typography variant="h7" color="#3c9e44">
              Avistado por {post.userName} em {post.dateFound}
            </Typography>
            <StyledCardDescription>
              <div>
                <Typography variant="body1" color="#3c9e44">
                  ESPÉCIME: {<br/>}
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
                  LOCAL: {<br/>}
                </Typography>            
                <Typography variant="body2" color="black">
                  Bioma: {post.biome}{<br/>}
                  Clima: {post.weather}{<br/>}
                  Cidade: {post.city}{<br/>}
                </Typography>            
              </div>
            </StyledCardDescription>
          </StyledCardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}