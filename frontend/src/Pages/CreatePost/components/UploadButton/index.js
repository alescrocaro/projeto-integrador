import React from 'react';

//components
import { ImgCard } from '../imgCard';
import { styled } from '@mui/material/styles';
import { Typography, Button} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const StyledButton = styled(Button)(() => ({
  color: '#14aa6b',
  borderColor: '#14aa6b',
  width: '100%',
  height: '100px',
  gap: '5px',
  '&:hover': {
    backgroundColor: '#3d3d3d',
    borderColor: '#fff',
    color: '#fff',
  },
}));


export default function UploadButton({label, imgFile, setImgFile}) {

  const handleOnChange = (e) => {
    // console.log("hello")
    const file = e.target.files[0]
    if (!['jpg','png', 'jpeg', 'jpe','jif','webp','tiff','tif'].includes(file.name.split('.')[1].toLowerCase())) {
      alert('ERRO: Não foi possível reconhecer a extensão da imagem. As extensões permitidas são .jpg, .png, .jpeg, .jpe, .jif, .web, .tiff e .tif!')
      return
    }
    if(imgFile?.length >= 5 ) {
      alert('ERRO: Você atingiu o limite de imagens para esta observação!')
      return
    }
    // console.log("imgFile")
    setImgFile(old => [
      ...old,{
      currentFile: file,
      id: Date.now()
      } 
    ])

    console.log(imgFile);
  }

  const handleOnDelete = (id) => {
    setImgFile(old => old.filter((element) => element.id != id))
  }
  
  return (
    <div style={{display: 'grid', gap: '16px'}}>
      <StyledButton component="label" variant="outlined">
          <AddCircleOutlineOutlinedIcon fontSize='large'/>
          <Typography variant="h5" component="div" sx={{
            fontFamily: 'Montserrat, Sans Serif',
            fontWeight: '600',
            letterSpacing: '-0.05em',
          }}>
              {label}
          </Typography>
          <input
            onClick={(e) => e.target.value = null}
            onChange={handleOnChange}
            type="file"
            hidden
          />
      </StyledButton>
      
      <div>
        <Typography variant="p" component="div" sx={{
          fontFamily: 'Montserrat, Sans Serif',
            letterSpacing: '-0.05em',
            fontWeight: '600',
            color: '#333'
          }}>
            Fotos carregadas:
          </Typography>
        {/* <p style={{fontWeight: '600', margin}}>Fotos carregadas:</p> */}
        
        { imgFile?.length > 0 ?
          imgFile.map((element, index) => {
            return (<ImgCard
              handleOnDelete={handleOnDelete}
              key={index}
              id={element.id}
              imgName={element.currentFile.name}
            />)
          })
          :
          <Typography variant="p" component="div" sx={{
            fontFamily: 'Montserrat, Sans Serif',
            letterSpacing: '-0.05em',
            fontWeight: '500',
            color: 'red',
            fontSize: '.8em',
            marginTop: '5px'
          }}>
            ⚠️ Você deve anexar pelo menos uma foto!
          </Typography>
        }
      </div>
    </div>
  );
}
