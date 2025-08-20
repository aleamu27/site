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

const SEOPage = () => {
  return (
    <TermContainer>
      <Title>SEO (Search Engine Optimization): Optimalisering for organisk trafikk</Title>
      <Content>
        <p>
          Search Engine Optimization (SEO), eller søkemotoroptimalisering, er prosessen med å forbedre nettstedet ditt for å øke dets synlighet i de organiske (ikke-betalte) resultatene i søkemotorer som Google. Målet er å tiltrekke seg mer og bedre kvalifisert trafikk.
        </p>
        <p>
          SEO omfatter tre hovedområder: Teknisk SEO (sikre at siden kan indekseres av søkemotorer), On-Page SEO (optimalisere innhold og HTML-kildekode for relevante søkeord), og Off-Page SEO (bygge autoritet gjennom lenker og andre eksterne signaler). God SEO er en langsiktig strategi som bygger troverdighet og kan gi en jevn strøm av gratis trafikk.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Organisk Søk, Søkeord, Backlink.
        </p>
      </Content>
    </TermContainer>
  );
};

export default SEOPage;
