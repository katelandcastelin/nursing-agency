import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogItems = [
  {
    id: 1,
    image: '',
    description: 'description one',
  },
  {
    id: 2,
    image: '',
    description: 'description two',
  },
  {
    id: 3,
    image: '',
    description: 'description three',
  },
]

const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

const BlogPreviewContainer = styled.div`
  margin: 30px;
  padding: 30px;
  border: solid 5px;
  border-top-color: #eef6ff;
  border-left-color: #dde6ee;
  border-right-color: #dde5ee;
  border-bottom-color: #bbc2cc;
`;

const PreviewBlock = styled.div`

`;

const BlogImage = styled.img`
  
`;

const Description = styled.p`
  
`;

export default function BlocgPreviw() {
  const blogPreview = BlogItems.map((id) => (
    <BlogPreviewContainer key={id}>
      <PreviewBlock>
        <BlogImage src={id.image} />
        <Description>
          {id.description}
        </Description>
        <Link>Read more</Link>
      </PreviewBlock>
    </BlogPreviewContainer>
  ))

  return (
    <Container>
      {blogPreview}
    </Container>
  )
}
