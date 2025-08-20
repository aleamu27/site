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

const TikTokAdsPage = () => {
  return (
    <TermContainer>
      <Title>TikTok Ads: Annonsering på en voksende plattform</Title>
      <Content>
        <p>
          TikTok Ads er annonseverktøyet for TikTok-plattformen, som lar bedrifter markedsføre sine produkter og tjenester gjennom korte, engasjerende videoer. Plattformen er kjent for sitt unge publikum og sitt fokus på kreativt og autentisk innhold.
        </p>
        <p>
          Annonsører kan bruke ulike formater, som In-Feed Ads (videoer som vises i brukernes "For You"-feed), Branded Hashtag Challenges og Branded Effects. For å lykkes på TikTok, må annonser føles som en naturlig del av plattformens underholdende innholdsstrøm, heller enn som tradisjonell reklame.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Social Media Marketing, Influencer Marketing, Video Marketing.
        </p>
      </Content>
    </TermContainer>
  );
};

export default TikTokAdsPage;
