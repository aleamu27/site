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

const GeoTargetingPage = () => {
  return (
    <TermContainer>
      <Title>Geo-targeting: Nå kunder basert på deres fysiske plassering</Title>
      <Content>
        <p>
          Geo-targeting, eller geografisk målretting, er en metode for å levere innhold eller annonser til brukere basert på deres geografiske posisjon. Dette kan være så bredt som et land eller så spesifikt som en bydel, et postnummer eller til og med en radius rundt en bestemt adresse.
        </p>
        <p>
          Denne teknikken er spesielt nyttig for lokale bedrifter som ønsker å nå kunder i sitt nærområde, eller for større selskaper som vil tilpasse markedsføringen til ulike regionale markeder. Geo-targeting brukes flittig i plattformer som Google Ads og Facebook Ads for å øke relevansen og effektiviteten av annonseringen.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Lokal SEO, Målretting, Google Ads.
        </p>
      </Content>
    </TermContainer>
  );
};

export default GeoTargetingPage;
