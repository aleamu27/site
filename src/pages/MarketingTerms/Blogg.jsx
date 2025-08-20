import React from 'react';
import styled from 'styled-components';

const TermContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const BloggPage = () => {
  return (
    <TermContainer>
      <Title>Blogg: Del kunnskap og engasjer kundene dine</Title>
      <Content>
        <p>
          En bedriftsblogg er en plattform for å publisere artikler, guider og annet innhold relatert til din bransje, dine produkter og dine kunders interesser. Det er en sentral del av en content marketing-strategi og en effektiv måte å kommunisere med målgruppen din på.
        </p>
        <p>
          Ved å jevnlig publisere verdifullt innhold kan en bedrift posisjonere seg som en ekspert i sitt felt, bygge tillit, tiltrekke seg nye kunder gjennom søkemotorer (SEO), og utdanne eksisterende kunder. En blogg gir bedriften en stemme og en mulighet til å bygge et dypere forhold til sitt publikum.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Content Marketing, SEO (Search Engine Optimization), Inbound Marketing.
        </p>
      </Content>
    </TermContainer>
  );
};

export default BloggPage;
