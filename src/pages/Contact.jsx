import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
  padding: 20px;
  display: flex;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;
`;

const ContactDetailsContainer = styled.div`
  text-align: left;
  font-size: large;

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
  color: #555;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: baseline;
  width: 100%;
  margin-top: 15px;
  margin-left: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  line-height: 2em;
`;

const FormInput = styled.input`
  padding: 9px 12px;
  margin-right: 5px;
  border-radius: 7px;
  border: 1px solid #a7c0d1;
  width: 70%;
  font-size: medium;

  &::placeholder {
    color: #b2c8d6;
  }
`;

const FormSubmitButton = styled.input`
  width: 90px;
  margin-top: 5px;
  padding: 10px;
  color: #555;
  background-color: #eaeaea;
  border-radius: 7px;
  border: 1px solid #c3d4de;
  cursor: pointer;
  font-size: medium;

  &:hover {
    background-color: #d3e6f1;
  }
`;

const Subtitle = styled.span`
  font-size: 1em;
  margin-left: 5px;
  color: #b2c8d6;
`;

export default function Contact() {
  window.scrollTo(0, 0);

  return (
    <Container>
      <div style={{width: '100%', marginLeft: '8%'}}>
        <Title>Contact us</Title>
        <Description>
          Use the form to enquire about our services or request a free call back
        </Description>
        <ContactDetailsContainer>
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
        </ContactDetailsContainer>
        <Description>
          Monday - Sunday 00:00 - 00:00
        </Description>
        <Description style={{lineHeight: '1.5em'}}>
          53 Wetton Road,<br />Kenilworth,<br />Cape Town,<br />7708
        </Description>
        <div style={{display: 'flex'}}>
          <ContactLink>
            <FacebookIcon style={{marginRight: '10px', fontSize: '30px'}} />
          </ContactLink>
          <ContactLink>
            <InstagramIcon style={{marginRight: '10px', fontSize: '30px'}} />
          </ContactLink>
        </div>
      </div>

      <FormContainer>
        <Form>
          <FormLabel>
            <div>
            Name: <Subtitle>(required)</Subtitle>
            </div>
            <FormInput type="text" name="name" />
          </FormLabel>
          <FormLabel>
            <div>
              Phone: <Subtitle>(required)</Subtitle>
            </div>
            <FormInput type="text" name="phone" />
          </FormLabel>
          <FormLabel>
            <div>
              Email: <Subtitle>(required)</Subtitle>
            </div>
            <FormInput type="text" name="email" />
          </FormLabel>
          <FormLabel>
            <div>
              Message: <Subtitle>(required)</Subtitle>
            </div>
            <FormInput type="text" name="message" style={{height: '90px'}} />
          </FormLabel>
          <FormLabel>
            <div>
              City and Suburb of patient: <Subtitle>(optional)</Subtitle>
            </div>
            <FormInput type="text" name="city and suburb" />
          </FormLabel>
          <FormSubmitButton type="submit" value="Send" />
        </Form>
      </FormContainer>
    </Container>
  );
};
