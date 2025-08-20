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

const CMSPage = () => {
  return (
    <TermContainer>
      <Title>CMS (Content Management System): Publiser og administrer innhold enkelt</Title>
      <Content>
        <p>
          Et Content Management System (CMS), eller innholdsstyringssystem, er en programvare som lar deg lage, administrere og publisere digitalt innhold uten å måtte kode fra bunnen av. Det mest kjente eksempelet er WordPress, som brukes til å administrere nettsider og blogger.
        </p>
        <p>
          Et CMS gir et brukervennlig grensesnitt der du kan skrive og formatere tekst, laste opp bilder og video, og organisere innholdet på nettsiden. Dette gjør det mulig for team uten teknisk ekspertise å vedlikeholde og oppdatere en nettside effektivt. Mange CMS-er tilbyr også funksjoner for å planlegge publisering av innhold frem i tid.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Blogg, Content Marketing, SEO.
        </p>
      </Content>
    </TermContainer>
  );
};

export default CMSPage;
