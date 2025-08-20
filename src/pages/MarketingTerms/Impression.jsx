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

const ImpressionPage = () => {
  return (
    <TermContainer>
      <Title>Impression (Visning): Når annonsen din blir sett</Title>
      <Content>
        <p>
          En impression, eller visning, oppstår hver gang en annonse vises på en brukers skjerm. Det spiller ingen rolle om brukeren klikker på den eller ikke; så lenge den har blitt lastet og vist, teller det som en visning. Dette er en grunnleggende måleenhet i digital annonsering.
        </p>
        <p>
          Visninger brukes ofte til å måle rekkevidden og frekvensen av en kampanje. Mange annonseringsmodeller, som CPM (Cost Per Mille), baserer seg på prisen for tusen visninger. Mens visninger er viktige for å bygge merkevarebevissthet, må de ses i sammenheng med andre målinger, som klikkrate (CTR) og konverteringer, for å vurdere den fulle effekten av en kampanje.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> CPM (Cost Per Mille), Rekkevidde, Frekvens.
        </p>
      </Content>
    </TermContainer>
  );
};

export default ImpressionPage;
