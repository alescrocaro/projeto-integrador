import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useToken } from "../../Context/AuthContext";
import { useFormik } from "formik";
import * as yup from "yup";

import { Box, Card, Typography, Button, TextField } from "@mui/material/";
import StyledTable from "../../components/Table";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import HeaderPage from "../../components/HeaderPage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Descricao, Img, Subsubtitulo, Subtitulo } from "./style";
import { Divider } from "@material-ui/core";

import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

import Map from "./components/Map";
import ImageSlider from "./components/imageSlider";

export default function SpecificPost() {
  const { user } = useToken();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  async function getPost(id) {
    const { data } = await api.get(`posts/${id}`);
    console.log("postdata", data);
    setPost(data);
    //data.latlng está em geojson (lnglat)
  }

  async function getComments(id) {
    console.log("getComments");
    const { data } = await api.get(`posts/${id}/comments`);
    setComments(data);
    console.log(data);
    return data;
  }

  const resolveContestation = (commentId) => {
    console.log("onclick");
    api
      .post(`/resolve-contestation`, {
        commentId: commentId,
        userId: user.id,
      })
      .then(() => {
        console.log("depois de postar");
        getComments(post.id);
      })
      .catch((error) => {
        console.log("erro: ", error);
      });
  };

  const scheme = yup.object({
    description: yup.string("Comentário").required("Campo obrigatório").trim(),
    type: yup.string("Tipo").required("Campo obrigatório"),
    userName: yup.string("Nome").required("Campo obrigatório"),
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      userName: "userName",
      description: "",
      type: "",
      postId: id,
    },

    onSubmit: async (values) => {
      const { userName, description, type, contestationResolvedAmount } =
        values;

      const postId = id;
      try {
        await api.post(`/posts/${postId}/comments`, {
          userName,
          description,
          type,
          userId: user.id,
        });
        getComments(id);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const username = post.User ? post.User.name : "user";

  useEffect(() => {
    getPost(id);
    getComments(id);
  }, [id]);

  return (
    <Layout>
      {!!post && (
        <Container
          container
          sx={{
            display: "grid",
            alignItems: "start",
            gap: "2vh",
            margin: "2vh 0",
          }}
        >
          {/* titulo do post */}
          <HeaderPage
            title={post.title}
            userName={username}
            dateFound={post.dateFound}
          />

          {/* card do post */}
          <Card
            sx={{
              width: "100%",
              height: "fit-content",
              backgroundColor: "#f0f0f0",
              // border: 1,
              // borderColor: 'grey.500',s
              display: "grid",
              marginBottom: "5px",
            }}
          >
            {/* Box das infos com fotos e tabelas */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
                alignItems: "start",
                marginBottom: ".15rem",
              }}
            >
              {/* Box com foto do especime e tabela de classificacao*/}
              <Box
                sx={{
                  display: "grid",
                  gap: ".5rem",
                  padding: "1rem",
                }}
              >
                <Subtitulo>ESPÉCIME:</Subtitulo>

                {post.Images != null && post.Images?.length > 0 && (
                  <ImageSlider images={post.Images} />
                )}
                {post.Images != null && post.Images?.length === 0 && (
                  <Img src={require("../../img/placeholder.png")} alt="img" />
                )}
                <Subsubtitulo>CLASSIFICAÇÃO CIENTÍFICA:</Subsubtitulo>
                <StyledTable data={post} scientificTable />
              </Box>

              {/* Box com localizacao e tabela de detalhes*/}
              <Box
                sx={{
                  display: "grid",
                  gap: ".5rem",
                  padding: "1rem",
                }}
              >
                <Subtitulo>LOCAL E DATA:</Subtitulo>

                {
                  //mapa
                  (post.latlng && <Map post={post} />) ||
                    //placeholder do mapa
                    (!post.latlng && (
                      <Img src={require("../../img/foto1.jpg")} alt="img" />
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
                display: "grid",
                gap: ".5rem",
                padding: "1rem",
              }}
            >
              <Subtitulo>DESCRIÇÃO:</Subtitulo>
              <Paper elevation={0}>
                <Descricao>{post.description}</Descricao>
              </Paper>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ padding: "1rem" }}>
              <Subtitulo>TAGS:</Subtitulo>
              {post.tags != null &&
                post.tags.map((element) => (
                  <Chip
                    color="success"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    size="small"
                    sx={{ mr: 1, mt: 1 }}
                    key={element}
                    label={"#" + element}
                  />
                ))}
            </Box>
          </Card>

          {/* card da comunidade */}
          <Card
            sx={{
              width: "100%",
              height: "fit-content",
              backgroundColor: "#f0f0f0",
              // border: 1,
              // borderColor: 'grey.500',s
              display: "grid",
              marginBottom: "5px",
            }}
          >
            {/* Box da listagem de comentários */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginBottom: ".15rem",
                padding: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Subtitulo>COMUNIDADE:</Subtitulo>
              </Box>
            </Box>

            {/* Box de um comentário  */}
            {comments.map((comment, index) => (
              <Box
                key={index}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "15% 85%",
                  alignItems: "center",
                  margin: ".3rem",
                  rowGap: ".3rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon sx={{ margin: "10px" }} fontSize="large" />
                  <Typography variant="h7" color="black">
                    {comment.User == null ? "user" : comment.User.name}
                  </Typography>
                </Box>
                {comment.type === "COMMENT" && (
                  <Paper elevation={0}>
                    <Descricao>{comment.description}</Descricao>
                  </Paper>
                )}
                {comment.type === "CONTESTATION" && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Paper
                      sx={{ border: `1px solid #ed5132`, width: "100%" }}
                      elevation={0}
                    >
                      <Descricao>{comment.description}</Descricao>
                    </Paper>
                    {!comment.resolvedAmount && user && (
                      <Button
                        disabled={comment.UserResolvedContestations?.some(
                          (element) => {
                            return element.userId === user.id;
                          }
                        )}
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                          marginLeft: "5px",
                          maxWidth: "150px",
                          width: "35%",
                        }}
                        onClick={() => resolveContestation(comment.id)}
                      >
                        Marcar como resolvido
                      </Button>
                    )}
                    {comment.UserResolvedContestations?.length && (
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          marginLeft: "5px",
                          maxWidth: "150px",
                          width: "35%",
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

            {/* Box de postagem de comentário */}
            {user && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                <Subsubtitulo>ESCREVER COMENTÁRIO:</Subsubtitulo>
                <form component="form" onSubmit={formik.handleSubmit}>
                  <TextField
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                    fullWidth
                    multiline
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    label={"Seu comentário"}
                  />
                  {/* Box de botões */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      color="error"
                      sx={{
                        margin: "0 5px",
                      }}
                      onClick={() => formik.setFieldValue("type", "CONTESTATION")}
                    >
                      Contestar
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={() => formik.setFieldValue("type", "COMMENT")}
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
