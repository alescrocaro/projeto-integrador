import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { styled } from '@mui/material/styles';

import { Box, Card, Typography, Button, TextField } from '@mui/material/';
import StyledTable from '../../components/Table';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import HeaderPage from '../../components/HeaderPage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Descricao, Img, Subsubtitulo, Subtitulo } from './style';
import NotFound from '../NotFound';
import { Divider} from '@material-ui/core';

import Paper from '@mui/material/Paper';

export default function SpecificPost() {  
  const [post, setPost] = useState({});
  const {id} = useParams();
  
  async function getPost(id) {
    const { data } = await api.get(`posts/${id}`);
    setPost(data);

    //data.latlng está em geojson (lnglat)
    console.log('post data ->', data);
  };

  useEffect(() => {
    getPost(id);

  }, [id]);

  const RedTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'red !important',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red !important',
      },
    },
  });

  return (
    <Layout>
      {!!post &&
        <Container container sx={{
          display: 'grid',
          alignItems: 'start',
          gap: '2vh',
          margin: '2vh 0',
        }}>
          
          {/* titulo do post */}
          <HeaderPage
            title={post.title} 
            userName={post.userName} 
            dateFound={post.dateFound} 
          />
          
          {/* card do post */}
          <Card 
            sx={{ 
              width: '100%',
              height: 'fit-content',
              backgroundColor:'#f0f0f0', 
              // border: 1,
              // borderColor: 'grey.500',s
              display: 'grid',
              marginBottom: '5px',
            }}
            >

            {/* Box das infos com fotos e tabelas */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '50% 50%',
                alignItems: 'start',
                marginBottom: '.15rem'
              }}
            >

              {/* Box com foto do especime e tabela de classificacao*/}
              <Box
                sx={{
                  display: 'grid',
                  gap: '.5rem',
                  padding: '1rem',
                }}
              >
                <Subtitulo>ESPÉCIME:</Subtitulo>
                <Img src={post.imgUrl} alt='img'/>
                <Subsubtitulo>CLASSIFICAÇÃO CIENTÍFICA:</Subsubtitulo>
                <StyledTable data={post} scientificTable />
              </Box>
              
             
              {/* Box com localizacao e tabela de detalhes*/}
              <Box
              sx={{
                display: 'grid',
                gap: '.5rem',
                padding: '1rem',
              }}
              >
                <Subtitulo>LOCAL E DATA:</Subtitulo>
                <Img src={require('../../img/foto1.jpg')} alt='img'/>
                <Subsubtitulo>DETALHES:</Subsubtitulo>
                <StyledTable data={post} detailsTable />
              </Box>
            </Box>
              
              {/* box da descricao */}
              <Divider variant='middle'/>
              <Box 
                className='description'
                sx={{
                  display: 'grid',
                  gap: '.5rem',
                  padding: '1rem',
                }}
              >
                <Subtitulo>DESCRIÇÃO:</Subtitulo>
                <Paper elevation={0}>
                  <Descricao>{post.description}</Descricao>
                </Paper>
              </Box> 

          </Card>
          
              


            {/*}
            </Box>

            <Box 
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '10px',
              }}
            >
              <Typography variant='h7' color='black'>
                COMUNIDADE:
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: '10px',
                }}
              >
                <AccountCircleIcon sx={{margin: '10px',}}fontSize="large"/>
                <Typography variant='h7' color='black'>
                  João
                </Typography> 
                <TextField
                  fullWidth
                  multiline
                  sx={{
                    margin: '0 15px',
                  }}
                  disabled
                  defaultValue={"apsdj apodpoa skdpoka podkaspo k"}
                />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <AccountCircleIcon sx={{margin: '10px',}}fontSize="large"/>
                <Typography variant='h7' color='black'>
                  Vitor
                </Typography> 
                <RedTextField
                  label="CONTESTAÇÃO"
                  fullWidth
                  multiline
                  sx={{
                    margin: '15px',
                  }}
                  defaultValue={"Loureiro não é invasor desse lugar!"}
                  disabled
                  />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant='h7' color='black'>
                ESCREVER COMENTÁRIO:
              </Typography>
              <TextField 
                label="Escreva seu comentário" 
                variant="outlined" 
                multiline
                sx={{ 
                  maxWidth: '100%',
                  margin: '10px',
                }}
              />
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end'
                }}
              >
                <Button 
                  variant='contained' 
                  color='error'
                  sx={{
                    margin: '0 10px',
                  }}
                >
                  CONTESTAR
                </Button>
                <Button 
                  variant='contained' 
                  color='primary'
                  sx={{
                    margin: '0 10px',
                  }}
                >
                  COMENTAR
                </Button>
              </Box>
            </Box>
          </Card> */}
        </Container>
      }
    </Layout>
  );
};
