import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function CreatePost({ data }) {  

  const validationSchema = yup.object({
    titulo: yup
      .string('Espécie + Bioma')
      .required('Campo obrigatório'),
    specieName: yup
    .string('Nome da espécie ')
    .required('Campo obrigatório'),
    specieGenre: yup
    .string('Nome do gênero')
    .required('Campo obrigatório'),
    specieFamily: yup
    .string('Nome da família')
    .required('Campo obrigatório'),
    specieOrder: yup
    .string('Nome da Ordem')
    .required('Campo obrigatório'),
    specieClass: yup
    .string('Nome da classe')
    .required('Campo obrigatório'),
    specieDivision: yup
    .string('Nome da divisão')
    .required('Campo obrigatório'),
    specieKingdom: yup
    .string('Nome da família')
    .required('Campo obrigatório'),
    biomeName: yup
    .string('Nome do Bioma')
    .required('Campo obrigatório'),
    climateType: yup
    .string('Nome do Bioma')
    .required('Campo obrigatório'),
    city: yup
    .string('Nome do Bioma')
    .required('Campo obrigatório'),
  });

  const WithMaterialUI = () => {
    const formik = useFormik({
      initialValues: {
        email: 'foobar@example.com',
        password: 'foobar',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  }

  return (
    <Layout>
      <Container container>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off">

        </Box>
      </Container>
    </Layout>
  );
};