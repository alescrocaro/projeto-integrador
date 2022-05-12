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

import { Img } from './style';
import NotFound from '../NotFound';

export default function SpecificPost() {  
  const [post, setPost] = useState({});
  const {id} = useParams();
  
  async function getPost(id) {
    const { data } = await api.get(`posts/${id}`);
    setPost(data);
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
        <Container container>
          <HeaderPage
            title={post.title} 
            userName={post.userName} 
            dateFound={post.dateFound} 
          />
          <Card 
            sx={{ 
              p:2,
              minWidth: '100%', 
              marginTop:4, 
              backgroundColor:'#f0f0f0', 
              border: 1, 
              borderColor: 'grey.500', 
              mb:10 
            }}
          >
            {/* Box com fotos e tabelas */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'flex-start'
              }}
            >
              {/* Box com foto do especime e tabela de classificacao*/}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Typography variant='h7' color='black'>
                  ESPÉCIME:
                </Typography>

                <Img 
                  src={post.imgUrl} 
                  alt='img'
                />

                <Typography variant='h7' color='black'>
                  CLASSIFICAÇÃO CIENTÍFICA:
                </Typography>

                <StyledTable data={post} scientificTable />
              </Box>

              {/* Box com localizacao e tabela de detalhes*/}
              <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
              >
                <Typography variant='h7' color='black'>
                  LOCAL E DATA:
                </Typography>

                <Img 
                  src={require('../../img/foto1.jpg')} 
                  alt='img'
                />
                
                <Typography variant='h7' color='black'>
                  DETALHES:
                </Typography>

                <StyledTable data={post} detailsTable />
              </Box>


            </Box>
            <Box 
              className='description'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px 0',
              }}
            >
              <Typography variant='h7' color='black'>
                DESCRIÇÃO: 
              </Typography>

              <Typography variant='h8' color='black'>
                {post.description}
              </Typography>
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
          </Card>
        </Container>
      }
    </Layout>
  );
};
