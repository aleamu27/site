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

const PPCPage = () => {
  return (
    <TermContainer>
      <Title>PPC (Pay-Per-Click): Betal kun for resultatene</Title>
      <Content>
        <p>
          Pay-Per-Click (PPC) er en modell for digital annonsering der annonsører betaler en avgift hver gang en av deres annonser blir klikket på. I stedet for å prøve å "kjøpe" besøk organisk, lar PPC deg kjøpe besøk til nettstedet ditt. Google Ads er den mest populære plattformen for PPC.
        </p>
        <p>
          I en PPC-kampanje byr du på søkeord som er relevante for din målgruppe. Når en bruker søker på dette søkeordet, vises annonsen din. Du betaler kun hvis brukeren faktisk klikker på annonsen. Dette gjør PPC til en svært målbar og kontrollerbar form for markedsføring, der du kan sette et nøyaktig budsjett og spore avkastningen (ROAS) nøye.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Google Ads, CPC (Cost Per Click), SEM (Search Engine Marketing).
        </p>
      </Content>
    </TermContainer>
  );
};

export default PPCPage;
