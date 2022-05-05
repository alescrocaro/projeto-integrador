import styled from 'styled-components';
import { Grid } from '@mui/material';

export const StyledContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  padding: 0 40px;
  transition: 0.5s;
  background-color: #f3f3f3;
  min-height: 100vh;
  max-width: 80vw;
  overflow-x: hidden;
`;