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

const LandingPage = () => {
  return (
    <TermContainer>
      <Title>Landing Page (Landingsside): En side bygget for konvertering</Title>
      <Content>
        <p>
          En landing page, eller landingsside, er en frittstående nettside som er laget for ett spesifikt formål, vanligvis i forbindelse med en markedsføringskampanje. Det er siden en bruker "lander" på etter å ha klikket på en annonse, en lenke i en e-post, eller et søkeresultat.
        </p>
        <p>
          I motsetning til en vanlig forside, som har mange lenker og navigasjonsvalg, er en god landingsside ekstremt fokusert. Målet er å fjerne distraksjoner og lede brukeren mot én enkelt handling (Call to Action), som å fylle ut et skjema, laste ned en e-bok eller gjennomføre et kjøp. Dette gjør landingssider svært effektive for å øke konverteringsraten.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> CTA (Call to Action), Konverteringsrate, A/B-testing.
        </p>
      </Content>
    </TermContainer>
  );
};

export default LandingPage;
