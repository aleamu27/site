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

const EmailMarketingPage = () => {
  return (
    <TermContainer>
      <Title>Email Marketing: Bygg relasjoner direkte i innboksen</Title>
      <Content>
        <p>
          E-postmarkedsføring er en form for direkte markedsføring som bruker e-post til å kommunisere med og pleie forholdet til potensielle og eksisterende kunder. Dette er en svært effektiv kanal fordi du kommuniserer med personer som aktivt har gitt deg tillatelse til å kontakte dem, for eksempel ved å melde seg på et nyhetsbrev.
        </p>
        <p>
          God e-postmarkedsføring handler om å levere relevant og verdifullt innhold, ikke bare salgstilbud. Dette kan inkludere nyhetsoppdateringer, eksklusive tilbud, tips og guider. Ved å segmentere e-postlisten din kan du sende enda mer målrettet og personlig innhold, noe som øker engasjement og konverteringer.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Nyhetsbrev, Konvertering, CRM (Customer Relationship Management).
        </p>
      </Content>
    </TermContainer>
  );
};

export default EmailMarketingPage;
