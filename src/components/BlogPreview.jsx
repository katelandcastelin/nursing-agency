import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image1 from '../images/blog-preview/aging-in-place-inline_1-370x270.jpeg';
import Image2 from '../images//blog-preview/diabetes.jpeg';
import Image3 from '../images/blog-preview/iStock-1294521542.jpeg';

const BlogItems = [
  {
    id: 1,
    image: Image1,
    description: 'Care for your ageing parents.',
  },
  {
    id: 2,
    image: Image2,
    description: 'Type 2 diabetes accelerates brain aging and cognitive decline, a new study finds.',
  },
  {
    id: 3,
    image: Image3,
    description: 'How to age well and stay in your home.',
  },
];

const Container = styled.div`
  display: flex;
  width: 90%;
`;

const ScrollerContainer = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const BlogPreviewContainer = styled.div`
  margin: 30px;
  width: 50%;

  @media (max-width: 1000px) {
    flex: 0 0 auto;
    width: 40%;
  }

  @media (max-width: 650px) {
    flex: 0 0 auto;
    margin-bottom: 40px;
  }

  @media (max-width: 615px) {
    flex: 0 0 auto;
    margin-bottom: 70px;
  }
`;

const PreviewBlock = styled.div`
  height: 70%;
`;

const BlogImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: solid 5px;
  border-top-color: #eef6ff;
  border-left-color: #dde6ee;
  border-right-color: #dde5ee;
  border-bottom-color: #bbc2cc;
`;

const Description = styled.h4`
  margin-left: 5px;
  color: #555;
`;

const ReadMoreLink = styled(Link)`
  text-decoration: none;
  color: #6bb1bf;

  &:hover {
    color: #b6dce3;
  }
`;

export default function BlogPreview() {
  const blogPreview = BlogItems.map((id) => (
    <BlogPreviewContainer key={id.id}>
      <PreviewBlock>
        <BlogImage src={id.image} />
        <Description>
          <div style={{marginBottom: '15px'}}>{id.description}</div>
          <ReadMoreLink>Read more</ReadMoreLink>
        </Description>
      </PreviewBlock>
    </BlogPreviewContainer>
  ))

  return (
    <Container>
      <ScrollerContainer>
        {blogPreview}
      </ScrollerContainer>
    </Container>
  )
}
