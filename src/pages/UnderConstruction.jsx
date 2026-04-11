import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: #222;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #666;
  margin: 0 0 2rem 0;
  font-weight: 400;
`;

const Email = styled.a`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: #b3b3b3;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #184B54;
  }
`;

const UnderConstruction = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Under Construction</Title>
        <Subtitle>New site live April 1st</Subtitle>
        <Email href="mailto:j@hepta.no">j@hepta.no</Email>
      </Container>
    </>
  );
};

export default UnderConstruction;
