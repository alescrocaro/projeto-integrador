import * as React from 'react';

import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { api } from '../../../services/api';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function SignUpDialog() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  async function redirect() {
    navigate('/login');
  }

  const scheme = Yup.object().shape({
    email: Yup.string().required('É necessário inserir um endereço de email!'),
    name: Yup.string().required('É necessário inserir seu nome'),
    password: Yup.string()
      .min(6, ({ min }) => `A senha deve ter no mínimo ${min} caracteres`)
      .required('É necessário inserir uma senha!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas não são iguais!')
      .required('É necessário confirmar sua senha!')
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      name: '',
      password: '',
      bio: '',
      confirmPassword: ''
    },
    onSubmit: async values => {
      try {
        let { name, email, password, bio } = values;
        email = email.toLowerCase();

        await api.post('/users', {
          name,
          email,
          password,
          bio
        });

        handleClose();
        alert(
          `Sua conta foi criada. Obrigado por se juntar ao Invasores, ${name}!`
        );

        redirect();
      } catch (error) {
        console.log(error)
        alert(error.response.data.message);
        console.log(error);
      }
    }
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Não tem um conta? Cadastre-se!
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Criar conta</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Para criar uma conta de usuário preencha os campos abaixo.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              variant="outlined"
              label="Nome"
              error={
                formik.touched.name && Boolean(formik.errors.name)
              }
              helperText={formik.touched.name && formik.errors.name}
              onChange={formik.handleChange}
              value={formik.values.name}
              fullWidth
              sx={{ mt: 1 }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              variant="outlined"
              label="Endereço de email"
              type="email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
              value={formik.values.email}
              fullWidth
              sx={{ mt: 1 }}
            />
            <TextField
              autoFocus
              id="password"
              label="Senha"
              type="password"
              variant="outlined"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onChange={formik.handleChange}
              value={formik.values.password}
              fullWidth
              sx={{ mt: 1 }}
            />
            <TextField
              autoFocus
              id="confirmPassword"
              label="Confirmar senha"
              type="password"
              variant="outlined"
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              fullWidth
              sx={{ mt: 1 }}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="outlined" type="submit">
              Criar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
