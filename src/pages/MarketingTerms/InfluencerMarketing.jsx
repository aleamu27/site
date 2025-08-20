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

const InfluencerMarketingPage = () => {
  return (
    <TermContainer>
      <Title>Influencer Marketing: Samarbeid med opinionsledere</Title>
      <Content>
        <p>
          Influencer marketing er en form for markedsføring i sosiale medier som involverer anbefalinger og produktplassering fra influencere – personer som har en dedikert følgerskare og er ansett som eksperter innenfor sin nisje.
        </p>
        <p>
          Fordi influencere har bygget opp tillit og troverdighet hos sitt publikum, kan deres anbefalinger fungere som en form for sosialt bevis for en bedrifts potensielle kunder. Samarbeid kan variere fra en enkelt sponset post til langsiktige partnerskap. Nøkkelen til suksess er å finne influencere hvis følgere overlapper med bedriftens målgruppe.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Sosialt bevis, Merkevarebevissthet, Engasjement.
        </p>
      </Content>
    </TermContainer>
  );
};

export default InfluencerMarketingPage;
