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

const FunnelPage = () => {
  return (
    <TermContainer>
      <Title>Funnel (Takt): Guide kunden fra bevissthet til handling</Title>
      <Content>
        <p>
          En funnel, eller trakt på norsk, er en modell som visualiserer kundereisen fra første kontaktpunkt med bedriften din til en endelig konvertering. Den er ofte delt inn i flere stadier, som bevissthet (toppen av trakten), vurdering (midten) og handling (bunnen).
        </p>
        <p>
          Ved å forstå denne reisen kan du tilpasse markedsføringen din til hvert stadium. For eksempel kan du bruke innholdsmarkedsføring for å skape bevissthet, casestudier for å bygge tillit i vurderingsfasen, og en tydelig Call to Action (CTA) for å drive handling. En godt utformet trakt hjelper deg med å pleie leads og maksimere konverteringer.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> AIDA, Kundereise, Konvertering.
        </p>
      </Content>
    </TermContainer>
  );
};

export default FunnelPage;
