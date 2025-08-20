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

const ProgrammaticAdvertisingPage = () => {
  return (
    <TermContainer>
      <Title>Programmatic Advertising: Automatisert kjøp av annonser</Title>
      <Content>
        <p>
          Programmatic advertising, eller programmatisk annonsering, er automatisert kjøp og salg av digital annonseplass. I stedet for manuelle forhandlinger mellom annonsører og publisister, brukes algoritmer og sanntidsbudgivning (RTB) til å kjøpe annonsevisninger for en spesifikk målgruppe.
        </p>
        <p>
          Denne teknologien gjør annonsekjøp mer effektivt og målrettet. Annonsører kan definere nøyaktig hvem de vil nå, og systemet vil automatisk kjøpe visninger på tvers av et stort nettverk av nettsteder for å nå denne målgruppen til best mulig pris. Dette gir en mer datadrevet og presis tilnærming til display-annonsering.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> RTB (Real-Time Bidding), Målretting, Display-annonsering.
        </p>
      </Content>
    </TermContainer>
  );
};

export default ProgrammaticAdvertisingPage;
