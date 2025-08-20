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

const NativeAdvertisingPage = () => {
  return (
    <TermContainer>
      <Title>Native Advertising (Innholdsmarkedsføring): Annonser som ikke ser ut som annonser</Title>
      <Content>
        <p>
          Native advertising, eller innholdsmarkedsføring, er betalt innhold som er designet for å matche formen, følelsen og funksjonen til medieformatet der det vises. Målet er at annonsen skal gli naturlig inn i det redaksjonelle innholdet, slik at den ikke oppleves som forstyrrende reklame.
        </p>
        <p>
          Et vanlig eksempel er en sponset artikkel i en nettavis som er skrevet i samme stil som avisens øvrige artikler, men som er tydelig merket som "annonse" eller "sponset innhold". Fordi det oppleves som mindre påtrengende, kan native advertising føre til høyere engasjement enn tradisjonelle bannerannonser.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Content Marketing, Sponset innhold, Engasjement.
        </p>
      </Content>
    </TermContainer>
  );
};

export default NativeAdvertisingPage;
