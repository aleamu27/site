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

const UTMTaggingPage = () => {
  return (
    <TermContainer>
      <Title>UTM Tagging: Spor trafikken din nøyaktig</Title>
      <Content>
        <p>
          UTM-tagging (Urchin Tracking Module) er en metode for å legge til parametere i en URL for å spore hvor trafikken til nettstedet ditt kommer fra. Dette gir detaljert innsikt i hvilke markedsføringskampanjer og -kanaler som er mest effektive.
        </p>
        <p>
          En UTM-tagget URL inneholder vanligvis fem parametere: <code>utm_source</code> (kilden, f.eks. Google), <code>utm_medium</code> (mediet, f.eks. cpc), <code>utm_campaign</code> (kampanjenavnet), <code>utm_term</code> (søkeordet) og <code>utm_content</code> (innholdet, f.eks. en spesifikk annonse). Verktøy som Google Analytics leser disse taggene og gir deg nøyaktige rapporter om kampanjeytelsen.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Google Analytics, Kampanjesporing, CPC.
        </p>
      </Content>
    </TermContainer>
  );
};

export default UTMTaggingPage;
