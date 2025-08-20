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

const SERPPage = () => {
  return (
    <TermContainer>
      <Title>SERP (Search Engine Results Page): Siden som avgjør din synlighet</Title>
      <Content>
        <p>
          En Search Engine Results Page (SERP) er siden en bruker ser etter å ha utført et søk i en søkemotor som Google. Denne siden viser en liste over resultater som søkemotoren anser som mest relevante for brukerens søk.
        </p>
        <p>
          En SERP inneholder vanligvis en blanding av organiske søkeresultater og betalte annonser (SEM). I tillegg kan den inneholde en rekke andre funksjoner, som "featured snippets" (utvalgte utdrag), kart, bildekaruseller og "folk spør også"-bokser. Å forstå hvordan SERP-en for dine viktigste søkeord ser ut, er avgjørende for å utvikle en effektiv SEO- og SEM-strategi.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Organisk Søk, SEM (Search Engine Marketing), Featured Snippet.
        </p>
      </Content>
    </TermContainer>
  );
};

export default SERPPage;
