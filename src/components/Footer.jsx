import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HFNLogo from '../images/logo/logo.png';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
  height: 350px;
  background: linear-gradient(to right, #9dccec, #6bb1bf);
  color: #fff;
  padding-top: 4%;
  margin-top: 80px;
  text-align: center;
  display: flex;
`;

const LogoContainer = styled.div`
  display: flex;
  height: 50%;
  margin-left: 4%;
`;

const Logo = styled.img`

`;

const ContactDetailsContainer = styled.div`
  text-align: left;
  font-size: x-large;
  margin-left: 4%;
`;

const ContactLink = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-bottom: 10px;
  color: #fff;
  align-items: center;
`;

export default function Footer() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={HFNLogo} />
      </LogoContainer>
      <ContactDetailsContainer>
        <h4 style={{marginTop: '0', marginBottom: '25px'}}>Contact:</h4>
        <ContactLink>
          <EmailTwoToneIcon style={{marginRight: '10px'}} />
          info@hfn.co.za
        </ContactLink>
        <ContactLink>
          <CallTwoToneIcon style={{marginRight: '10px'}} />
          +27 21 762 3611
        </ContactLink>
        <ContactLink>
          <CallTwoToneIcon style={{marginRight: '10px'}} />
          +27 83 293 5627
        </ContactLink>
        <ContactLink>
          <FacebookIcon style={{marginRight: '10px'}} />
          Facebook
        </ContactLink>
        <ContactLink>
          <InstagramIcon style={{marginRight: '10px'}} />
          Instagram
        </ContactLink>
      </ContactDetailsContainer>
    </Container>
  )
}