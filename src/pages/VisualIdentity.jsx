import React from 'react';
import styled from 'styled-components';

const Page = styled.main`
  min-height: 100vh;
  background: #ffffff;
`;

const FirstSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  min-height: 82vh;
  padding: clamp(5.75rem, 14vh, 8.5rem) 1.1rem clamp(3rem, 8vh, 5rem);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const MediaFigure = styled.figure`
  width: 100%;
  height: clamp(260px, 38.4vw, 470px);
  flex-shrink: 0;
  margin: 0;
  border-radius: 5px;
  overflow: hidden;
  background: #e8e8e8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

/* Crop favours the right edge of the asset (wide compositions). */
const PanelFigure = styled(MediaFigure)`
  img {
    object-position: right center;
  }
`;

const SplitRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: clamp(1rem, 3vw, 2.25rem);
  align-items: stretch;
  min-width: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`;

const StickyRail = styled.div`
  min-width: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

/* Equal flex spacers vertically center the sticky block (transform cannot live on the sticky node). */
const RailSpacer = styled.div`
  flex: 1;
  min-height: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderBlock = styled.div`
  position: sticky;
  top: clamp(4.5rem, 10.5vh, 6rem);
  flex: none;
  align-self: stretch;
  min-width: 0;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    padding-top: 0.25rem;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.35rem 0;
  transform: translateY(-0.65rem);

  @media (max-width: 768px) {
    transform: translateY(-0.35rem);
  }
`;

const Eyebrow = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: #8c8c8c;
  margin: 0 0 0.65rem;
  line-height: 1.4;
  white-space: nowrap;
`;

const PageHeader = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: clamp(1.35rem, 2.9vw, 2.35rem);
  letter-spacing: -0.03em;
  line-height: 1.22;
  color: #0a0a0a;
  margin: 0;
  max-width: 18em;
`;

const TextSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: clamp(1.25rem, 3vh, 2rem) 1.1rem clamp(3rem, 9vh, 5.5rem);

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const TextSectionGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: clamp(1rem, 3vw, 2.25rem);
  align-items: start;
  min-width: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextColumn = styled.div`
  min-width: 0;
  max-width: 36rem;
`;

/* Scale between Consulting page title and body: readable “big” lead, not hero-sized */
const LeadBlurb = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.35;
  letter-spacing: -0.02em;
  margin: 0;
`;

const TextRailSpacer = styled.div`
  min-width: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HERO_IMG = '/visual-identity-hero.png';
const PANEL_IMG = '/visual-identity-panel.png';

const VisualIdentity = () => (
  <Page>
    <FirstSection aria-label="Visual identity hero">
      <MediaFigure>
        <img
          src={HERO_IMG}
          alt="Hepta visual identity and brand design work, full-width hero"
          decoding="async"
          fetchPriority="high"
        />
      </MediaFigure>
      <SplitRow>
        <LeftColumn>
          <PanelFigure>
            <img
              src={PANEL_IMG}
              alt="Hepta visual identity detail across brand and product"
              loading="lazy"
              decoding="async"
            />
          </PanelFigure>
        </LeftColumn>
        <StickyRail>
          <RailSpacer aria-hidden />
          <HeaderBlock>
            <HeaderInner>
              <Eyebrow>Brand + Product</Eyebrow>
              <PageHeader>Elevate your visual identity with Hepta</PageHeader>
            </HeaderInner>
          </HeaderBlock>
          <RailSpacer aria-hidden />
        </StickyRail>
      </SplitRow>
    </FirstSection>

    <TextSection aria-label="Visual identity">
      <TextSectionGrid>
        <TextColumn>
          <LeadBlurb>
            We help you refresh brand identity, reshape product UI, or bring both under one system.
            You walk away with clear visuals, patterns, and guidance your team can ship.
          </LeadBlurb>
        </TextColumn>
        <TextRailSpacer aria-hidden />
      </TextSectionGrid>
    </TextSection>
  </Page>
);

export default VisualIdentity;
