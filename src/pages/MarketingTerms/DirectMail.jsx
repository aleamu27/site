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

const DirectMailPage = () => {
  return (
    <TermContainer>
      <Title>Direct Mail: Målrettet kommunikasjon i postkassen</Title>
      <Content>
        <p>
          Direct mail refererer til fysisk post som sendes direkte til en målgruppe. Selv i en digital tidsalder kan direct mail være en effektiv kanal for å nå spesifikke demografiske grupper eller kunder innenfor et geografisk område. Det kan være alt fra brosjyrer og postkort til personlige brev.
        </p>
        <p>
          Styrken til direct mail ligger i dens fysiske natur, som kan skape en annerledes og mer minneverdig opplevelse enn digital kommunikasjon. For best resultat kombineres det ofte med digitale strategier, for eksempel ved å inkludere en QR-kode som leder til en landingsside. Presis målretting, for eksempel ved bruk av Account-Based Marketing (ABM) prinsipper, er nøkkelen til suksess.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> ABM (Account-Based Marketing), ICP (Ideal Customer Profile), Markedsføringskampanje.
        </p>
      </Content>
    </TermContainer>
  );
};

export default DirectMailPage;
