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

const BenchmarkPage = () => {
  return (
    <TermContainer>
      <Title>Benchmark: Sett standarden for suksess</Title>
      <Content>
        <p>
          En benchmark er en standard eller et referansepunkt som brukes til å måle og sammenligne resultater. Innen markedsføring er benchmarking prosessen med å sammenligne dine egne prestasjoner, prosesser og strategier mot bransjens beste eller dine sterkeste konkurrenter.
        </p>
        <p>
          Målet er å identifisere forbedringsområder og sette realistiske, men ambisiøse mål. En god benchmark bør være oppnåelig for å motivere, men også utfordrende for å drive vekst. Det kan være alt fra en bestemt konverteringsrate, åpningsrate på e-post, eller kundetilfredshetsscore.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> KPI (Key Performance Indicator), MAB (Måleenheter av betydning), Dataanalyse.
        </p>
      </Content>
    </TermContainer>
  );
};

export default BenchmarkPage;
