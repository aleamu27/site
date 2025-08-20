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

const AIDAPage = () => {
  return (
    <TermContainer>
      <Title>AIDA: En klassisk modell for kundereisen</Title>
      <Content>
        <p>
          AIDA er en anerkjent markedsføringsmodell som beskriver de fire stadiene en kunde går gjennom i kjøpsprosessen. Modellen er et akronym for Attention (Oppmerksomhet), Interest (Interesse), Desire (Ønske) og Action (Handling).
        </p>
        <ul>
          <li><strong>Attention:</strong> Fange kundens oppmerksomhet. Dette kan være gjennom en iøynefallende annonse, en spennende overskrift eller engasjerende innhold.</li>
          <li><strong>Interest:</strong> Vekke interesse for produktet eller tjenesten. Her gir du mer informasjon og fremhever fordelene.</li>
          <li><strong>Desire:</strong> Skape et ønske eller behov for det du tilbyr. Kunden må føle at dette er løsningen på deres problem.</li>
          <li><strong>Action:</strong> Oppfordre til handling. Dette er det siste steget, der kunden gjennomfører et kjøp, registrerer seg, eller utfører en annen ønsket handling.</li>
        </ul>
        <p>
          AIDA-modellen er et verdifullt rammeverk for å strukturere markedsføringskampanjer og innhold, og for å forstå og veilede kundereisen.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Kjøpstrakten, Flywheel, CTA (Call to Action).
        </p>
      </Content>
    </TermContainer>
  );
};

export default AIDAPage;
