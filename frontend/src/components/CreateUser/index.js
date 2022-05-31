import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        Não tem uma conta? Inscrever-se
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Criar conta</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para criar uma conta de usuário preencha os campos abaixo.
          </DialogContentText>
          <OutlinedInput
            autoFocus
            margin="dense"
            id="email"
            placeholder="Endereço de email"
            type="email"
            fullWidth
            variant="standard"
            sx={{mt: 1}}
          />
          <OutlinedInput
            autoFocus
            margin="dense"
            id="user"
            placeholder="Usuário"
            type="text"
            fullWidth
            variant="standard"
            sx={{mt: 1}}
          />
          <OutlinedInput
            autoFocus
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            placeholder="Senha"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            sx={{
              width: '100%',
              mt: 1
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={handleClose}>Cancelar</Button>
          <Button variant="outlined" onClick={handleClose}>Criar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
