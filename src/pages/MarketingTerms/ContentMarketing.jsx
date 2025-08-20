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

const ContentMarketingPage = () => {
  return (
    <TermContainer>
      <Title>Content Marketing: Bygg tillit med verdifullt innhold</Title>
      <Content>
        <p>
          Content marketing, eller innholdsmarkedsføring, er en strategisk tilnærming som fokuserer på å skape og distribuere verdifullt, relevant og konsistent innhold for å tiltrekke og beholde en klart definert målgruppe — og, til syvende og sist, for å drive lønnsom kundehandling.
        </p>
        <p>
          I stedet for å direkte promotere produktene dine, gir du verdi til publikum gjennom blogginnlegg, videoer, podcaster, e-bøker og andre formater. Målet er å bygge tillit, etablere autoritet i bransjen, og skape et sterkt forhold til kundene, slik at de velger deg når de er klare til å kjøpe.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Inbound Marketing, Blogg, SEO (Search Engine Optimization).
        </p>
      </Content>
    </TermContainer>
  );
};

export default ContentMarketingPage;
