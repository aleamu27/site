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

const BounceRatePage = () => {
  return (
    <TermContainer>
      <Title>Bounce Rate: Forstå brukerengasjement på nettsiden din</Title>
      <Content>
        <p>
          Bounce rate, eller fluktfrekvens, er en prosentandel som viser hvor mange besøkende som forlater nettsiden din etter å ha sett kun én side, uten å utføre noen handlinger som å klikke på en link, fylle ut et skjema eller gjøre et kjøp.
        </p>
        <p>
          En høy bounce rate kan indikere flere ting: at innholdet ikke var relevant for den besøkende, at siden var forvirrende, eller at lastetiden var for lang. Det er viktig å analysere bounce rate i kontekst. For eksempel kan en bloggpost ha en naturlig høyere bounce rate enn en produktside. Å redusere en unødvendig høy bounce rate er en sentral del av konverteringsoptimalisering (CRO).
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> CRO (Conversion Rate Optimization), Landingsside, Engasjement.
        </p>
      </Content>
    </TermContainer>
  );
};

export default BounceRatePage;
