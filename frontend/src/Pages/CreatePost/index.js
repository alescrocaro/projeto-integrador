import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import api from '../../services/api';
import { ValidationTextField, StyledDatePicker } from './style';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import {Box, Card, Typography, Button} from '@mui/material/';
import UploadButton from './components/UploadButton';
import { useNavigate } from "react-router-dom";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



export default function CreatePost() {  

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const validationSchema = yup.object({
    title: yup
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
    .string('Tipo de clima')
    .required('Campo obrigatório'),
    city: yup
    .string('cidade')
    .required('Campo obrigatório'),
    description: yup
    .string('Descrição'),
    dateEncounter:yup
    .date()
    .required('Campo obrigatório')
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      specieName: '',
      specieGenre: '',
      specieFamily: '',
      specieOrder: '',
      specieClass: '',
      specieDivision: '',
      specieKingdom: '',
      biomeName:'',
      climateType:'',
      city: '',
      description:'',
      dateEncounter: new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      try {
        api.post('/posts', {
          title: values.title,
          specie:values.specieName,
          genus:values.specieGenre,
          family:values.specieFamily,
          order:values.specieOrder,
          className:values.specieClass,
          kingdom:values.specieKingdom,
          biome:values.biomeName,
          weather:values.climateType,
          city:values.city,
          description:values.description,
          imgUrl:'',
          userName:'Usuário', 
          phylum: values.specieDivision,
          country:'Brasil',
          dateFound: values.dateEncounter
        } )
      } catch (e) {
        setOpen(true);
      }
      navigate('/');
    },
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  

  return (
    <Layout>
      <Container container>
        <Box fullWidth sx={{minWidth: '100%', backgroundColor:'#3b3b3b', p:2, display:'flex', alignItems:'center', mt:4, borderRadius: 1}}>
          <Typography variant="h5" component="h5" color={'#ffffff'}>
            ADICIONAR NOVA OBSERVAÇÂO:
          </Typography>           
        </Box>
        <Card 
        sx={{ p:2,minWidth: '100%', marginTop:4, backgroundColor:'#f0f0f0', border: 1, borderColor: 'grey.500', mb:10 }}>
            <form onSubmit={formik.handleSubmit}>
            <Typography variant="h5" component="h5" color={'#3c9e44'} sx={{marginTop:2}}>
                Título:
              </Typography>

              <ValidationTextField 
                fullWidth
                id='title'
                name='title'
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                label={'Título'}
                color="success"
              />           

              <Typography variant="h5" component="h5" color={'#3c9e44'} sx={{marginTop:2}}>
                Informações:
              </Typography>

              <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <UploadButton label={'Imagem'}/>
                <UploadButton label={'localização'}/>
              </Box>

              <Typography variant="h5" component="h5" color={'#3c9e44'} sx={{marginTop:2}}>
                Espécie:
              </Typography>    

              <Box sx={{display:'flex', flexDirection:"row", justifyContent:'space-between', mt:1}}>
                <ValidationTextField     
                  sx={{ width: '48%' }}
                  id='specieName'
                  name='specieName'
                  value={formik.values.specieName}
                  onChange={formik.handleChange}
                  error={formik.touched.specieName && Boolean(formik.errors.specieName)}
                  helperText={formik.touched.specieName && formik.errors.specieName}
                  label={'Nome da espécie'}
                  color="success"
                />  
                <ValidationTextField 
                  id='specieClass'
                  name='specieClass'
                  value={formik.values.specieClass}
                  onChange={formik.handleChange}
                  error={formik.touched.specieClass && Boolean(formik.errors.specieClass)}
                  helperText={formik.touched.specieClass && formik.errors.specieClass}
                  label={'Nome da classe'}
                  color="success"
                  sx={{ width: '48%' }}
                />                               
              </Box>

              <Box sx={{display:'flex', flexDirection:"row", justifyContent:'space-between', mt:4}}>
                <ValidationTextField   
                  id='specieGenre'
                  name='specieGenre'  
                  sx={{ width: '48%'}}    
                  value={formik.values.specieGenre}
                  onChange={formik.handleChange}
                  error={formik.touched.specieGenre && Boolean(formik.errors.specieGenre)}
                  helperText={formik.touched.specieGenre && formik.errors.specieGenre}
                  label={'Nome do gênero'}
                  color="success"
                />  
                <ValidationTextField 
                  id='specieDivisione'
                  name='specieDivision' 
                  value={formik.values.specieDivision}
                  onChange={formik.handleChange}
                  error={formik.touched.specieDivision && Boolean(formik.errors.specieDivision)}
                  helperText={formik.touched.specieDivision && formik.errors.specieDivision}
                  label={'Nome da divisão'}
                  color="success"
                  sx={{ width: '48%' }}
                />                               
              </Box>

              <Box sx={{display:'flex', flexDirection:"row", justifyContent:'space-between', mt:4}}>
                <ValidationTextField    
                  id='specieFamily'
                  name='specieFamily' 
                  sx={{ width: '48%' }}    
                  value={formik.values.specieFamily}
                  onChange={formik.handleChange}
                  error={formik.touched.specieFamily && Boolean(formik.errors.specieFamily)}
                  helperText={formik.touched.specieFamily && formik.errors.specieFamily}
                  label={'Nome da família'}
                  color="success"
                />  
                <ValidationTextField 
                  id='specieKingdom'
                  name='specieKingdom' 
                  value={formik.values.specieKingdom}
                  onChange={formik.handleChange}
                  error={formik.touched.specieKingdom && Boolean(formik.errors.specieKingdom)}
                  helperText={formik.touched.specieKingdom && formik.errors.specieKingdom}
                  label={'Nome do reino'}
                  color="success"
                  sx={{ width: '48%' }}
                />                               
              </Box>

              <ValidationTextField 
                  id='specieOrder'
                  name='specieOrder'     
                  sx={{ width: '48%', mt:4 }}    
                  value={formik.values.specieOrder}
                  onChange={formik.handleChange}
                  error={formik.touched.specieOrder && Boolean(formik.errors.specieOrder)}
                  helperText={formik.touched.specieOrder && formik.errors.specieOrder}
                  label={'Nome da ordem'}
                  color="success"
                />  

              <Typography variant="h5" component="h5" color={'#3c9e44'} sx={{marginTop:4}}>
                Local:
              </Typography>

              <Box sx={{display:'flex', flexDirection:"row", justifyContent:'space-between', mt:1}}>
                <ValidationTextField     
                  id='biomeName'
                  name='biomeName' 
                  sx={{ width: '48%' }}    
                  value={formik.values.biomeName}
                  onChange={formik.handleChange}
                  error={formik.touched.biomeName && Boolean(formik.errors.biomeName)}
                  helperText={formik.touched.biomeName && formik.errors.biomeName}
                  label={'Nome do bioma'}
                  color="success"
                />  
                <ValidationTextField 
                  id='city'
                  name='city'
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                  label={'Cidade'}
                  color="success"
                  sx={{ width: '48%' }}
                />                               
              </Box>

              <Box sx={{display:'flex', flexDirection:"row", mt:4}}>

                <ValidationTextField 
                    id='climateType'
                    name='climateType'
                    value={formik.values.climateType}
                    onChange={formik.handleChange}
                    error={formik.touched.climateType && Boolean(formik.errors.climateType)}
                    helperText={formik.touched.climateType && formik.errors.climateType}
                    label={'Tipo de clima'} 
                    color="success"
                    sx={{ width: '48%', mr:8}}
                /> 

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StyledDatePicker
                    label="Data do encontro"
                    id="dateEncounter"
                    name="dateEncounter"
                    backgroundColor="#fff"
                    value={formik.values.dateEncounter}
                    onChange={ (value) => {
                      formik.setFieldValue('dateEncounter', value)
                     }
                    }
                    renderInput={(params) => 
                    <ValidationTextField 
                    color="success" {...params} 
                    helperText={formik.touched.dateEncounter && formik.errors.dateEncounter }
                    error={formik.touched.dateEncounter && Boolean(formik.errors.dateEncounter)}/>}
                  />
                </LocalizationProvider>
              </Box>


              <Typography variant="h5" component="h5" color={'#3c9e44'} sx={{marginTop:4}}>
                Descrição:
              </Typography>

              <ValidationTextField 
                id='description'
                name='description'
                fullWidth
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
                label={'Descrição'}
                color="success"
                sx={{ mt:4 }}
                multiline
                rows={4}
              />
              
              <Box
                sx={{display:'flex', justifyContent:'flex-end', mt:5}}
              >
                <Button variant="text" sx={{mr:2,color:'#000000', fontWeight:'bold'}}>Cancelar</Button>
                <Button type="submit"  variant="contained" color='success' sx={{fontWeight:'bold'}}> Publicar</Button>
              </Box>

            </form>
        </Card>
        <Button onClick={() => {setOpen(true)}} variant="text" sx={{mr:2,color:'#000000', fontWeight:'bold'}}>BOTAO</Button>
      </Container>
    </Layout>
  );
};