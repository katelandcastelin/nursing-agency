import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HFNLogo from '../images/logo/logo.png';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
  background: linear-gradient(to right, #9dccec, #6bb1bf);
  color: #fff;
  padding: 4% 10%;
  margin-top: 80px;
  text-align: center;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1380px) {
    padding: 4% 5%;
  }

  @media (max-width: 1195px) {
    padding: 4% 4%;
  }

  @media (max-width: 1170px) {
    padding: 5% 5%;
  }

  @media (max-width: 1055px) {
    padding: 5% 4%;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    display: block;
    padding-bottom: 10%;
    padding-top: 6%;
  }

  @media (max-width: 535px) {
    flex-direction: column;
    display: block;
    padding-bottom: 10%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  height: 50%;

  @media (max-width: 1060px) {
    height: 40%;
  }

  @media (max-width: 820px) {
    height: 35%;
  }

  @media (max-width: 750px) {
    margin-left: 10%;
  }

  @media (max-width: 630px) {
    margin-left: 8%;
    height: 25%;
  }
`;

const ContactDetailsContainer = styled.div`
  text-align: left;
  font-size: large;
  margin-left: 25%;

  @media (max-width: 1060px) {
    margin-left: 20%;
  }

  @media (max-width: 750px) {
    margin-left: 17%;
  }

  @media (max-width: 535px) {
    margin-left: 10%;
  }

  @media (max-width: 630px) {
    margin-left: 8%;
  }
`;

const ContactLink = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-bottom: 10px;
  color: #fff;
  align-items: center;
`;

const SignUpContainer = styled.div`
  font-size: large;
  margin-left: 15%;
  width: 75%;

  @media (max-width: 1170px) {
    margin-left: 18%;
  }

  @media (max-width: 1060px) {
    margin-left: 12%;
  }

  @media (max-width: 750px) {
    margin-top: 35px;
    width: 80%;
    margin-left: 10%;
  }

  @media (max-width: 1035px) {
    width: 85%;
  }
`;

const InputContainer = styled.div`
  margin: 10px 0;

  @media (max-width: 990px) {
    margin: 15px;
  }
`;

const EmailInputField = styled.input`
  padding: 9px 12px;
  margin-right: 5px;
  border-radius: 7px;
  border: 1px solid #a7c0d1;
  width: 70%;
  font-size: medium;

  &::placeholder {
    color: #b2c8d6;
  }

  @media (max-width: 990px) {
    margin-bottom: 10px;
    width: 80%;
  }
`;

const SubmitButton = styled.input`
  color: #949494;
  background-color: #f7f7f7;
  padding: 5px 13px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: medium;

  &:hover {
    background-color: #d3e6f1;
  }
`;

export default function Footer() {
  return (
    <Container>
      <div style={{display: 'flex', width: '100%'}}>
      <LogoContainer>
        <img src={HFNLogo} />
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
        <h4 style={{marginTop: '25px'}}>Monday - Sunday 00:00 - 00:00</h4>
      </ContactDetailsContainer>
      </div>
      <div style={{width: '100%'}}>
      <SignUpContainer>
        Sign up with your email address to receive news and updates
        <InputContainer>
          <EmailInputField type="email" id="emails" name="emails" placeholder="Enter your email" multiple />
          <SubmitButton type="submit"/>
        </InputContainer>
        We respect your privacy
      </SignUpContainer>
      </div>
    </Container>
  )
}
