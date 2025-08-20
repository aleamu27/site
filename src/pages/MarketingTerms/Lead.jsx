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

const LeadPage = () => {
  return (
    <TermContainer>
      <Title>Lead: En potensiell kunde som har vist interesse</Title>
      <Content>
        <p>
          Et lead er en person eller en organisasjon som har vist interesse for dine produkter eller tjenester. Denne interessen vises vanligvis ved at de deler kontaktinformasjon, for eksempel ved å melde seg på et nyhetsbrev, laste ned en guide, eller fylle ut et kontaktskjema.
        </p>
        <p>
          Ikke alle leads er like. De blir ofte kvalifisert og kategorisert, for eksempel som MQL (Marketing Qualified Lead) eller SQL (Sales Qualified Lead), basert på hvor klare de er til å kjøpe. Prosessen med å pleie leads gjennom salgstrakten, fra første interesse til et fullført salg, kalles lead nurturing.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> CPL (Cost Per Lead), MQL (Marketing Qualified Lead), Salgstrakt.
        </p>
      </Content>
    </TermContainer>
  );
};

export default LeadPage;
