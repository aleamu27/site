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

const InboundMarketingPage = () => {
  return (
    <TermContainer>
      <Title>Inbound Marketing: Trekk til deg kunder med verdi</Title>
      <Content>
        <p>
          Inbound marketing er en metodikk som fokuserer på å tiltrekke kunder ved å skape verdifullt innhold og skreddersydde opplevelser. I motsetning til tradisjonell (outbound) markedsføring, som forstyrrer publikum med innhold de ikke alltid ønsker, handler inbound om å skape forbindelser og løse problemer de allerede har.
        </p>
        <p>
          Metodikken er delt inn i fasene Attract, Engage, and Delight. Dette innebærer å tiltrekke riktig publikum med relevant innhold (blogg, SEO), engasjere dem med løsninger og samtaler (e-post, CRM), og glede dem med enestående service slik at de blir ambassadører for merkevaren din. Målet er å bygge langsiktige relasjoner, ikke bare å gjennomføre en transaksjon.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Content Marketing, SEO, Kundereise.
        </p>
      </Content>
    </TermContainer>
  );
};

export default InboundMarketingPage;
