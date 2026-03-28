import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #0a0a0a;
  padding: 3rem 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 100vh;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
    gap: 0.5rem;
  }
`;

const Card = styled.div`
  height: 70vh;
  border-radius: 0;
  background: linear-gradient(135deg, #4a90c2 0%, #6ba5d4 30%, #a8c8dc 60%, #e8e4d9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 600px) {
    height: 70vh;
  }
`;

const DarkCard = styled.div`
  height: 25rem;
  border-radius: 0;
  background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 600px) {
    height: 25rem;
  }
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 2rem;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background: #888;
    border-radius: 2px;
  }
`;

const LabelText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #888;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

const BigHeadline = styled.h2`
  font-family: 'Georgia', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 400;
  color: #f0f0f0;
  text-align: center;
  max-width: 900px;
  line-height: 1.25;
  margin: 0;
`;

const GoldText = styled.span`
  color: #d4a574;
`;

const CardHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2.5rem;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const ContactLink = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  color: #000;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: 0;
    width: 0;
    height: 1px;
    background: #000;
    transition: width 0.3s ease;
  }

  &:hover::after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  max-height: 100%;
  box-sizing: border-box;
`;

const Introducing = styled.p`
  font-family: 'Georgia', serif;
  font-size: 1.1rem;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 400;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  margin: 0 0 1.5rem 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: clamp(2rem, 12vw, 4rem);
  }
`;

const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 500;
  color: #1a1a1a;
  text-align: center;
  max-width: 400px;
  line-height: 1.5;
  margin: 0;
`;

const ScrollArrow = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  cursor: pointer;
`;

const ArrowDot = styled.span`
  width: 4px;
  height: 4px;
  background: #1a1a1a;
  border-radius: 1px;
`;

const ArrowLine = styled.div`
  display: flex;
  gap: 3px;
`;

const TwoColumnRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  height: 40rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const ImageCard = styled.div`
  background: linear-gradient(135deg, #4a90c2 0%, #6ba5d4 40%, #a8c8dc 70%, #e8e4d9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    height: 25rem;
  }
`;

const TextCard = styled.div`
  background: #e8e4d9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem;
  box-sizing: border-box;

  @media (max-width: 900px) {
    height: auto;
    padding: 3rem 2rem;
    gap: 3rem;
  }
`;

const TextCardHeadline = styled.h3`
  font-family: 'Georgia', serif;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.25;
  margin: 0;
`;

const TextCardParagraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.7;
  margin: 0;
  max-width: 400px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: #1a1a1a;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 18rem;
  box-sizing: border-box;
`;

const FeatureCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const FeatureCardTitle = styled.h4`
  font-family: 'Georgia', serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #f0f0f0;
  margin: 0;
`;

const FeatureCardIcon = styled.div`
  color: #5a9fd4;
  font-size: 1.2rem;
`;

const FeatureCardDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: #a0a0a0;
  line-height: 1.6;
  margin: 0;
  max-width: 320px;
`;

const PartnerRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PartnerCard = styled.div`
  background: #1a1a1a;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 14rem;
  box-sizing: border-box;
`;

const PartnerLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: #666;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const PartnerLogo = styled.div`
  font-family: 'Georgia', serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: #e8e4d9;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FullscreenCardContainer = styled.section`
  height: 300vh;
  position: relative;
  overflow: visible;
  margin-left: -4rem;
  margin-right: -4rem;
  margin-bottom: -3rem;

  @media (max-width: 900px) {
    margin-left: -2rem;
    margin-right: -2rem;
    margin-bottom: -2rem;
  }

  @media (max-width: 600px) {
    margin-left: -1rem;
    margin-right: -1rem;
    margin-bottom: -1rem;
  }
`;

const FullscreenCardSticky = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: visible;
`;

const FullscreenCardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 4rem;
  width: calc(100vw - 8rem);
  height: 90vh;
  background: #e8e4d9;

  @media (max-width: 900px) {
    left: 2rem;
    width: calc(100vw - 4rem);
  }

  @media (max-width: 600px) {
    left: 1rem;
    width: calc(100vw - 2rem);
  }
`;

const FullscreenCardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  height: 90vh;
  box-sizing: border-box;
`;

const FullscreenLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.5rem;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background: #1a1a1a;
    border-radius: 2px;
  }
`;

const FullscreenLabelText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #1a1a1a;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

const FullscreenHeadline = styled.h2`
  font-family: 'Georgia', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 400;
  color: #1a1a1a;
  text-align: center;
  max-width: 800px;
  line-height: 1.2;
  margin: 0 0 3rem 0;
`;

const BlueText = styled.span`
  color: #5a9fd4;
`;

const PillRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Pill = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #1a1a1a;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  border: 1px dashed #999;
  border-radius: 30px;
`;

