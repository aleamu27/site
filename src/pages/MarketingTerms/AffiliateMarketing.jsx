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

const AffiliateMarketingPage = () => {
  return (
    <TermContainer>
      <Title>Affiliate Marketing: Resultatbasert markedsføring</Title>
      <Content>
        <p>
          Affiliate marketing er en prestasjonsbasert markedsføringsmodell der en bedrift belønner en eller flere partnere (affiliates) for hver kunde eller hvert salg som partneren genererer. I praksis betyr dette at du som annonsør kun betaler for faktiske resultater, for eksempel en provisjon av et salg.
        </p>
        <p>
          Denne modellen involverer fire hovedparter: annonsøren (merkevaren), partneren (f.eks. en blogger, influencer eller et nettsted), kunden, og ofte et affiliatenettverk som administrerer teknologien og betalingene. Det er en kostnadseffektiv måte å utvide rekkevidden din på og dra nytte av andres etablerte publikum.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> CPA (Cost Per Action), ROAS (Return On Ad Spend), Konverteringer.
        </p>
      </Content>
    </TermContainer>
  );
};

export default AffiliateMarketingPage;
