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

const CTAPage = () => {
  return (
    <TermContainer>
      <Title>CTA (Call to Action): Veiled kunden til neste steg</Title>
      <Content>
        <p>
          En CTA, eller "Call to Action" (handlings-oppfordring), er et element på en nettside, i en annonse eller i en e-post som er designet for å få brukeren til å utføre en spesifikk handling. Dette er ofte en knapp eller en lenke med en tydelig oppfordring.
        </p>
        <p>
          Eksempler på CTA-er inkluderer "Kjøp nå", "Les mer", "Registrer deg gratis" eller "Last ned e-boken". En effektiv CTA er handlingsorientert, godt synlig og skaper en følelse av at det haster. Målet er å fjerne tvil og gjøre det så enkelt som mulig for brukeren å ta det neste steget i kundereisen.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Konverteringer, Landingsside, AIDA.
        </p>
      </Content>
    </TermContainer>
  );
};

export default CTAPage;
