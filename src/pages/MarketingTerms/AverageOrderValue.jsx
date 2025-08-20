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

const AverageOrderValuePage = () => {
  return (
    <TermContainer>
      <Title>AOV (Average Order Value): Forstå kundenes kjøpsmønster</Title>
      <Content>
        <p>
          Average Order Value (AOV), eller gjennomsnittlig ordrestørrelse, er en beregning som viser den gjennomsnittlige summen en kunde bruker per bestilling. Den regnes ut ved å dele total omsetning på antall bestillinger i en gitt periode.
        </p>
        <p>
          AOV er en viktig KPI (Key Performance Indicator) for e-handelsbedrifter. Ved å overvåke AOV kan man få innsikt i kundenes kjøpsatferd. Strategier for å øke AOV inkluderer kryss-salg (cross-selling), opp-salg (up-selling) og å tilby gratis frakt over en viss ordresum. AOV blir noen ganger også referert til som ATV (Average Transaction Value).
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> LTV (Lifetime Value), KPI (Key Performance Indicator), Konverteringer.
        </p>
      </Content>
    </TermContainer>
  );
};

export default AverageOrderValuePage;
