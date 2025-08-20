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

const CTRPage = () => {
  return (
    <TermContainer>
      <Title>CTR (Click-Through Rate): Mål effektiviteten på dine annonser og lenker</Title>
      <Content>
        <p>
          Click-Through Rate (CTR), eller klikkfrekvens, er en prosentandel som viser hvor mange som klikker på en annonse eller en lenke, av det totale antallet som har sett den (visninger). Den regnes ut ved å dele antall klikk på antall visninger, og deretter gange med 100.
        </p>
        <p>
          CTR er en sentral beregning for å vurdere hvor relevant og engasjerende en annonse, en e-post-kampanje eller et søkeresultat er for målgruppen. En høy CTR indikerer at budskapet ditt treffer godt, mens en lav CTR kan tyde på at du bør justere overskriften, bildet eller selve tilbudet.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> CPC (Cost Per Click), CPM (Cost Per Mille), Konverteringsrate.
        </p>
      </Content>
    </TermContainer>
  );
};

export default CTRPage;
