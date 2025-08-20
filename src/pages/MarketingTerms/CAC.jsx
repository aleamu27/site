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

const CACPage = () => {
  return (
    <TermContainer>
      <Title>CAC (Customer Acquisition Cost): Hva koster en ny kunde?</Title>
      <Content>
        <p>
          Customer Acquisition Cost (CAC) er den totale kostnaden en bedrift har for å skaffe seg en ny kunde. For å beregne CAC, summerer du alle markedsførings- og salgskostnader i en gitt periode og deler summen på antall nye kunder som ble anskaffet i samme periode.
        </p>
        <p>
          CAC er en kritisk beregning for å vurdere lønnsomheten i markedsførings-innsatsen.           Målet er at en kundes livstidsverdi (LTV) skal være betydelig høyere enn kostnaden for å anskaffe dem (LTV {'>'} CAC). Å forstå og optimalisere CAC er avgjørende for bærekraftig vekst. Å forstå og optimalisere CAC er avgjørende for bærekraftig vekst.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> LTV (Lifetime Value), ROI (Return on Investment), CPA (Cost Per Action).
        </p>
      </Content>
    </TermContainer>
  );
};

export default CACPage;
