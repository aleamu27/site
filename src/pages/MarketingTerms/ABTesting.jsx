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

const ABTestingPage = () => {
  return (
    <TermContainer>
      <Title>A/B-testing: Optimaliser din digitale strategi</Title>
      <Content>
        <p>
          A/B-testing, også kjent som splitt-testing, er en kraftig metode innen digital markedsføring for å sammenligne to versjoner av en nettside, annonse, e-post eller annet innhold for å avgjøre hvilken som presterer best. Ved å presentere versjon A for én gruppe brukere og versjon B for en annen, kan du samle inn data og objektivt avgjøre hvilken variant som fører til flest konverteringer, klikk eller ønskede handlinger.
        </p>
        <p>
          Prosessen er enkel, men effekten kan være betydelig. La oss si du har en "Kjøp nå"-knapp på nettsiden din. Ved å teste en rød knapp (Versjon A) mot en grønn knapp (Versjon B), kan du oppdage at den grønne knappen øker salget med 20%. Ved kontinuerlig å teste, lære og optimalisere, kan du forbedre resultatene dine over tid og sikre at du får mest mulig ut av markedsføringsbudsjettet ditt.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Konverteringsoptimalisering (CRO), Multivariate-testing.
        </p>
      </Content>
    </TermContainer>
  );
};

export default ABTestingPage;
