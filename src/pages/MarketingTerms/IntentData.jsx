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

const IntentDataPage = () => {
  return (
    <TermContainer>
      <Title>Intent Data: Forstå kjøpssignalene til dine potensielle kunder</Title>
      <Content>
        <p>
          Intent data, eller intensjonsdata, er informasjon som samles inn om en persons eller en bedrifts atferd på nettet, som indikerer en intensjon om å kjøpe et produkt eller en tjeneste. Dette kan inkludere søk, besøk på prissider, nedlasting av casestudier eller deltakelse på webinarer.
        </p>
        <p>
          Ved å analysere disse signalene kan B2B-bedrifter identifisere hvilke potensielle kunder som aktivt er i markedet for deres løsninger. Dette gjør at salgs- og markedsføringsteam kan prioritere sin innsats mot de mest lovende leadene, og tilpasse budskapet sitt til den spesifikke interessen de har vist. Dette er en sentral del av Account-Based Marketing (ABM).
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> ABM (Account-Based Marketing), Lead Scoring, Kjøpsreise.
        </p>
      </Content>
    </TermContainer>
  );
};

export default IntentDataPage;
