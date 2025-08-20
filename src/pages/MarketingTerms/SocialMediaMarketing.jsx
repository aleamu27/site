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

const SocialMediaMarketingPage = () => {
  return (
    <TermContainer>
      <Title>Social Media Marketing: Engasjer med kunder der de er</Title>
      <Content>
        <p>
          Social Media Marketing, eller markedsføring i sosiale medier, er bruken av sosiale medieplattformer som Facebook, Instagram, LinkedIn og TikTok for å bygge merkevare, øke salg og drive trafikk til nettstedet.
        </p>
        <p>
          Dette innebærer å publisere engasjerende innhold, lytte til og interagere med følgere, analysere resultater og kjøre betalte annonsekampanjer. En vellykket strategi krever en dyp forståelse av hver plattforms unike styrker og publikum, og å skape innhold som er tilpasset den spesifikke konteksten. Det er en kraftig måte å bygge et fellesskap rundt merkevaren din på.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Facebook Ads, Influencer Marketing, Engasjement.
        </p>
      </Content>
    </TermContainer>
  );
};

export default SocialMediaMarketingPage;
