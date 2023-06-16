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

  &:after {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0.2);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  &:active:after {
    opacity: 1;
  }
`;

export default function Home() {
  return (
    <Container>
      <Title>Welcome to Our Nursing Agency</Title>
      <Description>
        We provide compassionate and professional nursing services to ensure the well-being of our patients.
      </Description>
      <Button>Contact Us</Button>
    </Container>
  );
};
