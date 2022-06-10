import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../services/api';

import avatarImage from '../../../img/avatar.png';
import postIcon from '../../../img/postIcon.svg';
import commentIcon from '../../../img/commentIcon.svg';
import contestationIcon from '../../../img/contestationIcon.svg';
import animaliaIcon from '../../../img/animaliaIcon.svg';
import plantaeIcon from '../../../img/plantaeIcon.svg';
import fungiIcon from '../../../img/fungiIcon.svg';
import protistaIcon from '../../../img/protistaIcon.svg';
import moneraIcon from '../../../img/moneraIcon.svg';

import Layout from '../../../components/Layout';
import Container from '../../../components/Container';
import {
  StyledCard,
  StyledImg,
  StyledPaper,
  StyledDiv,
  Title,
  ContentDiv,
  ContentLine,
  IconImg,
  SubTitle,
  TopContribution,
  IconImgProtista
} from './style';

export default function Profile() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  async function getUser(id) {
    const { data } = await api.get(`users/${id}`);
    setUser(data);
    //return data;
  }

  useEffect(() => {
    getUser(id);
  }, [id]);

  return (
    <Layout>
      <Container
        container
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: '1rem',
          margin: '1rem'
        }}
      >
        <StyledCard>
          <StyledImg src={avatarImage} />
          <StyledDiv>
            Nome:
            <StyledPaper>
              {user.firstName} {user.lastName}
            </StyledPaper>
          </StyledDiv>
          <StyledDiv>
            Bio:
            <StyledPaper>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum
            </StyledPaper>
          </StyledDiv>
        </StyledCard>
        <StyledCard>
          <ContentDiv>
            <Title>CONTRIBUIÇÕES PARA REINOS:</Title>
            <ContentLine>
              <IconImg src={postIcon} />
              <SubTitle>POSTS:</SubTitle>
              <TopContribution style={{ color: '#BD7100' }}>
                ANIMALIA (4)
              </TopContribution>
            </ContentLine>
            <ContentLine>
              <IconImg src={commentIcon} />
              <SubTitle>COMENTÁRIOS:</SubTitle>
              <TopContribution style={{ color: '#04b500' }}>
                PLANTAE (45)
              </TopContribution>
            </ContentLine>
            <ContentLine>
              <IconImg src={contestationIcon} />
              <SubTitle>CONTESTAÇÕES:</SubTitle>
              <TopContribution style={{ color: '#04b500' }}>
                PLANTAE (13)
              </TopContribution>
            </ContentLine>
            <Title>ESPECIALIDADES:</Title>
            <ContentLine>
              <IconImg src={animaliaIcon} />
              <SubTitle style={{ color: '#BD7100' }}>ANIMALIA:</SubTitle>
              <TopContribution>2 contribuições</TopContribution>
            </ContentLine>
            <ContentLine>
              <IconImg src={plantaeIcon} />
              <SubTitle style={{ color: '#04b500' }}>PLANTAE:</SubTitle>
              <TopContribution>2 contribuições</TopContribution>
            </ContentLine>
            <ContentLine>
              <IconImg src={fungiIcon} />
              <SubTitle style={{ color: '#496389' }}>FUNGI:</SubTitle>
              <TopContribution>2 contribuições</TopContribution>
            </ContentLine>
            <ContentLine>
              <IconImgProtista src={protistaIcon} />
              <SubTitle style={{ color: '#013c5e' }}>PROTISTA:</SubTitle>
              <TopContribution>2 contribuições</TopContribution>
            </ContentLine>
            <ContentLine>
              <IconImg src={moneraIcon} />
              <SubTitle style={{ color: '#00D1FF' }}>MONERA:</SubTitle>
              <TopContribution>2 contribuições</TopContribution>
            </ContentLine>
          </ContentDiv>
        </StyledCard>
        {console.log(user)}
      </Container>
    </Layout>
  );
}
