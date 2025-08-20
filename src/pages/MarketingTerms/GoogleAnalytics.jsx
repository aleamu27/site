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

const GoogleAnalyticsPage = () => {
  return (
    <TermContainer>
      <Title>Google Analytics: Forstå brukerne dine og optimaliser nettsiden</Title>
      <Content>
        <p>
          Google Analytics er et kraftig og gratis verktøy fra Google som gir deg detaljert innsikt i trafikken på nettstedet ditt. Det sporer og rapporterer data om hvordan brukere finner og interagerer med sidene dine.
        </p>
        <p>
          Med Google Analytics kan du se hvor brukerne dine kommer fra (f.eks. organisk søk, sosiale medier, direkte trafikk), hvilke sider som er mest populære, hvor lenge de blir på siden, og om de fullfører viktige handlinger (konverteringer). Denne informasjonen er uvurderlig for å forstå publikummet ditt, måle effekten av markedsføringen og ta datadrevne beslutninger for å forbedre nettstedet og brukeropplevelsen.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Dataanalyse, Konverteringssporing, Brukeratferd.
        </p>
      </Content>
    </TermContainer>
  );
};

export default GoogleAnalyticsPage;
