///edit
import { styled } from '@mui/material/styles';
import { Autocomplete } from '@mui/material/';

export default styled(Autocomplete)({
  '& label.Mui-focused': {
    color: '#14aa6b',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    '&:hover fieldset': {
      borderColor: '#999',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#14aa6b',
    },
  },
});
///edit