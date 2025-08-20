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

const MarketingMixPage = () => {
  return (
    <TermContainer>
      <Title>Marketing Mix (Markedsmiks): De 4 P-ene i markedsføring</Title>
      <Content>
        <p>
          Markedsmiksen er et klassisk konsept i markedsføring som beskriver de sentrale elementene en bedrift må vurdere for å markedsføre et produkt eller en tjeneste. Den består tradisjonelt av de fire P-ene: Produkt, Pris, Plass (distribusjon) og Promotering.
        </p>
        <p>
          <ul>
            <li><strong>Produkt:</strong> Hva du selger, og hvilke behov det dekker.</li>
            <li><strong>Pris:</strong> Hvilken prisstrategi du velger.</li>
            <li><strong>Plass:</strong> Hvor og hvordan produktet gjøres tilgjengelig for kunden.</li>
            <li><strong>Promotering:</strong> Hvordan du kommuniserer med markedet (reklame, PR, etc.).</li>
          </ul>
          En vellykket strategi krever en balansert og gjennomtenkt kombinasjon av disse fire elementene.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Markedsføringsstrategi, Målgruppe, Posisjonering.
        </p>
      </Content>
    </TermContainer>
  );
};

export default MarketingMixPage;
