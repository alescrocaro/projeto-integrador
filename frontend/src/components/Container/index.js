import React from 'react';
import { StyledContainer } from './style';

const Container = ({ children, ...props }) => {
  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;
