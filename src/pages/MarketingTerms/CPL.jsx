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

const CPLPage = () => {
  return (
    <TermContainer>
      <Title>CPL (Cost Per Lead): Hva koster en potensiell kunde?</Title>
      <Content>
        <p>
          Cost Per Lead (CPL) er en beregning som viser den gjennomsnittlige kostnaden for å generere ett lead, altså en potensiell kunde som har vist interesse for bedriften din ved å for eksempel laste ned innhold eller fylle ut et kontaktskjema.
        </p>
        <p>
          CPL regnes ut ved å dele de totale kostnadene for en markedsføringskampanje på antall leads den genererte. Dette er en viktig måling for å vurdere effektiviteten av kampanjer som har som mål å bygge en base av potensielle kunder for videre oppfølging av salgsavdelingen. Det hjelper deg å kartlegge hvor du mest kostnadseffektivt finner nye leads.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Lead Qualification, MQL (Marketing Qualified Lead), SQL (Sales Qualified Lead).
        </p>
      </Content>
    </TermContainer>
  );
};

export default CPLPage;
