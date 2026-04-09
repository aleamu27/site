import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #1a1a1a;
  letter-spacing: 0.1em;
`;

const News = () => {
  return (
    <Wrapper>
      <Title>NEWS</Title>
    </Wrapper>
  );
};

export default News;
