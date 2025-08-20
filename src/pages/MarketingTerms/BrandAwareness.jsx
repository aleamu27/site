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

const BrandAwarenessPage = () => {
  return (
    <TermContainer>
      <Title>Brand Awareness: Bygg en gjenkjennelig merkevare</Title>
      <Content>
        <p>
          Brand awareness, eller merkevarebevissthet, handler om i hvilken grad målgruppen din kjenner til og kan gjenkjenne merkevaren din. Det er ikke bare et spørsmål om gjenkjennelse av logo eller navn, men også om assosiasjonene og følelsene som er knyttet til merkevaren.
        </p>
        <p>
          Høy merkevarebevissthet er fundamentalt for å bygge tillit og lojalitet. Når kunder står overfor et valg, er det mer sannsynlig at de velger en merkevare de kjenner til. Dette bygges over tid gjennom konsistent kommunikasjon, markedsføring og kundeopplevelser. Målet er å skape en sterk og positiv "personlighet" for bedriften din.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Ad Recall, PR (Public Relations), Content Marketing.
        </p>
      </Content>
    </TermContainer>
  );
};

export default BrandAwarenessPage;
