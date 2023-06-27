import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HFNLogo from '../images/logo/logo.png';

const Container = styled.div`
  height: 350px;
  background: linear-gradient(to right, #9dccec, #6bb1bf);
  color: #fff;
  padding: 40px 20px;
  margin-top: 80px;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  left: 50px;
`;

const Logo = styled.img`
  
`;

const ContactDetailsContainer = styled.div`
  text-align: left;
  font-size: large;
  position: absolute;
  margin-top: 180px;
  left: 60px;
`;

const ContactLink = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-bottom: 10px;
  color: #fff;
`;

export default function Footer() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={HFNLogo} />
      </LogoContainer>
      <ContactDetailsContainer>
        <h4 style={{marginTop: '0', marginBottom: '15px'}}>Contact:</h4>
        <ContactLink>info@hfn.co.za</ContactLink>
        <ContactLink>+27 21 762 3611</ContactLink>
        <ContactLink>+27 83 293 5627</ContactLink>
      </ContactDetailsContainer>
      <p>&copy; {new Date().getFullYear()} HFN Nursing Agency. All rights reserved.</p>
    </Container>
  )
}