import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.main`
  min-height: 100vh;
  background: #f2f1ed;
  display: grid;
  place-items: center;
  padding: 2rem 1.2rem;
  box-sizing: border-box;
`;

const Card = styled.section`
  text-align: center;
  max-width: 620px;
`;

const Code = styled.p`
  margin: 0 0 0.65rem;
  color: #7f8288;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.78rem;
  font-weight: 600;
`;

const Title = styled.h1`
  margin: 0 0 0.7rem;
  color: #1a1c1f;
  font-size: clamp(2rem, 6vw, 3.4rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  font-weight: 500;
`;

const Text = styled.p`
  margin: 0 0 1.25rem;
  color: #535860;
  font-size: clamp(0.95rem, 1.4vw, 1.08rem);
  line-height: 1.45;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
  border: 0;
  background: #111315;
  color: #fff;
  padding: 0.68rem 1rem;
  font-size: 0.84rem;
  letter-spacing: 0.02em;
  line-height: 1;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <Card>
        <Code>404</Code>
        <Title>Page not found</Title>
        <Text>The page you are looking for does not exist or has been moved.</Text>
        <HomeButton to="/">Back to home</HomeButton>
      </Card>
    </Wrapper>
  );
}
