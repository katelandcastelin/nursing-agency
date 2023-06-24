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

export default function Contact() {
  window.scrollTo(0, 0);

  return (
    <Container>
      <Title>Contact us</Title>
      
    </Container>
  );
};
