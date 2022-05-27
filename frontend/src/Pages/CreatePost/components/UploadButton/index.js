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
    console.log("hello")
    const file = e.target.files[0]
    if (!['jpg','png', 'jpeg', 'jpe','jif','webp','tiff','tif'].includes(file.name.split('.')[1])) {
      alert('O sistema somente aceita images com as seguintes extensões: jpg, png, jpeg, jpe, jif, web, tiff, tif')
      return
    }
    if(imgFile.length === 3 ) {
      alert('O sistema aceita somente três imagens por post')
      return
    }
    console.log("imgFile")
    setImgFile(old => [
      ...old,{
      currentFile: file,
      id: Date.now()
      } 
    ])
  }

  const handleOnDelete = (id) => {
    setImgFile(old => old.filter((element) => element.id != id))
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
            onClick={(e) => e.target.value = null}
            onChange={handleOnChange}
            type="file"
            hidden
          />
      </StyledButton>
      {
        imgFile.length > 0 &&
        imgFile.map((element, index) => 
          <ImgCard
            handleOnDelete={handleOnDelete}
            key={index}
            id={element.id}
            imgName={element.currentFile.name}
          />  
        )
      }
    </Box>
  );
}