const PillPlus = styled.div`
  width: 32px;
  height: 32px;
  border: 1px dashed #999;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #999;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Silmaril = () => {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !backgroundRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Calculate scroll progress - start earlier by adding offset
      const scrolledIntoContainer = -rect.top + viewportHeight * 0.3;
      const scrollableDistance = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolledIntoContainer / scrollableDistance));

      // Dimensions
      const normalWidth = viewportWidth - 128; // 100vw - 8rem
      const fullWidth = viewportWidth * 0.99;
      const normalHeight = viewportHeight * 0.90;
      const fullHeight = viewportHeight * 0.99;

      let currentWidth, currentHeight;

      // Three phases (faster expansion):
      // Phase 1 (0-0.12): Expand from normal to full
      // Phase 2 (0.12-0.88): Stay at full (animations)
      // Phase 3 (0.88-1.0): Shrink back to normal

      if (progress < 0.12) {
        // Phase 1: Expand (fast)
        const phaseProgress = progress / 0.12;
        currentWidth = normalWidth + (phaseProgress * (fullWidth - normalWidth));
        currentHeight = normalHeight + (phaseProgress * (fullHeight - normalHeight));
      } else if (progress < 0.88) {
        // Phase 2: Stay full
        currentWidth = fullWidth;
        currentHeight = fullHeight;
      } else {
        // Phase 3: Shrink back
        const phaseProgress = (progress - 0.88) / 0.12;
        currentWidth = fullWidth - (phaseProgress * (fullWidth - normalWidth));
        currentHeight = fullHeight - (phaseProgress * (fullHeight - normalHeight));
      }

      backgroundRef.current.style.width = `${currentWidth}px`;
      backgroundRef.current.style.height = `${currentHeight}px`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  return (
    <Wrapper>
      <Card>
        <CardHeader>
          <Logo
            src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/logo-navbar-kzYMdHPcdM8s4aW9L51DTdT581K8Zl.png"
            alt="Hepta Logo"
          />
          <ContactLink>Contact</ContactLink>
        </CardHeader>
        <CardContent>
          <Introducing>Introducing</Introducing>
          <Title>Silmaril</Title>
          <Subtitle>
            The light of the Two Trees, captured forever in three jewels
          </Subtitle>
        </CardContent>
        <ScrollArrow>
          <ArrowLine>
            <ArrowDot />
            <ArrowDot />
            <ArrowDot />
          </ArrowLine>
          <ArrowLine>
            <ArrowDot />
            <ArrowDot />
          </ArrowLine>
          <ArrowDot />
        </ScrollArrow>
      </Card>

      <DarkCard>
        <CardContent>
          <Label>
            <LabelText>The Legend</LabelText>
          </Label>
          <BigHeadline>
            <GoldText>Three jewels</GoldText> were made by Feanor, the greatest of the Eldar, and none shall ever make their like again.
          </BigHeadline>
        </CardContent>
      </DarkCard>

      <TwoColumnRow>
        <ImageCard>
          {/* Abstract visual element placeholder */}
        </ImageCard>
        <TextCard>
          <TextCardHeadline>
            Preserve the light by protecting the jewels that hold it.
          </TextCardHeadline>
          <TextCardParagraph>
            In the ancient days, the light of the Two Trees illuminated all of Valinor. When Morgoth destroyed them, only the Silmarils remained to preserve that sacred radiance — three perfect gems that would shape the fate of Elves and Men for ages to come.
          </TextCardParagraph>
        </TextCard>
      </TwoColumnRow>

      <DarkCard>
        <CardContent>
          <Label>
            <LabelText>The Three Jewels</LabelText>
          </Label>
          <BigHeadline>
            Craftsmanship preserving the <GoldText>sacred light</GoldText> of the ancient world.
          </BigHeadline>
        </CardContent>
      </DarkCard>

      <FeatureGrid>
        <FeatureCard>
          <FeatureCardHeader>
            <FeatureCardTitle>The First Silmaril</FeatureCardTitle>
            <FeatureCardIcon>✦</FeatureCardIcon>
          </FeatureCardHeader>
          <FeatureCardDescription>
            Bound upon the brow of Beren, cast into the depths of the sea, its light shines still beneath the waves eternal.
          </FeatureCardDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureCardHeader>
            <FeatureCardTitle>The Second Silmaril</FeatureCardTitle>
            <FeatureCardIcon>✦✦</FeatureCardIcon>
          </FeatureCardHeader>
          <FeatureCardDescription>
            Taken by Maedhros in despair, cast into a fiery chasm, now burning at the heart of the earth.
          </FeatureCardDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureCardHeader>
            <FeatureCardTitle>The Third Silmaril</FeatureCardTitle>
            <FeatureCardIcon>◈</FeatureCardIcon>
          </FeatureCardHeader>
          <FeatureCardDescription>
            Claimed by Maglor, thrown into the sea in anguish, wandering the shores singing in pain and regret.
          </FeatureCardDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureCardHeader>
            <FeatureCardTitle>The Legacy</FeatureCardTitle>
            <FeatureCardIcon>≡</FeatureCardIcon>
          </FeatureCardHeader>
          <FeatureCardDescription>
            The light of the Silmarils endures in sky, sea, and earth — a testament to beauty that can never be unmade.
          </FeatureCardDescription>
        </FeatureCard>
      </FeatureGrid>

      <PartnerRow>
        <PartnerCard>
          <PartnerLabel>Founding Partner</PartnerLabel>
          <PartnerLogo>
            ◆ House of Fëanor
          </PartnerLogo>
        </PartnerCard>

        <PartnerCard>
          <PartnerLabel>Founding Partner</PartnerLabel>
          <PartnerLogo>
            ❖ Valinor
          </PartnerLogo>
        </PartnerCard>
      </PartnerRow>

      <FullscreenCardContainer ref={containerRef}>
        <FullscreenCardSticky>
          <FullscreenCardBackground ref={backgroundRef} />
          <FullscreenCardContent>
            <FullscreenLabel>
              <FullscreenLabelText>The Oath</FullscreenLabelText>
            </FullscreenLabel>
            <FullscreenHeadline>
              Unite <BlueText>all powers.</BlueText><br />
              Reclaim the sacred light.
            </FullscreenHeadline>
            <PillRow>
              <Pill>Light [Radiance]</Pill>
              <PillPlus>+</PillPlus>
              <Pill>Craft [Creation]</Pill>
              <PillPlus>+</PillPlus>
              <Pill>Oath [Purpose]</Pill>
            </PillRow>
          </FullscreenCardContent>
        </FullscreenCardSticky>
      </FullscreenCardContainer>
    </Wrapper>
  );
};

export default Silmaril;
