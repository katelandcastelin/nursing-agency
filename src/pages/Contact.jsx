import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: baseline;
    margin-left: 10%;
  }  
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

const ContactTextContainer = styled.div`
  width: 50%;
  margin-left: 10%;

  @media (max-width: 1400px) {
    margin-left: 7%;
  }

  @media (max-width: 850px) {
    width: 90%;
  }  
`;

const ContactDetailsContainer = styled.div`
  text-align: left;
  font-size: large;
  display: inline-block;
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
  width: 50%;
  margin-top: 15px;
  margin-left: 25px;

  @media (max-width: 1400px) {
    margin-left: 9%;
  }

  @media (max-width: 1150px) {
    margin-left: 5%;
  }

  @media (max-width: 1050px) {
    width: 65%;
  }

  @media (max-width: 850px) {
    width: 90%;
    margin-top: 50px;
  }
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

  const [isSent, setIsSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [isAlertClosed, setIsAlertClosed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleAlertClose = () => {
    setIsAlertClosed(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formValues.name && formValues.phone && formValues.email && formValues.message) {
      setIsSent(true);
      setShowAlert(true);
      setFormValues({});
      setIsAlertClosed(false); 
    } else {
      alert('Please input empty fields!');
    }
  };

  const CustomAlert = ({ message }) => {
    return (
      <div className="custom-alert">
        <p>{message}</p>
      </div>
    );
  };

  return (
    <Container>
      <ContactTextContainer>
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
          <ContactLink to='https://www.instagram.com/hfnnursingagency/' target='_blank'>
            <InstagramIcon style={{marginRight: '10px', fontSize: '30px'}} />
          </ContactLink>
        </div>
      </ContactTextContainer>

      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormLabel>
            <div>
              Name: <Subtitle>(required)</Subtitle>
            </div>
            <FormInput type="text" name="name" value={formValues.name || ''} onChange={handleInputChange} />
          </FormLabel>
          <FormLabel>
            <div>
              Phone: <Subtitle>(required)</Subtitle>
            </div>
            <FormInput type="tel" name="phone" value={formValues.phone || ''} onChange={handleInputChange} />
          </FormLabel>
          <FormLabel>
            <div>
              Email: <Subtitle>(required)</Subtitle>
            </div>
            <FormInput type="email" name="email" value={formValues.email || ''} onChange={handleInputChange} />
          </FormLabel>
          <FormLabel>
            <div>
              Message: <Subtitle>(required)</Subtitle>
            </div>
            <FormInput
              type="text"
              name="message"
              style={{height: '90px'}}
              value={formValues.message || ''}
              onChange={handleInputChange}
            />
          </FormLabel>
          <FormLabel>
            <div>
              City and Suburb of patient: <Subtitle>(optional)</Subtitle>
            </div>
            <FormInput type="text" name="cityAndSuburb" value={formValues.cityAndSuburb || ''} onChange={handleInputChange} />
          </FormLabel>
          <FormSubmitButton type="submit" value={isSent && !isAlertClosed ? "Sent" : "Send"} />
        </Form>

        {showAlert && !isAlertClosed && (
          <div>
            <CustomAlert message="Your message has been sent!" />
            <div onClick={handleAlertClose}>x</div>
          </div>
        )}
      </FormContainer>
    </Container>
  );
};
