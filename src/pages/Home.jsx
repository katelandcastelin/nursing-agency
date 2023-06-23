import React from 'react';
import styled from 'styled-components';
import ServiceImage1 from '../images/service-preview/service-preview-1.jpeg';
import ServiceImage2 from '../images/service-preview/service-preview-2.jpeg';
import ServiceImage3 from '../images/service-preview/service-preview-3.jpeg';
import ServiceImage4 from '../images/service-preview/service-preview-4.jpeg';
import Testimonials from '../components/Testimonials';

const ServicesPreview = [
  {
    image: ServiceImage1,
    service: 'Live-in care',
    summary: 'With live-in care, two carers work on a seven day rotational basis',
  },
  {
    image: ServiceImage2,
    service: 'Palliative care',
    summary: 'Managing pain and other distressing symptoms is the primary focus of our carers',
  },
  {
    image: ServiceImage3,
    service: 'Doctor home visits',
    summary: 'In association with Kimoramed, HFN offers high quality medical treatment in your home, office or hotel',
  },
  {
    image: ServiceImage4,
    service: 'Dementia care',
    summary: 'Our Carers will help with managing eating and nutrition, hygiene, continence and sleeping habits, managing memory loss, confusion, and aggression.',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  margin: 0 60px 60px 60px;

`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #6bb1bf;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #98ded9;
  }

  &:active {
    opacity: 1;
  }
`;

const ServicesDisplayContainer = styled.div`
  width: 25%;
  margin: 10px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1060px) {
    flex-shrink: 0;
    min-width: calc(100% / 3);
  }

  @media (max-width: 860px) {
    flex-shrink: 0;
    min-width: calc(100% / 2);
  }

  @media (max-width: 650px) {
    flex-shrink: 0;
    min-width: calc(100% / 1);
  }
`;

const ServicesDisplay = styled.div`
  height: 70%;

  @media (max-width: 1160px) {
    height: 60%;
  }

  @media (max-width: 860px) {
    width: 95%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    width: 95%;
  }
`;

const ServicePreviewContainer = styled.div`
  display: flex;
  margin: 40px 50px 30px 50px;

  @media (max-width: 1400px) {
    margin-bottom: 55px;
  }

  @media (max-width: 1200px) {
    margin-bottom: 70px;
  }

  @media (max-width: 1160px) {
    margin-bottom: 40px;
  }

  @media (max-width: 1060px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin-bottom: 0;
  }
`;

const ServiceText = styled.div`
  margin-left: 5px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: solid 5px;
  border-top-color: #eef6ff;
  border-left-color: #dde6ee;
  border-right-color: #dde5ee;
  border-bottom-color: #bbc2cc;
`;

export default function Home() {
  const servicePreview = ServicesPreview.map((service) => (
    <ServicesDisplayContainer key={service.image}>
      <ServicesDisplay>
        <Image src={service.image}/>
      </ServicesDisplay>
      <ServiceText>
        <h4 style={{marginBottom: "0"}}>{service.service}</h4>
        <p style={{marginTop: "10px", color: "#5e5e5e"}}>{service.summary}</p>
      </ServiceText>
    </ServicesDisplayContainer>
  ))

  return (
    <Container>
      <Title>Welcome to HFN</Title>
      <Description>
        Providing home care and support since 2001
        Enjoy peace of mind knowing that your loved one is being looked after by our trained, professional, and caring staff
      </Description>
      <Button>Contact Us</Button>
      <ServicePreviewContainer>
        {servicePreview}
      </ServicePreviewContainer>
      <Button>See all services</Button>
      <Title style={{marginTop: "70px"}}>Testimonials from our clients</Title>
      <Testimonials />
    </Container>
  );
};
