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

const CPOPage = () => {
  return (
    <TermContainer>
      <Title>CPO (Cost Per Order): Kostnaden for et fullført salg</Title>
      <Content>
        <p>
          Cost Per Order (CPO) beregner den totale annonseringskostnaden for å generere ett enkelt salg. Dette er en svært nøyaktig måte å måle lønnsomheten av en annonsekampanje på, da den ser på hele kundereisen frem til et fullført kjøp.
        </p>
        <p>
          For å beregne CPO, må du summere alle kostnader knyttet til en kampanje (f.eks. visninger, klikk) og dele på antall salg som direkte kan tilskrives kampanjen. Hvis en kunde så en annonse to ganger før de klikket og kjøpte, inkluderer CPO kostnaden for både visningene og klikket. Dette gir et helhetlig bilde av hva det faktisk koster å få et salg i havn.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> ROAS (Return On Ad Spend), CPA (Cost Per Action), CAC (Customer Acquisition Cost).
        </p>
      </Content>
    </TermContainer>
  );
};

export default CPOPage;
