import styled from 'styled-components';
import { Grid } from '@mui/material';

export const StyledContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  padding: 0 40px;
  background-color: pink;
  min-height: 100vh;
  max-width: 80vw;
  overflow-x: hidden;
`;