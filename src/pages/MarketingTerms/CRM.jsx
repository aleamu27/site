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

const CRMPage = () => {
  return (
    <TermContainer>
      <Title>CRM (Customer Relationship Management): Bygg sterke og varige kunderelasjoner</Title>
      <Content>
        <p>
          Customer Relationship Management (CRM) refererer til strategier, teknologier og prosesser en bedrift bruker for å administrere og analysere kundeinteraksjoner og -data gjennom hele kundens livssyklus. Målet er å forbedre kunderelasjoner, øke kundelojalitet og drive salgsvekst.
        </p>
        <p>
          Et CRM-system er en programvare som sentraliserer all kundeinformasjon, inkludert kontaktinfo, salgshistorikk, og kommunikasjon. Dette gir salgs-, markedsførings- og kundeservice-teamene et helhetlig bilde av hver kunde, noe som muliggjør personlig tilpasset service og mer effektiv oppfølging.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> LTV (Lifetime Value), VOC (Voice of Customer), Salgstrakt.
        </p>
      </Content>
    </TermContainer>
  );
};

export default CRMPage;
