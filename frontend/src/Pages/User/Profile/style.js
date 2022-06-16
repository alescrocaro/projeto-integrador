import styled from 'styled-components';

import { Card as MUICard, Paper as MUIPaper } from '@mui/material';

export const StyledCard = styled(MUICard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0 !important;
  width: 100%;
`;

export const StyledPaper = styled(MUIPaper)`
  text-align: center;
  min-width: 100%;
  padding: 1rem 0;
`;

export const StyledImg = styled.img`
  width: 50%;
  margin: 4rem 0;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 90%;
  max-width: 90%;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  line-height: 29px;
  padding: 0 2rem;
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-left;

  min-width: 100%;
  min-height: 100%;
`;

export const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`;

export const IconImg = styled.img`
  max-width: 3rem;
  padding-left: 2rem;
`;
export const IconImgProtista = styled.img`
  max-width: 2.5rem;
  padding-left: 1.7rem;
`;
export const SubTitle = styled.h4`
  font-size: 1rem;
  line-height: 29px;
  padding: 0 2rem;
  font-weight: 300;
  line-height: 0.2rem;
  letter-spacing: 0em;
  text-align: left;
`;

export const TopContribution = styled.h4`
  font-size: 1rem;
  line-height: 29px;
  font-weight: 600;
  line-height: 0.2rem;
  letter-spacing: 0em;
  text-align: left;
`;
