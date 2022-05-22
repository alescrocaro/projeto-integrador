import { ImgCard } from '../imgCard';
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { Box,Typography, Button} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const StyledButton = styled(Button)(() => ({
  color: 'black',
  borderColor:"#d4d2d2",
  '&:hover': {
    opacity:0.5,
    borderColor:"#a3a3a3",
    borderRadius:2,
    borderWidth:2,
    borderStyle:'dashed'
  },
  borderColor:"#141414",
  borderRadius:2,
  width: '100%',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  borderWidth:2,
  borderStyle:'dashed',
}));

export default function UploadButton({label, imgFile, setImgFile}) {

  const handleOnChange = (e) => {
    console.log(e.target.files[0])
    setImgFile({
      currentFile: e.target.files[0],
      previewImage: URL.createObjectURL(e.target.files[0]),
      progress: 0,
      message: ""
    })
  }
  
  return (
    <Box sx={{
      borderWidth:10,
      borderColor:"#262626",  
      width: '100%',
      aspectRatio: '16/9',
      borderRadius:2,
      height:100
    }}>
      <StyledButton component="label" variant="outlined">
        <Box sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        }}>
          <AddCircleOutlineOutlinedIcon fontSize='large'/>
          <Typography variant="h5" component="div">
              {label}
          </Typography>
        </Box>
          <input
            onChange={handleOnChange}
            type="file"
            hidden
          />
      </StyledButton>
      {
        imgFile.currentFile != undefined &&
        <ImgCard
          imgName={imgFile.currentFile.name}
        />
      }
    </Box>
  );
}