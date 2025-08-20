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

const AltTextPage = () => {
  return (
    <TermContainer>
      <Title>Alt-tekst: Tilgjengelighet og SEO for bilder</Title>
      <Content>
        <p>
          Alt-tekst (alternativ tekst) er en kort, beskrivende tekst som legges til et bilde på en nettside. Den har to primære funksjoner: tilgjengelighet og søkemotoroptimalisering (SEO).
        </p>
        <p>
          For det første, hvis et bilde ikke kan lastes inn, vil alt-teksten vises i stedet. Enda viktigere er det at skjermlesere bruker alt-teksten for å beskrive bildet for svaksynte brukere, noe som gjør innholdet ditt mer tilgjengelig.
        </p>
        <p>
          For det andre hjelper alt-tekst søkemotorer som Google med å forstå hva bildet handler om. Ved å inkludere relevante søkeord, kan du forbedre bildets rangering i bildesøk og gi mer kontekst til siden din, noe som styrker din generelle SEO.
        </p>
        <p>
          <strong>Eksempel på god alt-tekst:</strong> "En golden retriever som leker med en rød ball i en park."
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> SEO (Search Engine Optimization), Keywords (Søkeord).
        </p>
      </Content>
    </TermContainer>
  );
};

export default AltTextPage;
