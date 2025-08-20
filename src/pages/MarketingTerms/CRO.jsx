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

const CROPage = () => {
  return (
    <TermContainer>
      <Title>CRO (Conversion Rate Optimization): Få flere til å fullføre ønskede handlinger</Title>
      <Content>
        <p>
          Conversion Rate Optimization (CRO), eller konverteringsoptimalisering, er en systematisk prosess for å øke andelen av besøkende på en nettside som utfører en ønsket handling. En konvertering kan være alt fra et kjøp og en bestilling, til å booke et møte eller melde seg på et nyhetsbrev.
        </p>
        <p>
          CRO handler om å forstå hvordan brukere navigerer på siden din, hva som hindrer dem, og hva som motiverer dem. Metoder som A/B-testing, analyse av brukeratferd og forbedring av brukeropplevelsen (UX) er sentrale i CRO-arbeidet. Målet er å få mest mulig verdi ut av den trafikken du allerede har.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Konvertering, A/B-testing, Bounce Rate.
        </p>
      </Content>
    </TermContainer>
  );
};

export default CROPage;
