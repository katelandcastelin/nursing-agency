import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
  padding: 20px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export default function Contact() {
  window.scrollTo(0, 0);

  return (
    <Container>
      <div style={{width: '100%'}}>
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
            Name:
            <input type="text" name="name" />
          </FormLabel>
          <FormLabel>
            Phone:
            <input type="text" name="phone" />
          </FormLabel>
          <FormLabel>
            Email:
            <input type="text" name="email" />
          </FormLabel>
          <FormLabel>
            Message:
            <input type="text" name="message" />
          </FormLabel>
          <FormLabel>
            City and Suburb of patient:
            <input type="text" name="city and suburb" />
          </FormLabel>
          <input type="submit" value="Submit" />
        </Form>
      </FormContainer>
    </Container>
  );
};
