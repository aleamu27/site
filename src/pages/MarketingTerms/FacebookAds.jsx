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

const FacebookAdsPage = () => {
  return (
    <TermContainer>
      <Title>Facebook Ads: Nå ut til en enorm og engasjert målgruppe</Title>
      <Content>
        <p>
          Facebook Ads er en kraftig annonseringsplattform som lar bedrifter markedsføre sine produkter og tjenester til Facebooks enorme brukerbase. Plattformen tilbyr avanserte målrettingsalternativer basert på demografi, interesser, atferd og geografisk plassering.
        </p>
        <p>
          Med Facebook Ads kan du lage ulike typer annonser, som bildeannonser, videoannonser, karusellannonser og stories. Dette gir deg fleksibilitet til å tilpasse budskapet ditt til ulike deler av salgstrakten, enten målet er å bygge merkevarebevissthet, generere leads eller drive direkte salg. Effektiviteten kan måles nøyaktig gjennom verktøy som Facebook Pixel.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Målretting, A/B-testing, ROAS (Return On Ad Spend).
        </p>
      </Content>
    </TermContainer>
  );
};

export default FacebookAdsPage;
