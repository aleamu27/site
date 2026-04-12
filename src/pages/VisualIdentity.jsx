import React from 'react';
import styled, { css } from 'styled-components';

/* Same footprint as the hero image strip (full width within section padding). */
const heroStripLayout = css`
  width: 100%;
  height: clamp(260px, 38.4vw, 470px);
  flex-shrink: 0;
  border-radius: 5px;
  overflow: hidden;
  background: #e8e8e8;
`;

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
  ${heroStripLayout}
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

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
  gap: 0;
  min-width: 0;

  /* First Lead blurb: match vertical air around the later blurb (duo block adds ~3.5–6rem below images). */
  & > section:first-of-type {
    padding-top: clamp(2.5rem, 6.5vh, 4rem);
    padding-bottom: clamp(3.5rem, 10vh, 6rem);
  }
`;

const StickyRail = styled.div`
  min-width: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 0;
  /* Same vertical offset as before when the rail was only as tall as the panel: (panel − headline) / 2 */
  padding-top: max(0px, calc((clamp(260px, 38.4vw, 470px) - 6.25rem) / 2));

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

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

/* Inside FirstSection: no extra horizontal padding (FirstSection already pads). */
const TextSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: clamp(1.25rem, 3vh, 2rem) 0 clamp(3rem, 9vh, 5.5rem);
`;

const TextColumn = styled.div`
  min-width: 0;
  width: 100%;
  max-width: 36rem;
`;

const LeadBlurb = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.35;
  letter-spacing: -0.02em;
  margin: 0;
`;

const DuoSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 clamp(3.5rem, 10vh, 6rem);
`;

const DuoRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: clamp(20px, 4vw, 48px);
  min-width: 0;
  align-items: stretch;
`;

const DuoFigure = styled.figure`
  flex: 1;
  min-width: 0;
  margin: 0;
  height: clamp(380px, 54vw, 720px);
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

const FeatureSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: clamp(0.75rem, 2vh, 1.25rem) 1.1rem clamp(3rem, 9vh, 5.5rem);

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const R2 = 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev';
const HERO_IMG = `${R2}/visualidentity/visual-identity-hero.png`;
const PANEL_IMG = `${R2}/visualidentity/visual-identity-panel.png`;
const SHOWCASE_LEFT = '/visual-identity-showcase-left.png';
const SHOWCASE_RIGHT = `${R2}/visualidentity/visual-identity-showcase-right.png`;
const FEATURE_IMG = `${R2}/visualidentity/visual-identity-feature.png`;

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

          <TextSection aria-label="Visual identity">
            <TextColumn>
              <LeadBlurb>
                We help you refresh brand identity, reshape product UI, or bring both under one
                system. You walk away with clear visuals, patterns, and guidance your team can ship.
              </LeadBlurb>
            </TextColumn>
          </TextSection>

          <DuoSection aria-label="Product and brand showcase">
            <DuoRow>
              <DuoFigure>
                <img
                  src={SHOWCASE_LEFT}
                  alt="Parkshare mobile app concept: parking marketplace landing screen"
                  loading="lazy"
                  decoding="async"
                />
              </DuoFigure>
              <DuoFigure>
                <img
                  src={SHOWCASE_RIGHT}
                  alt="Health records mobile app concept: documents and verified list UI"
                  loading="lazy"
                  decoding="async"
                />
              </DuoFigure>
            </DuoRow>
          </DuoSection>

          <TextSection aria-label="Engineering and visual craft">
            <TextColumn>
              <LeadBlurb>
                We build backends and services for real load and real scrutiny. The interface gets
                the same ambition: visually striking, easy to read, and aligned with what the product
                actually does.
              </LeadBlurb>
            </TextColumn>
          </TextSection>
        </LeftColumn>

        <StickyRail>
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

    <FeatureSection aria-label="Visual identity feature image">
      <MediaFigure>
        <img
          src={FEATURE_IMG}
          alt="Hepta visual identity: wide feature frame"
          loading="lazy"
          decoding="async"
        />
      </MediaFigure>
    </FeatureSection>
  </Page>
);

export default VisualIdentity;
