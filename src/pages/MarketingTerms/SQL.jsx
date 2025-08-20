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

const SQLPage = () => {
  return (
    <TermContainer>
      <Title>SQL (Sales Qualified Lead): Et salgsklart lead</Title>
      <Content>
        <p>
          Et Sales Qualified Lead (SQL) er et lead som salgsavdelingen har akseptert som verdig for direkte oppfølging. Dette skjer vanligvis etter at leadet først har blitt kvalifisert av markedsavdelingen (MQL) og deretter har vist en klar intensjon om å kjøpe.
        </p>
        <p>
          Overgangen fra MQL til SQL er et kritisk punkt i salgstrakten. Det indikerer at leadet har beveget seg fra generell interesse til en aktiv vurdering av produktet eller tjenesten. Salgsteamet vil da engasjere seg direkte med SQL-en for å svare på spørsmål, gi en demo, og forhåpentligvis lukke salget.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> MQL (Marketing Qualified Lead), Salgstrakt, Konvertering.
        </p>
      </Content>
    </TermContainer>
  );
};

export default SQLPage;
