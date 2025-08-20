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

const OrganicSearchPage = () => {
  return (
    <TermContainer>
      <Title>Organic Search: Fortjent synlighet i søkemotorer</Title>
      <Content>
        <p>
          Organisk søk refererer til de ubetalte, naturlige resultatene som vises på en søkemotorresultatside (SERP) som Google. Disse resultatene rangeres av søkemotorens algoritmer basert på relevans, autoritet og en rekke andre faktorer.
        </p>
        <p>
          Å oppnå høy rangering i organisk søk er målet med søkemotoroptimalisering (SEO). I motsetning til betalte annonser (SEM), kan du ikke betale for å plassere deg her. Du må fortjene plassen ved å skape høykvalitetsinnhold, ha en teknisk velfungerende nettside og bygge autoritet gjennom lenker fra andre nettsteder. Trafikk fra organisk søk blir ofte ansett som svært verdifull fordi den indikerer en genuin interesse fra brukeren.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> SEO (Search Engine Optimization), SERP (Search Engine Results Page), Søkeord.
        </p>
      </Content>
    </TermContainer>
  );
};

export default OrganicSearchPage;
