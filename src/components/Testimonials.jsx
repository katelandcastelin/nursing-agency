import React, { useState } from 'react';
import styled from 'styled-components';

const ClientTestimonials = [
  {
    id: 1,
    quote: 'Great! Really long quote to take up space in the div so I can see how it would work. There is probably an easier way to do this but here we are.',
    name: 'Kate',
  },
  {
    id: 2,
    quote: 'Lovely!',
    name: 'Dominique',
  },
  {
    id: 3,
    quote: 'Excellent!',
    name: 'George',
  },
  {
    id: 4,
    quote: 'Wonderful!',
    name: 'Peter',
  },
  {
    id: 5,
    quote: 'Good!',
    name: 'Max',
  },
  {
    id: 6,
    quote: 'Service was great!',
    name: 'Mandy',
  },
  {
    id: 7,
    quote: 'seven',
    name: 'greg',
  },
  {
    id: 8,
    quote: 'eight',
    name: 'amy',
  },
];

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuotesContainer = styled.div`
  display: flex;
  background-color: #f0faff;
  width: 80%;
  overflow: hidden;
  margin-top: 20px;
`;

const QuoteBlock = styled.div`
  border: 1px solid lightgray;
  flex: 0 0 33.33%;
`;

const ArrowButton = styled.button`
  
`;

export default function Testimonials() {
  const testimonials = ClientTestimonials.map((index) => (
    <QuoteBlock>
      <p>{index.quote}</p>
      <p>{index.name}</p>
    </QuoteBlock>
  ))
  return (
    <Container>
      <ArrowButton>Prev</ArrowButton>
      <QuotesContainer>
        {testimonials}
      </QuotesContainer>
      <ArrowButton>Next</ArrowButton>
    </Container>
  )
}