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

const CPCPage = () => {
  return (
    <TermContainer>
      <Title>CPC (Cost Per Click): Prisen for et klikk</Title>
      <Content>
        <p>
          Cost Per Click (CPC) er en prismodell for nettannonsering der annonsøren betaler en bestemt sum hver gang en bruker klikker på annonsen. Dette er en vanlig modell i plattformer som Google Ads og på sosiale medier.
        </p>
        <p>
          CPC-prisen kan være fast eller basert på en auksjon (budgivning), der annonsører konkurrerer om plassering. Faktorer som annonsekvalitet, relevans og konkurranse påvirker den faktiske prisen. CPC er en effektiv måte å drive trafikk til en nettside på, og det er enkelt å måle den direkte kostnaden for denne trafikken.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> CTR (Click-Through Rate), SEM (Search Engine Marketing), PPC (Pay-Per-Click).
        </p>
      </Content>
    </TermContainer>
  );
};

export default CPCPage;
