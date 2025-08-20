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

const ROASPage = () => {
  return (
    <TermContainer>
      <Title>ROAS (Return on Ad Spend): Mål avkastningen på annonseringen</Title>
      <Content>
        <p>
          Return on Ad Spend (ROAS) er en markedsføringsberegning som måler hvor mye inntekt som genereres for hver krone som brukes på annonsering. Det er en mer spesifikk versjon av ROI, som fokuserer utelukkende på lønnsomheten av annonsekampanjer.
        </p>
        <p>
          Formelen er enkel: (Total inntekt fra annonsering / Total annonsekostnad). En ROAS på 4:1 betyr for eksempel at du tjener 4 kroner for hver krone du bruker på annonser. Dette er en kritisk KPI for å vurdere og sammenligne effektiviteten av ulike annonsekanaler og kampanjer, og for å optimalisere budsjettallokeringen.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> ROI (Return on Investment), PPC (Pay-Per-Click), Konverteringsverdi.
        </p>
      </Content>
    </TermContainer>
  );
};

export default ROASPage;
