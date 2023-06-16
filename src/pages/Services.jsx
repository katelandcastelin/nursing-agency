import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  margin-bottom: 40px;
`;

export default function About() {
  return (
    <Container>
      <Title>HFN Services</Title>
      <Description>
        We provide compassionate and professional nursing services to ensure the well-being of our patients.
      </Description>
    </Container>
  );
};
