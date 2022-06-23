import HeaderPage from '../../components/HeaderPage';
import StepDescricao from './components/StepDescricao';
import StepEspecime from './components/StepEspecime';
import StepLocal from './components/StepLocal';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import { Card, Stepper, Step, StepLabel, CircularProgress } from '@mui/material/';

import useTrait from '../../utils/useTrait';

import * as yup from 'yup';
import { useContext, useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { api } from '../../services/api';

import { useNavigate } from 'react-router-dom';
import { useToken } from '../../Context/AuthContext';

export default function CreatePost() {
  const {user} = useToken()
  const navigate = useNavigate();
  
  const createPost = async (v) => {
    try {
      const res = await api.post('/posts', {
        title: v.title,
        description: v.description,
        tags: v.tags,
        dateFound: v.dateFound,
        
        contested: 0,
        userId: user.id,
        userName: 'Usuário',

        kingdom: v.kingdom,
        phylum: v.phylum || 'Não Especificado',
        className: v.className || 'Não Especificado',
        order: v.order || 'Não Especificado',
        family: v.family || 'Não Especificado',
        genus: v.genus || 'Não Especificado',
        specie: v.specie || 'Não Especificado',
        imgUrl: '',
  
        biome: v.biome,
        weather: v.weather,
        country: v.country,
        city: v.city,
        latlng: v.latlng, //{lat: double, lng: double}
      });

      //upload das imgs
      if (v.images.length > 0) {
        const formData = new FormData();
        
        v.images.forEach(element => {
          formData.append('specieImages', element.currentFile);
        });
        
        api.post(`/updatePostImage/${res.data}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      }

      //ir pra pagina do post
      navigate(`/posts/${res.data}`);

    } catch(e) {
      alert('ERRO: Algo inexperado aconteceu, tente novamente mais tarde! :(');
      navigate('/');
    }
};
    

  const [activeStep, setActiveStep] = useState(0);
  const formValues = useTrait({});

  const nextStep = (v) => {
    formValues.set({...formValues.get(), ...v});
    setActiveStep(activeStep + 1);
  };
  
  const prevStep = (v) => {
    if(activeStep <= 0) return; //nao permitir voltar pra abaixo de 0
    formValues.set({...formValues.get(), ...v});
    setActiveStep(activeStep - 1);
  }

  //enviar requisição pra api
  useEffect(() => {
    if(activeStep > 2){
      // console.log(formValues.get())
      createPost(formValues.get());
    }
  }, [activeStep]);

  return (
    <Layout>
      <Container container>

        {/* titulo da pagina */}
        <HeaderPage
            title='ADICIONANDO NOVA OBSERVAÇÃO:'
        />
        
        {/* Conteudo */}
        <Card
          sx={{
            width: '100%',
            height: 'fit-content',
            marginBottom: '5px',
            padding: '16px',
            backgroundColor: '#f0f0f0',
            display: 'block',
          }}
        >
          
          <Stepper activeStep={activeStep} alternativeLabel>
            <Step key={1}><StepLabel><p style={{marginTop: '-10px'}}>Descrição</p></StepLabel></Step>
            <Step key={2}><StepLabel><p style={{marginTop: '-10px'}}>Espécime</p></StepLabel></Step>
            <Step key={3}><StepLabel><p style={{marginTop: '-10px'}}>Local</p></StepLabel></Step>
          </Stepper>

          {activeStep <= 0 && <StepDescricao nextStep={nextStep}/>}
          {activeStep === 1 && <StepEspecime nextStep={nextStep} prevStep={prevStep}/>}
          {activeStep === 2 && <StepLocal nextStep={nextStep} prevStep={prevStep}/>}
          {activeStep > 2 && 
            <div style={{
              width: '100%',
              display: 'block',
              padding: '32px 0'
            }}>
              <div style={{width: '100%',display: 'flex',justifyContent: 'center'}}><CircularProgress color="success" sx={{margin: '0 auto'}}/></div>
              <p style={{fontFamily: 'Montserrat, sans-serif', color: '#333', textAlign: 'center'}}>Enviando...</p>
            </div>
          }

        </Card>
      </Container>
    </Layout>
  );
}
