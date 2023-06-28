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

const SignUpContainer = styled.div`
  font-size: large;
  width: 20%;
`;

const InputContainer = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailInputField = styled.input`
  padding: 9px 12px;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid #a7c0d1;
  width: 70%;
  font-size: large;

  &::placeholder {
    color: #b2c8d6;
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
      <SignUpContainer>
        Sign up with your email address to receive news and updates
        <InputContainer>
          <EmailInputField type="email" id="emails" name="emails" placeholder="Enter your email" multiple />
          <SubmitButton type="submit"/>
        </InputContainer>
        We respect your privacy
      </SignUpContainer>
    </Container>
  )
}
