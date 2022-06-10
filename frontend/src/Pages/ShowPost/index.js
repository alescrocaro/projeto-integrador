import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Box, Card, Typography, Button, TextField } from '@mui/material/';
import StyledTable from '../../components/Table';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import HeaderPage from '../../components/HeaderPage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Descricao, Img, Subsubtitulo, Subtitulo } from './style';
import { Divider } from '@material-ui/core';

import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

import Map from './components/Map';
import ImageSlider from './components/imageSlider';

export default function SpecificPost() {
  const [post, setPost] = useState({});
  const [comments, setComment] = useState([]);
  const { id } = useParams();

  async function getPost(id) {
    const { data } = await api.get(`posts/${id}`);
    setPost(data);
    //data.latlng está em geojson (lnglat)
  }

  async function getComments(id) {
    const { data } = await api.get(`posts/${id}/comments`);
    setComment(data);
    return data;
    //console.log(data)
  }

  useEffect(() => {
    getPost(id);
    getComments(id);
  }, [id]);

  const scheme = yup.object({
    description: yup.string('Comentário').required('Campo obrigatório').trim(),
    type: yup.string('Tipo').required('Campo obrigatório'),
    userName: yup.string('Nome').required('Campo obrigatório')
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      userName: 'userName',
      description: '',
      type: '',
      PostId: id
    },

    onSubmit: async values => {
      const { userName, description, type, contestation } = values;

      const postId = id;

      try {
        await api.post(`/posts/${postId}/comments`, {
          userName,
          description,
          type,
          contestation
        });
        getComments(id);
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <Layout>
      {!!post && (
        <Container
          container
          sx={{
            display: 'grid',
            alignItems: 'start',
            gap: '2vh',
            margin: '2vh 0'
          }}
        >
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
              backgroundColor: '#f0f0f0',
              // border: 1,
              // borderColor: 'grey.500',s
              display: 'grid',
              marginBottom: '5px'
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
                  padding: '1rem'
                }}
              >
                <Subtitulo>ESPÉCIME:</Subtitulo>

                {post.Images != null && post.Images.length > 0 && (
                  <ImageSlider images={post.Images} />
                )}
                {post.Images != null && post.Images.length === 0 && (
                  <Img src={require('../../img/placeholder.png')} alt="img" />
                )}
                <Subsubtitulo>CLASSIFICAÇÃO CIENTÍFICA:</Subsubtitulo>
                <StyledTable data={post} scientificTable />
              </Box>

              {/* Box com localizacao e tabela de detalhes*/}
              <Box
                sx={{
                  display: 'grid',
                  gap: '.5rem',
                  padding: '1rem'
                }}
              >
                <Subtitulo>LOCAL E DATA:</Subtitulo>

                {
                  //mapa
                  (post.latlng && <Map post={post} />) ||
                    //placeholder do mapa
                    (!post.latlng && (
                      <Img src={require('../../img/foto1.jpg')} alt="img" />
                    ))
                }

                <Subsubtitulo>DETALHES:</Subsubtitulo>
                <StyledTable data={post} detailsTable />
              </Box>
            </Box>

            {/* box da descricao */}
            <Divider variant="middle" />
            <Box
              className="description"
              sx={{
                display: 'grid',
                gap: '.5rem',
                padding: '1rem'
              }}
            >
              <Subtitulo>DESCRIÇÃO:</Subtitulo>
              <Paper elevation={0}>
                <Descricao>{post.description}</Descricao>
              </Paper>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ padding: '1rem' }}>
              <Subtitulo>TAGS:</Subtitulo>
              {post.tags != null &&
                post.tags.map(element => (
                  <Chip
                    color="success"
                    onClick={e => {
                      e.stopPropagation();
                    }}
                    size="small"
                    sx={{ mr: 1, mt: 1 }}
                    key={element}
                    label={'#' + element}
                  />
                ))}
            </Box>
          </Card>

          {/* card da comunidade */}
          <Card
            sx={{
              width: '100%',
              height: 'fit-content',
              backgroundColor: '#f0f0f0',
              // border: 1,
              // borderColor: 'grey.500',s
              display: 'grid',
              marginBottom: '5px'
            }}
          >
            {/* Box da listagem de comentários */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginBottom: '.15rem',
                padding: '1rem'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Subtitulo>COMUNIDADE:</Subtitulo>
              </Box>
              {/* Box de um comentário  */}
              {comments.map((comment, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '15% 85%',
                    alignItems: 'center',
                    margin: '.3rem',
                    rowGap: '.3rem'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <AccountCircleIcon
                      sx={{ margin: '10px' }}
                      fontSize="large"
                    />
                    <Typography variant="h7" color="black">
                      {comment.userName}
                    </Typography>
                  </Box>
                  {comment.type === 'comment' && (
                    <Paper elevation={0}>
                      <Descricao>{comment.description}</Descricao>
                    </Paper>
                  )}
                  {comment.type === 'contestation' && (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row'
                      }}
                    >
                      <Paper
                        sx={{ border: `1px solid #ed5132`, width: '100%' }}
                        elevation={0}
                      >
                        <Descricao>{comment.description}</Descricao>
                      </Paper>
                      {comment.contestation > 0 &&
                        localStorage.getItem('token') && (
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                              marginLeft: '5px',
                              maxWidth: '150px',
                              width: '35%'
                            }}
                            onClick={async () => {
                              comment.contestation -= 1;
                              formik.setFieldValue(
                                'contestation',
                                comment.contestation
                              );
                              let commentId = comment.id;
                              let contestation = comment.contestation;
                              console.log('commentId', comment.id);
                              try {
                                await api.post(
                                  `/posts/${id}/comments/updateContestation`,
                                  {
                                    commentId,
                                    contestation
                                  }
                                );
                              } catch (error) {
                                console.log(error);
                              }
                            }}
                          >
                            Marcar como resolvida ({comment.contestation})
                          </Button>
                        )}
                      {comment.contestation === 0 && (
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            marginLeft: '5px',
                            maxWidth: '150px',
                            width: '35%'
                          }}
                          disabled
                        >
                          Contestação resolvida
                        </Button>
                      )}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            {/* Box de postagem de comentário */}
            {localStorage.getItem('token') && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '1rem'
                }}
              >
                <Subsubtitulo>ESCREVER COMENTÁRIO:</Subsubtitulo>
                <form component="form" onSubmit={formik.handleSubmit}>
                  <TextField
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: '10px',
                      marginTop: '10px'
                    }}
                    fullWidth
                    multiline
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    label={'Seu comentário'}
                  />
                  {/* Box de botões */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      marginTop: '5px'
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      color="error"
                      sx={{
                        margin: '0 5px'
                      }}
                      onClick={() => {
                        const type = 'contestation';
                        const auxContestation = 2;
                        formik.setFieldValue('type', type);
                        formik.setFieldValue('contestation', auxContestation);
                      }}
                    >
                      Contestar
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        const type = 'comment';
                        formik.setFieldValue('type', type);
                      }}
                    >
                      Comentar
                    </Button>
                  </Box>
                </form>
              </Box>
            )}
          </Card>
        </Container>
      )}
    </Layout>
  );
}
