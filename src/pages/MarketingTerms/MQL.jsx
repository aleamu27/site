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

const MQLPage = () => {
  return (
    <TermContainer>
      <Title>MQL (Marketing Qualified Lead): Et lead klart for salg</Title>
      <Content>
        <p>
          Et Marketing Qualified Lead (MQL) er et lead som markedsavdelingen har vurdert som mer sannsynlig å bli en kunde sammenlignet med andre leads. Denne vurderingen er basert på deres atferd og engasjement, for eksempel hvilke sider de har besøkt, hvilket innhold de har lastet ned, og demografisk informasjon.
        </p>
        <p>
          Når et lead blir definert som en MQL, betyr det at de har vist tilstrekkelig interesse til at de er klare for å bli overlevert til salgsavdelingen for videre oppfølging. Dette er et viktig steg i prosessen med å samkjøre markedsføring og salg, og sikrer at selgerne bruker tiden sin på de mest lovende prospektene.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> SQL (Sales Qualified Lead), Lead Scoring, Salgstrakt.
        </p>
      </Content>
    </TermContainer>
  );
};

export default MQLPage;
