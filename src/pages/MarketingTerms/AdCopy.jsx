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

const AdCopyPage = () => {
  return (
    <TermContainer>
      <Title>Ad Copy: Kunsten å overbevise med tekst</Title>
      <Content>
        <p>
          Ad copy er selve teksten i en annonse. Dette inkluderer overskrifter, brødtekst og handlingsfremmende oppfordringer (CTA). Selv om den ofte er kort, er ad copy avgjørende for å fange oppmerksomhet, formidle et budskap og overtale målgruppen til å utføre en ønsket handling.
        </p>
        <p>
          God ad copy er klar, konsis og fokusert på kundens behov og fordeler. Den bruker et språk som appellerer til målgruppen og fremhever hva som gjør produktet eller tjenesten unik. Testing av ulike versjoner av ad copy (A/B-testing) er essensielt for å finne ut hva som gir best resultater.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> CTA (Call to Action), A/B-testing, USP (Unique Selling Point).
        </p>
      </Content>
    </TermContainer>
  );
};

export default AdCopyPage;
