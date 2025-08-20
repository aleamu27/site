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

const CPAPage = () => {
  return (
    <TermContainer>
      <Title>CPA (Cost Per Action): Betal for spesifikke handlinger</Title>
      <Content>
        <p>
          Cost Per Action (CPA), også kjent som Cost Per Acquisition, er en prismodell for annonsering der annonsøren betaler for en spesifikk handling en bruker utfører. Dette kan være et salg, en registrering, et klikk, eller en annen form for konvertering.
        </p>
        <p>
          CPA-modellen er attraktiv fordi den er direkte knyttet til resultater. I stedet for å betale for visninger (CPM) eller klikk (CPC), betaler du kun når den ønskede handlingen finner sted. Dette gjør det enklere å måle avkastningen på annonse-investeringen (ROAS) og optimalisere kampanjer for lønnsomhet.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Konverteringer, ROAS (Return On Ad Spend), Affiliate Marketing.
        </p>
      </Content>
    </TermContainer>
  );
};

export default CPAPage;
