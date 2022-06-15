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

import { Paper } from '@mui/material';

import './style.css';

export default function Profile() {
  const [profileData, setProfileData] = useState({});
  const { id } = useParams();

  async function getUser(id) {
    const { data } = await api.get(`users/${id}`);
    setProfileData(data);
    //return data;
  }

  useEffect(() => {
    getUser(id);
  }, [id]);

  return (
    <Layout>
      <Container container className="container">
        <div className="styledCard main">
          <img className="styledAvatar" src={avatarImage} alt="avatar" />
          <div className="styledDiv">
            Nome:
            <Paper className="styledPaper">
              {profileData.firstName} {profileData.lastName}
            </Paper>
          </div>
          <div className="styledDiv">
            Bio:
            <Paper className="styledPaper">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum
            </Paper>
          </div>
        </div>
        <div className="styledCard infos">
          <div className="contentDiv">
            <h3>CONTRIBUIÇÕES PARA REINOS:</h3>
            <div className="contentLine">
              <img className="icon" src={postIcon} alt="post icon" />
              <h4>POSTS:</h4>
              <h4 className="topContribution" style={{ color: '#c71700' }}>
                ANIMALIA (4)
              </h4>
            </div>
            <div className="contentLine">
              <img className="icon" src={commentIcon} alt="comment icon" />
              <h4>COMENTÁRIOS:</h4>
              <h4 className="topContribution" style={{ color: '#04b500' }}>
                PLANTAE (45)
              </h4>
            </div>
            <div className="contentLine">
              <img
                className="icon"
                src={contestationIcon}
                alt="contestation icon"
              />
              <h4>CONTESTAÇÕES:</h4>
              <h4 className="topContribution" style={{ color: '#04b500' }}>
                PLANTAE (13)
              </h4>
            </div>
            <h3>ESPECIALIDADES:</h3>
            <div className="contentLine">
              <img className="icon" src={animaliaIcon} alt="animalia icon" />
              <h4 style={{ color: '#c71700' }}>ANIMALIA:</h4>
              <h4 className="topContribution">2 contribuições</h4>
            </div>
            <div className="contentLine">
              <img className="icon" src={plantaeIcon} alt="plantae icon" />
              <h4 style={{ color: '#04b500' }}>PLANTAE:</h4>
              <h4 className="topContribution">2 contribuições</h4>
            </div>
            <div className="contentLine">
              <img className="icon" src={fungiIcon} alt="fungi icon" />
              <h4 style={{ color: '#7a7a7a' }}>FUNGI:</h4>
              <h4 className="topContribution">2 contribuições</h4>
            </div>
            <div className="contentLine">
              <img
                className="icon"
                Protista
                src={protistaIcon}
                alt="protista icon"
              />
              <h4 style={{ color: '#d1a400' }}>PROTISTA:</h4>
              <h4 className="topContribution">2 contribuições</h4>
            </div>
            <div className="contentLine">
              <img className="icon" src={moneraIcon} alt="monera icon" />
              <h4 style={{ color: '#8f00d1' }}>MONERA:</h4>
              <h4 className="topContribution">2 contribuições</h4>
            </div>
          </div>
        </div>
        {console.log(profileData)}
      </Container>
    </Layout>
  );
}
