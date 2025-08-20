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

const ContentMetricsPage = () => {
  return (
    <TermContainer>
      <Title>Content Metrics: Mål suksessen til innholdet ditt</Title>
      <Content>
        <p>
          Content metrics er måleenheter som brukes for å analysere og vurdere ytelsen til innholdet ditt. Disse dataene hjelper deg å forstå hva som engasjerer publikummet ditt, hva som driver trafikk, og hva som fører til konverteringer.
        </p>
        <p>
          Viktige målinger kan inkludere sidevisninger, tid på siden, bounce rate, sosiale delinger, kommentarer, og ikke minst, hvor mange leads eller salg innholdet genererer. Ved å spore disse målingene kan du optimalisere din content marketing-strategi og produsere mer av det innholdet som gir best resultater.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> KPI (Key Performance Indicator), Dataanalyse, Engasjement.
        </p>
      </Content>
    </TermContainer>
  );
};

export default ContentMetricsPage;
