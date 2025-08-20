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

const WebinarPage = () => {
  return (
    <TermContainer>
      <Title>Webinar: Engasjer og utdann ditt publikum</Title>
      <Content>
        <p>
          Et webinar er et online seminar, en presentasjon, workshop eller forelesning som holdes over internett i sanntid. Det er en effektiv måte å engasjere et publikum på, dele kunnskap og generere leads.
        </p>
        <p>
          Webinarer er interaktive og lar ofte deltakerne stille spørsmål og delta i diskusjoner. De kan brukes til alt fra produktdemonstrasjoner og opplæring til tankelederskap og lead-generering. Fordi de krever en påmelding, er webinarer en utmerket metode for å samle inn kontaktinformasjon fra interesserte prospekter (leads).
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Content Marketing, Lead Generation, Inbound Marketing.
        </p>
      </Content>
    </TermContainer>
  );
};

export default WebinarPage;
