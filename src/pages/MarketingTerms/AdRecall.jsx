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

const AdRecallPage = () => {
  return (
    <TermContainer>
      <Title>Ad Recall: Måling av annonsens hukommelseseffekt</Title>
      <Content>
        <p>
          Ad recall, eller annonsegjenkjenning, er en beregning som måler hvor godt en målgruppe husker en spesifikk annonse etter å ha blitt eksponert for den. Dette er en viktig indikator på en kampanjes kreative effektivitet og evne til å fange oppmerksomhet.
        </p>
        <p>
          Metoden innebærer vanligvis å gjennomføre undersøkelser der respondenter blir spurt om de kan huske å ha sett en bestemt annonse. Resultatene hjelper markedsførere å forstå om budskapet og det visuelle uttrykket er minneverdig, og gir innsikt for fremtidige kampanjer. Høy ad recall er ofte korrelert med økt merkevarebevissthet.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Brand Awareness (Merkevarebevissthet), Frekvens, CPM (Kostnad per tusen visninger).
        </p>
      </Content>
    </TermContainer>
  );
};

export default AdRecallPage;
