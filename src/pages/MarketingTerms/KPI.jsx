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

const KPIPage = () => {
  return (
    <TermContainer>
      <Title>KPI (Key Performance Indicator): Mål det som betyr noe</Title>
      <Content>
        <p>
          En Key Performance Indicator (KPI), eller nøkkeltallsindikator, er en målbar verdi som viser hvor effektivt en bedrift er i å oppnå sentrale forretningsmål. KPI-er brukes til å evaluere suksessen til en bestemt aktivitet eller for bedriften som helhet.
        </p>
        <p>
          Hvilke KPI-er som er viktige, varierer fra bedrift til bedrift og fra avdeling til avdeling. For en markedsavdeling kan viktige KPI-er være CAC (Customer Acquisition Cost), konverteringsrate eller trafikk til nettsiden. For salg kan det være antall nye salg eller gjennomsnittlig ordrestørrelse. Poenget er å velge de få, kritiske målingene som best reflekterer fremgang mot et strategisk mål.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Måling, Datadrevet, ROI (Return on Investment).
        </p>
      </Content>
    </TermContainer>
  );
};

export default KPIPage;
