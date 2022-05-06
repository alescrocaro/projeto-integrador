import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const MyButton = styled(Button)(() => ({
  color: 'black',
  backgroundColor: '#f2f2f2',
  '&:hover': {
    backgroundColor: '#dedede',
  },

  width: '100%',
  height: '150px',
}));

const StyledLink = styled(Link)(() => ({
  width: '100%',
}));

export default function StyledButton() {
  return (
        <StyledLink 
          to='create-post' 
          style={{
            textDecoration: 'none',
            margin: '10px 0',
            marginTop: '20px',
          }}
        >
          <MyButton variant="contained">
            <AddIcon />
            <Typography variant="h5" component="div" sx={{marginLeft:'10px'}}>
              CRIAR NOVA POSTAGEM
            </Typography>
          </MyButton>
        </StyledLink>
  );
}
