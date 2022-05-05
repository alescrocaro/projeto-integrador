import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function StyledCard({ owner, description }) {
  return (
    <Card sx={{ 
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '5px',
      width:'100%',
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image={require('../../img/foto1.jpg')}
          alt="logo utfpr"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            POST OWNER:{owner}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}