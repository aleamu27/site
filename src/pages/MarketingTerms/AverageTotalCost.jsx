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

const AverageTotalCostPage = () => {
  return (
    <TermContainer>
      <Title>Average Total Cost: Beregn lønnsomheten i produksjonen</Title>
      <Content>
        <p>
          Average Total Cost (gjennomsnittlig totalkostnad) er en økonomisk beregning som brukes for å finne den gjennomsnittlige kostnaden per produserte enhet. Den regnes ut ved å dele de totale produksjonskostnadene (både faste og variable kostnader) på antall enheter som er produsert.
        </p>
        <p>
          Denne beregningen er fundamental for å vurdere produksjonseffektivitet og sette priser. Ved å analysere den gjennomsnittlige totalkostnaden kan en bedrift identifisere stordriftsfordeler og ta strategiske beslutninger for å forbedre lønnsomheten. Det er viktig å ikke forveksle forkortelsen med ATV, som ofte betyr "Add to Cart" i e-handel.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> ROI (Return on Investment), Lønnsomhet.
        </p>
      </Content>
    </TermContainer>
  );
};

export default AverageTotalCostPage;
