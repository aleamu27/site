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

const SalesFunnelPage = () => {
  return (
    <TermContainer>
      <Title>Sales Funnel (Salgstrakt): Fra lead til kunde</Title>
      <Content>
        <p>
          En salgstrakt (Sales Funnel) er en visuell representasjon av reisen en potensiell kunde går gjennom, fra første bevissthet om produktet ditt til det endelige kjøpet. Den er en mer salgsfokusert versjon av den generelle markedsføringstrakten.
        </p>
        <p>
          Trakten er vanligvis delt inn i flere stadier: Toppen (ToFu) for bevissthet, midten (MoFu) for vurdering og interesse, og bunnen (BoFu) for beslutning og handling. Ved å forstå hvor i trakten en lead befinner seg, kan salgsteamet tilpasse sin tilnærming, gi riktig informasjon og effektivt pleie leadet mot et salg.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Funnel, Lead Nurturing, Konvertering.
        </p>
      </Content>
    </TermContainer>
  );
};

export default SalesFunnelPage;
