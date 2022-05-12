import styled from 'styled-components';

const StyledImage = styled.img`
height: 80px;
width: fit-content;
`;

const StyledImage2 = styled.img`
  height: 35px;
  width: fit-content;s
`;

const Projeto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const Pfooter = styled.p`
  font-weight: 500;
  color: white;
  font-size: .75em;
  margin: 0;
`;

const Membros = styled.div`
  text-align: center;
`
const UTFPR = styled.div`
  text-align: right;
`
export {StyledImage, StyledImage2, Projeto, Pfooter, Membros, UTFPR}