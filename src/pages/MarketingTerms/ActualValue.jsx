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

const ActualValuePage = () => {
  return (
    <TermContainer>
      <Title>Actual Value: Forstå den reelle verdien av en kunde</Title>
      <Content>
        <p>
          Actual Value, eller faktisk verdi, er en beregning som ser på den totale verdien en kunde representerer for en bedrift. Dette inkluderer ikke bare nåverdien av kunden, men også den potensielle fremtidige verdien, gitt at forretningsforholdet fortsetter.
        </p>
        <p>
          Beregningen tar hensyn til faktorer som kundens nåværende kjøpsfrekvens, gjennomsnittlig ordrestørrelse og forventet levetid som kunde. Ved å forstå den faktiske verdien kan bedrifter ta mer informerte beslutninger om hvor mye de skal investere i kundebevaring og markedsføring rettet mot eksisterende kunder.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> LTV (Lifetime Value), CAC (Customer Acquisition Cost), AOV (Average Order Value).
        </p>
      </Content>
    </TermContainer>
  );
};

export default ActualValuePage;
