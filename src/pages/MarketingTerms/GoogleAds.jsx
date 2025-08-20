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

const GoogleAdsPage = () => {
  return (
    <TermContainer>
      <Title>Google Ads: Vær synlig når kundene leter etter deg</Title>
      <Content>
        <p>
          Google Ads er Googles egen annonseringsplattform, og en av de mest effektive måtene å nå kunder på. Plattformen lar deg vise annonser i Googles søkeresultater (SEM), på andre nettsteder gjennom Google Display Network, på YouTube og i Gmail.
        </p>
        <p>
          Styrken til Google Ads ligger i at du kan nå brukere akkurat i det øyeblikket de aktivt søker etter produktene eller tjenestene du tilbyr. Du byr på søkeord som er relevante for din bedrift, og betaler vanligvis per klikk (CPC). Med presis målretting og kontinuerlig optimalisering kan Google Ads være en svært lønnsom kanal for å drive kvalifisert trafikk og salg.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> SEM (Search Engine Marketing), CPC (Cost Per Click), Søkeord.
        </p>
      </Content>
    </TermContainer>
  );
};

export default GoogleAdsPage;
