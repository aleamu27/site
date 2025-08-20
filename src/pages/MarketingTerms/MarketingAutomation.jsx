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

const MarketingAutomationPage = () => {
  return (
    <TermContainer>
      <Title>Marketing Automation: Automatiser og skaler din markedsføring</Title>
      <Content>
        <p>
          Marketing automation, eller markedsføringsautomatisering, refererer til programvare og teknologier som er designet for å automatisere repeterende markedsføringsoppgaver. Målet er å effektivisere prosesser, pleie leads mer effektivt og personalisere kundeopplevelsen i stor skala.
        </p>
        <p>
          Dette kan inkludere automatisert utsending av e-post basert på brukeratferd, segmentering av kunder, publisering i sosiale medier og scoring av leads. Ved å automatisere disse oppgavene kan markedsførere frigjøre tid til mer strategisk arbeid, samtidig som de leverer en mer relevant og tidsriktig kommunikasjon til hver enkelt kunde.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> CRM (Customer Relationship Management), E-postmarkedsføring, Lead Nurturing.
        </p>
      </Content>
    </TermContainer>
  );
};

export default MarketingAutomationPage;
