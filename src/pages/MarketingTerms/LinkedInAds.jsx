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

const LinkedInAdsPage = () => {
  return (
    <TermContainer>
      <Title>LinkedIn Ads: Profesjonell B2B-annonsering</Title>
      <Content>
        <p>
          LinkedIn Ads er annonseringsplattformen til LinkedIn, verdens største profesjonelle nettverk. Plattformen er spesielt kraftig for B2B-markedsføring (bedrift-til-bedrift) på grunn av dens unike evne til å målrette annonser basert på bransje, stillingstittel, bedriftsstørrelse og andre profesjonelle demografier.
        </p>
        <p>
          Du kan bruke LinkedIn Ads til å generere leads, drive trafikk til nettstedet ditt, eller bygge merkevarebevissthet blant beslutningstakere i din bransje. Annonseformater inkluderer sponset innhold i nyhetsfeeden, meldingsannonser (InMail), og tekstannonser. For B2B-bedrifter er dette ofte en av de mest effektive kanalene for å nå en høyt kvalifisert målgruppe.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> B2B Marketing, Målretting, CPL (Cost Per Lead).
        </p>
      </Content>
    </TermContainer>
  );
};

export default LinkedInAdsPage;
