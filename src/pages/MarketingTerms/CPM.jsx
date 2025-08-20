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

const CPMPage = () => {
  return (
    <TermContainer>
      <Title>CPM (Cost Per Mille): Prisen for tusen visninger</Title>
      <Content>
        <p>
          Cost Per Mille (CPM), eller kostnad per tusen visninger, er en prismodell for annonsering der annonsøren betaler en fast pris for hver tusende gang annonsen blir vist (impresjoner). "Mille" er latin for tusen.
        </p>
        <p>
          CPM-modellen brukes ofte i kampanjer der målet er å bygge merkevarebevissthet og øke synlighet, snarere enn å drive umiddelbare handlinger. Siden du betaler for eksponering og ikke for klikk, kan CPM være en kostnadseffektiv måte å nå et bredt publikum på. Det er en vanlig prismodell for display- og videoannonsering.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Brand Awareness, Frekvens, Ad Recall.
        </p>
      </Content>
    </TermContainer>
  );
};

export default CPMPage;
