import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function User(){
  return(
    <>
      <Link to='/login' style={{ textDecoration: 'none'}} >
        <Button variant='text' color='inherit' size='large' sx={{color:'white'}}>Login</Button>
      </Link>
      <AccountCircle /> 
    </>
  )
}