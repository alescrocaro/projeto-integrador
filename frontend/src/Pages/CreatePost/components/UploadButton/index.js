import React from 'react';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const MyButton = styled(Button)(() => ({
  color: 'black',
  backgroundColor: '#e6e3e3',
  '&:hover': {
    backgroundColor: '#9e9e9e',
    borderWidth:2,
    borderColor:"#d4d2d2",
  },
  borderWidth:2,
  borderColor:"#9e9e9e",  
  width: '100%',
  aspectRatio: '16/9',
}));


export default function UploadButton({label}) {
  return (
    <MyButton variant="outlined" >
        <AddIcon />
        <Typography variant="h5" component="div">
            {label}
        </Typography>
    </MyButton>
  );
}