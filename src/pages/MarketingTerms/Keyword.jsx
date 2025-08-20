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

const KeywordPage = () => {
  return (
    <TermContainer>
      <Title>Keyword (Søkeord): Grunnsteinen i søkemotormarkedsføring</Title>
      <Content>
        <p>
          Et keyword, eller søkeord, er et ord eller en frase som brukere skriver inn i en søkemotor som Google for å finne informasjon. Søkeord er fundamentet for både SEO (søkemotoroptimalisering) og SEM (søkemotormarkedsføring).
        </p>
        <p>
          Ved å identifisere hvilke søkeord din målgruppe bruker, kan du optimalisere innholdet på nettsiden din for å rangere høyere i organiske søkeresultater (SEO), eller du kan by på disse ordene i Google Ads for å vise relevante annonser (SEM). God søkeordsanalyse handler om å forstå intensjonen bak søket og matche den med relevant innhold eller tilbud.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> SEO (Search Engine Optimization), SEM (Search Engine Marketing), Søkeordsanalyse.
        </p>
      </Content>
    </TermContainer>
  );
};

export default KeywordPage;
