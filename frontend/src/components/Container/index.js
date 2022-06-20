import React from 'react';
import { StyledContainer } from './style';

const Container = ({ children, ...props }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <StyledContainer {...props}>{children}</StyledContainer>
    </div>
  );
};

export default Container;
