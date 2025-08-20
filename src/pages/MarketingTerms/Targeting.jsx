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

const TargetingPage = () => {
  return (
    <TermContainer>
      <Title>Targeting (Målretting): Nå de riktige kundene</Title>
      <Content>
        <p>
          Targeting, eller målretting, er prosessen med å velge ut en spesifikk gruppe mennesker (en målgruppe) som du ønsker å rette markedsføringen din mot. I stedet for å prøve å nå alle, fokuserer du innsatsen på de som mest sannsynlig vil være interessert i produktet eller tjenesten din.
        </p>
        <p>
          Målretting kan baseres på en rekke kriterier, inkludert demografi (alder, kjønn, bosted), psykografi (livsstil, verdier), atferd (tidligere kjøp, nettsidebesøk) og kontekst (hva de leser om akkurat nå). Effektiv målretting gjør markedsføringen mer relevant for mottakeren og mer kostnadseffektiv for avsenderen.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Målgruppe, Segmentering, Geo-targeting.
        </p>
      </Content>
    </TermContainer>
  );
};

export default TargetingPage;
