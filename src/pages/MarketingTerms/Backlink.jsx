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

const BacklinkPage = () => {
  return (
    <TermContainer>
      <Title>Backlink: Bygg autoritet for din nettside</Title>
      <Content>
        <p>
          En backlink, eller en inngående lenke, er en lenke fra en annen nettside til din egen. I søkemotoroptimalisering (SEO) fungerer backlinks som "stemmer" for din nettside. Jo flere relevante og autoritative nettsteder som lenker til deg, jo mer troverdig og viktig anser søkemotorer som Google din side for å være.
        </p>
        <p>
          Kvaliteten på lenkene er viktigere enn kvantiteten. En lenke fra en anerkjent bransjeside har mer verdi enn mange lenker fra ukjente eller irrelevante sider. Å bygge en sterk backlink-profil er en langsiktig og viktig strategi for å forbedre organisk synlighet.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> SEO (Search Engine Optimization), Referral Traffic, Earned Media.
        </p>
      </Content>
    </TermContainer>
  );
};

export default BacklinkPage;
