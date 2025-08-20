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

const ROIPage = () => {
  return (
    <TermContainer>
      <Title>ROI (Return on Investment): Mål den totale lønnsomheten</Title>
      <Content>
        <p>
          Return on Investment (ROI) er en finansiell beregning som brukes til å evaluere lønnsomheten av en investering. Den måler avkastningen i forhold til kostnaden. Formelen er: (Nettofortjeneste / Total investeringskostnad) x 100.
        </p>
        <p>
          I markedsføring brukes ROI til å vurdere den overordnede effekten av markedsførings-innsatsen. Mens ROAS (Return on Ad Spend) ser spesifikt på annonsekostnader, tar ROI hensyn til alle kostnader, inkludert personell, programvare og andre ressurser. En positiv ROI betyr at investeringen har generert mer inntekt enn den kostet, og er en fundamental måling for å rettferdiggjøre markedsføringsbudsjetter.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> ROAS (Return On Ad Spend), Lønnsomhet, KPI (Key Performance Indicator).
        </p>
      </Content>
    </TermContainer>
  );
};

export default ROIPage;
