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

const InstagramAdsPage = () => {
  return (
    <TermContainer>
      <Title>Instagram Ads: Visuell markedsføring på en engasjerende plattform</Title>
      <Content>
        <p>
          Instagram Ads er annonsering som kjøres på Instagram-plattformen. Siden Instagram eies av Meta (tidligere Facebook), administreres annonsene gjennom Facebooks annonseverktøy, noe som gir tilgang til de samme kraftige målrettings- og analysemulighetene.
        </p>
        <p>
          Plattformen er svært visuell, noe som gjør den ideell for merkevarer innen mote, reise, mat, design og andre bransjer der det visuelle er viktig. Annonseformater inkluderer bildeannonser, videoannonser, karuseller, og annonser i Stories og Reels. Dette gir bedrifter en unik mulighet til å engasjere seg med et yngre og svært aktivt publikum.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Facebook Ads, Målretting, Visuell markedsføring.
        </p>
      </Content>
    </TermContainer>
  );
};

export default InstagramAdsPage;
