import { ImgCard } from '../imgCard';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box,Typography, Button} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const StyledButton = styled(Button)(() => ({
  color: 'black',
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
    setImgFile(old => [
      ...old,{
      currentFile: e.target.files[0],
      } 
    ])
  }

  const handleOnDelete = (index) => {
    setImgFile(old => old.splice(index,1))
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
        imgFile.length > 0 &&
        imgFile.map((element, index) => 
          <ImgCard
            key={index}
            imgName={element.currentFile.name}
          />  
        )
      }
    </Box>
  );
}