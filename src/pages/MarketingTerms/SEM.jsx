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

const SEMPage = () => {
  return (
    <TermContainer>
      <Title>SEM (Search Engine Marketing): Betalt synlighet i søk</Title>
      <Content>
        <p>
          Search Engine Marketing (SEM), eller søkemotormarkedsføring, er en form for digital markedsføring som har som mål å øke et nettsteds synlighet i søkemotorresultater gjennom betalt annonsering. Den mest vanlige formen for SEM er Pay-Per-Click (PPC) annonsering via plattformer som Google Ads.
        </p>
        <p>
          Mens SEO fokuserer på å oppnå organisk (gratis) rangering, handler SEM om å betale for å plassere annonser på toppen av søkeresultatsiden. SEM gir umiddelbar synlighet og trafikk, og gir annonsører stor kontroll over budskap og målretting. En helhetlig søkestrategi kombinerer ofte både SEO og SEM for å maksimere synligheten.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> PPC (Pay-Per-Click), Google Ads, SEO (Search Engine Optimization).
        </p>
      </Content>
    </TermContainer>
  );
};

export default SEMPage;
