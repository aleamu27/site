import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import SmallSiteFooter from '../components/SmallSiteFooter';

const subtleTextIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(3px);
    filter: blur(0.4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
`;

const modalBackdropIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalCardIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.985);
    filter: blur(1.2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
`;

const modalPaneInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const modalPaneInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const subtleTextMotion = css`
  animation: ${subtleTextIn} 420ms cubic-bezier(0.2, 0.72, 0.2, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Page = styled.main`
  min-height: 100vh;
  background: #fff;
  padding: 8px;
  box-sizing: border-box;
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, system-ui, sans-serif;

  h1,
  h2,
  h3,
  h4,
  p,
  li,
  button:not([data-placeholder-text]),
  span:not([data-placeholder-text]) {
    ${subtleTextMotion}
  }
`;

const TopNav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 1px 6px 9px;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: auto;
    display: block;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(1.1rem, 2vw, 1.9rem);
  text-transform: uppercase;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.012em;
  color: #0a0a0a;

  @media (max-width: 900px) {
    display: none;
  }
`;

const CTAButton = styled.button`
  border: 1px solid #171717;
  background: #0a0a0a;
  color: #fff;
  padding: 0.5rem 0.95rem;
  border-radius: 4px;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.013em;
  cursor: pointer;
`;

const HeroFrame = styled.section`
  position: relative;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  min-height: min(82vh, 780px);
  background: #020202;
  isolation: isolate;
`;

const HeroVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  z-index: 3;
  left: clamp(1rem, 6.8vw, 4rem);
  bottom: clamp(1.1rem, 8vh, 3.1rem);
  color: #fff;
`;

const HeroMainRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: clamp(2.4rem, 4.5vw, 4.8rem);

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const HeadlineColumn = styled.div`
  display: grid;
  gap: 1.15rem;
`;

const Headline = styled.h1`
  margin: 0;
  font-size: clamp(2.05rem, 4.55vw, 3.95rem);
  line-height: 1.01;
  letter-spacing: -0.03em;
  font-weight: 400;
  max-width: none;

  .line {
    display: block;
    white-space: nowrap;
  }
`;

const BulletList = styled.ul`
  margin: 0 0 0.22rem 0.45rem;
  padding: 0;
  list-style: none;
  color: rgba(255, 255, 255, 0.86);
  text-transform: uppercase;
  font-size: calc(0.72rem + 2px);
  font-weight: 500;
  letter-spacing: 0.15em;
  line-height: 2.45;
  transform: translateY(18px);

  @media (max-width: 800px) {
    margin-left: 0;
    transform: none;
  }
`;

const StartButton = styled.button`
  width: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.22);
  border-radius: 8px;
  background: #fff;
  color: #171717;
  padding: 0.62rem 1.08rem;
  font-size: 0.84rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.32rem;
  cursor: pointer;
`;

const HERO_VIDEO_SRC = '/funnel101/videos/hero.mp4';
const CRITERION_MAIN_VIDEO_SRC =
  'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Client.mov';
const BERG_MAIN_VIDEO_SRC = '/funnel101/videos/highlight-berg-main.mp4';
const SOLUTION_VIDEO_SRCS = [
  '/funnel101/videos/solutions-01.mp4',
  '/funnel101/videos/solutions-02.mp4',
  '/funnel101/videos/solutions-03.mp4',
  '/funnel101/videos/solutions-04.mp4',
];
const CRITERION_VERTICAL_IMAGE_SRCS = [
  '/funnel101/images/highlight-criterion-vertical-01.png',
  '/funnel101/images/highlight-criterion-vertical-02.png',
];
const CRITERION_WIDE_IMAGE_SRC = '/funnel101/images/highlight-criterion-wide-01.png';
const BERG_VERTICAL_IMAGE_SRCS = [
  '/funnel101/images/highlight-berg-vertical-01.png',
  '/funnel101/images/highlight-berg-vertical-02.png',
];
const BERG_WIDE_IMAGE_SRC = '/funnel101/images/highlight-berg-wide-01.png';
const SHOWCASE_IMAGE_SRCS = ['/funnel101/images/showcase-01.png', '/funnel101/images/showcase-02.png'];
const FINAL_CTA_BG_SRC = '/funnel101/images/final-cta-bg.png';
const CONTACT_MODAL_IMAGE_SRC = '/funnel101/images/contact-modal.png';

const SolutionsSection = styled.section`
  padding: clamp(8rem, 19vh, 14rem) clamp(0.85rem, 4vw, 3rem) clamp(4.8rem, 10vh, 8rem);
`;

const SolutionsHeading = styled.h2`
  margin: 0 0 clamp(1.4rem, 3vw, 2.2rem);
  max-width: 31ch;
  color: #404040;
  font-size: clamp(1.35rem, 2.35vw, 2.1rem);
  letter-spacing: -0.03em;
  line-height: 1.08;
  font-weight: 400;
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.75rem, 1.15vw, 1rem);

  @media (max-width: 1100px) {
    overflow-x: auto;
    grid-template-columns: repeat(4, minmax(245px, 245px));
    padding-bottom: 0.3rem;
    scrollbar-width: thin;
  }
`;

const SolutionCard = styled.article`
  min-width: 0;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
`;

const CardVideoPlaceholder = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  background: #5f6670;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.38) 100%);
    z-index: 1;
  }
`;

const CardVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(1.02) brightness(0.94);
`;

const CardHoverShade = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.42);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  opacity: 0;
  transition: opacity 180ms ease;

  ${CardVideoPlaceholder}:hover &,
  ${CardVideoPlaceholder}:focus-within & {
    opacity: 1;
  }
`;

const CardHoverText = styled.button.attrs({ 'data-placeholder-text': 'true' })`
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -42%);
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.98);
  font-size: calc(clamp(0.72rem, 0.85vw, 1rem) + 2px);
  font-weight: 400;
  letter-spacing: -0.01em;
  white-space: nowrap;
  cursor: pointer;
  opacity: 0;
  transition: opacity 180ms ease, transform 180ms ease;

  ${CardVideoPlaceholder}:hover &,
  ${CardVideoPlaceholder}:focus-within & {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const CardTitle = styled.h3`
  margin: 0.76rem 0 0.34rem;
  color: #404040;
  font-size: clamp(1.07rem, 1.42vw, 1.55rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  font-weight: 500;
`;

const CardBody = styled.p`
  margin: 0;
  color: #666b73;
  font-size: clamp(0.78rem, 0.91vw, 0.95rem);
  line-height: 1.3;
  letter-spacing: -0.005em;
`;

const CardLearnMoreButton = styled.button`
  margin-top: 1.15rem;
  align-self: flex-start;
  margin-left: 0;
  width: fit-content;
  border: 0;
  border-radius: 0;
  background: #111315;
  color: #fff;
  padding: 0.58rem 0.92rem;
  font-size: 0.74rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 220ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #e9ff37;
    transform: translateX(-102%);
    transition: transform 320ms cubic-bezier(0.2, 0.72, 0.2, 1);
  }

  &:hover {
    color: #0d0f12;
  }

  &:hover::before {
    transform: translateX(0);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const CRITERION_SECTIONS = [
  {
    title: 'The story',
    content:
      "Criterion Property Group is a real estate brokerage operating across Washington's Puget Sound market, specializing in high-value residential properties and golf course communities.\n\nAs their client base grew and their market presence expanded, they needed a digital presence that matched the caliber of their work. They came to Hepta to build a platform that reflected their brand, showcased their listings, and gave prospective clients a seamless experience from first visit to first conversation.",
  },
  {
    title: 'The problem',
    content:
      "Their existing website was outdated, slow, and didn't reflect the quality of their work. Property listings were hard to manage, and the site wasn't optimized for the way modern buyers search for homes.",
  },
  {
    title: 'The solution',
    content:
      'Hepta designed and built a full web platform tailored to how Criterion actually operates. Custom property search, MLS integration, dedicated golf community pages, and a clean team presence delivered in a system that is fast, maintainable, and built to grow with them.',
  },
];

const BERG_SECTIONS = [
  {
    title: 'The story',
    content:
      'Hepta built a clean, minimal platform for BE:RG that puts Hakon and his work front and center. The site presents his investment focus, active engagements, and professional background in a format that reflects the weight of the business.\n\nNo clutter, no noise, just the information that matters to the right audience.',
  },
  {
    title: 'The problem',
    content:
      'The previous web presence lacked clarity and structure, and did not communicate the depth of experience and current engagements in a concise, decision-maker friendly way.',
  },
  {
    title: 'The solution',
    content:
      'Hepta designed a sharp, editorial-style digital presence with clear sections for background, current work, and investment focus — simple to maintain and aligned with BE:RG positioning.',
  },
];

const HighlightSection = styled.section`
  padding: clamp(3.2rem, 7vw, 5.4rem) clamp(0.85rem, 4vw, 3rem) clamp(2.2rem, 5vw, 3.6rem);
`;

const HighlightInner = styled.div`
  max-width: 1400px;
`;

const HighlightEyebrow = styled.p`
  margin: 0 0 0.7rem;
  color: #8f9398;
  font-size: 0.9rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  font-weight: 400;
`;

const HighlightTitle = styled.h2`
  margin: 0 0 1.3rem;
  max-width: 18ch;
  color: #404040;
  font-size: clamp(1.35rem, 2.35vw, 2.1rem);
  letter-spacing: -0.03em;
  line-height: 1.08;
  font-weight: 400;
`;

const HighlightLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 0.8rem;

  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
  }
`;

const LeftMediaColumn = styled.div`
  min-width: 0;
`;

const HighlightMainMedia = styled.div`
  border-radius: 6px;
  overflow: hidden;
  min-height: clamp(240px, 37vw, 520px);
  background: #c8ced3;
  position: relative;
`;

const HighlightMainVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${p => (p.$noTint ? 'none' : 'saturate(0.86) contrast(1.02) brightness(0.9)')};
`;

const StickyPanel = styled.aside`
  align-self: start;
  position: sticky;
  top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.42rem;

  @media (max-width: 1160px) {
    position: static;
  }
`;

const StickyAccordionItem = styled.div`
  background: #ededee;
  border-radius: 4px;
  overflow: hidden;
`;

const StickyAccordionHeader = styled.button`
  width: 100%;
  border: 0;
  background: transparent;
  color: #1f2226;
  border-radius: 4px;
  padding: 0.95rem 1rem;
  font-size: 0.97rem;
  font-weight: 600;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const StickyAccordionIcon = styled.span`
  font-size: 1.04rem;
  line-height: 1;
  color: #1f2226;
`;

const StickyAccordionContent = styled.div`
  padding: 0 1rem 1rem;
`;

const StickyAccordionCollapse = styled.div`
  overflow: hidden;
  transition: height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

const StoryText = styled.p`
  margin: 0;
  color: #32363b;
  font-size: 0.94rem;
  line-height: 1.35;
  white-space: pre-line;
`;

const SiteChip = styled.button`
  margin-top: 0.35rem;
  width: fit-content;
  border: 0;
  background: #1b1b1d;
  color: #fff;
  border-radius: 0;
  padding: 0.5rem 0.85rem;
  font-size: 0.65rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 220ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #e9ff37;
    transform: translateX(-102%);
    transition: transform 320ms cubic-bezier(0.2, 0.72, 0.2, 1);
  }

  &:hover {
    color: #0d0f12;
  }

  &:hover::before {
    transform: translateX(0);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const HighlightBottomGrid = styled.div`
  margin-top: 0.85rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  /* Keep two columns on mobile: stacking each mockup full-width makes aspect-ratio + min-height huge (fake “gaps”). */
`;

const BottomMedia = styled.div`
  aspect-ratio: 0.72 / 1;
  min-height: 360px;
  border-radius: 4px;

  @media (max-width: 600px) {
    min-height: 260px;
  }
  background: ${({ $image }) =>
    $image
      ? `url(${$image}) center / cover no-repeat`
      : `
    radial-gradient(circle at 30% 22%, rgba(255, 255, 255, 0.26), transparent 34%),
    radial-gradient(circle at 72% 78%, rgba(0, 0, 0, 0.16), transparent 40%),
    linear-gradient(145deg, #d5d0c8 0%, #c7c1b9 52%, #b7b0a8 100%)
  `};
  background-position: ${({ $position }) => $position || 'center'};
  background-size: ${({ $size }) => $size || 'cover'};
  background-repeat: no-repeat;
`;

const BottomMediaWide = styled(BottomMedia)`
  aspect-ratio: auto;
  grid-column: 1 / -1;
  min-height: 460px;

  @media (max-width: 600px) {
    min-height: 320px;
  }
`;

const ShowcaseSection = styled.section`
  background: #fff;
  padding: clamp(6rem, 14vh, 10rem) clamp(0.85rem, 4vw, 3rem) clamp(3rem, 7vw, 5.5rem);
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(0.95rem, 1.5vw, 1.3rem);

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const ShowcaseCard = styled.article`
  min-width: 0;
`;

const ShowcaseImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 1.02 / 1;
  border-radius: 2px;
  background: ${({ $image }) =>
    $image
      ? `url(${$image}) center / cover no-repeat`
      : `
    radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.42), transparent 34%),
    radial-gradient(circle at 75% 77%, rgba(0, 0, 0, 0.18), transparent 39%),
    linear-gradient(145deg, #dbe5e8 0%, #d0d9dc 42%, #c4cccf 100%)
  `};
`;

const ShowcaseCardTitle = styled.h3`
  margin: 0.85rem 0 0.35rem;
  color: #404040;
  font-size: clamp(1.5rem, 2.2vw, 2rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  font-weight: 400;
`;

const ShowcaseCardBody = styled.p`
  margin: 0;
  color: #3f444a;
  font-size: clamp(0.9rem, 1.05vw, 1.08rem);
  line-height: 1.38;
  max-width: 62ch;
`;

const ShowcaseCardButton = styled.button`
  margin-top: 0.95rem;
  width: fit-content;
  border: 0;
  background: #111315;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.005em;
  line-height: 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 220ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #e9ff37;
    transform: translateX(-102%);
    transition: transform 320ms cubic-bezier(0.2, 0.72, 0.2, 1);
  }

  &:hover {
    color: #0d0f12;
  }

  &:hover::before {
    transform: translateX(0);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const FinalCtaSection = styled.section`
  padding: clamp(2.2rem, 5.4vw, 4.2rem) clamp(0.85rem, 4vw, 3rem) clamp(4rem, 9vw, 7rem);
`;

const FinalCtaCard = styled.div`
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  min-height: clamp(250px, 34vw, 380px);
  background: ${({ $image }) =>
    $image
      ? `
    linear-gradient(90deg, rgba(183, 214, 220, 0.42) 0%, rgba(189, 201, 173, 0.36) 38%, rgba(39, 35, 35, 0.46) 100%),
    url(${$image}) center / cover no-repeat
  `
      : `
    linear-gradient(90deg, rgba(183, 214, 220, 0.74) 0%, rgba(189, 201, 173, 0.5) 38%, rgba(39, 35, 35, 0.64) 100%),
    radial-gradient(circle at 16% 50%, rgba(196, 226, 228, 0.62), transparent 45%),
    linear-gradient(120deg, #b7c8cc 0%, #8c8876 44%, #443f37 100%)
  `};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0 30%, rgba(255, 255, 255, 0) 30% 100%);
    opacity: 0.7;
    pointer-events: none;
  }
`;

const FinalCtaOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.15rem;
  padding: clamp(1.3rem, 3.6vw, 2.5rem);
  color: #f5f6f6;
`;

const FinalCtaTitle = styled.h2`
  margin: 0;
  max-width: 16ch;
  font-size: clamp(1.15rem, 1.95vw, 1.9rem);
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 1.08;

  .line {
    display: block;
    white-space: nowrap;
  }
`;

const FinalCtaButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
`;

const FinalPrimaryButton = styled.button`
  border: 0;
  background: #ffffff;
  color: #191a1c;
  padding: 0.68rem 1rem;
  border-radius: 2px;
  font-size: 0.86rem;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 220ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #e9ff37;
    transform: translateX(-102%);
    transition: transform 320ms cubic-bezier(0.2, 0.72, 0.2, 1);
  }

  &:hover {
    color: #0d0f12;
  }

  &:hover::before {
    transform: translateX(0);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const FinalSecondaryButton = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.72);
  background: transparent;
  color: #f8f9f9;
  padding: 0.64rem 0.92rem;
  border-radius: 2px;
  font-size: 0.84rem;
  font-weight: 400;
  line-height: 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 220ms ease, border-color 220ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #e9ff37;
    transform: translateX(-102%);
    transition: transform 320ms cubic-bezier(0.2, 0.72, 0.2, 1);
  }

  &:hover {
    color: #0d0f12;
    border-color: #e9ff37;
  }

  &:hover::before {
    transform: translateX(0);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const ContactModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1200;
  background: rgba(8, 12, 16, 0.5);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  display: grid;
  place-items: center;
  padding: 1.4rem;
  animation: ${modalBackdropIn} 220ms ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ContactModalCard = styled.div`
  width: min(1140px, calc(100% - 0.4rem));
  min-height: clamp(470px, 70vh, 600px);
  border-radius: 6px;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 48%);
  background: rgba(170, 180, 187, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.36);
  backdrop-filter: blur(14px) saturate(1.02);
  -webkit-backdrop-filter: blur(14px) saturate(1.02);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
  animation: ${modalCardIn} 420ms cubic-bezier(0.2, 0.72, 0.2, 1) both;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    max-height: 92vh;
    overflow-y: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ContactModalLeft = styled.div`
  padding: clamp(1.3rem, 2.4vw, 2rem) clamp(1.25rem, 2.5vw, 2.2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  animation: ${modalPaneInLeft} 460ms cubic-bezier(0.2, 0.72, 0.2, 1) 80ms both;
`;

const ContactModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.8rem;
  width: min(360px, 100%);
`;

const ContactModalLogo = styled.img`
  width: clamp(2rem, 3.2vw, 2.9rem);
  height: auto;
  filter: brightness(0) invert(1);
`;

const ContactModalTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.45rem, 2.25vw, 2.1rem);
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #f0f5f8;
  white-space: normal;
`;

const ContactModalForm = styled.form`
  display: grid;
  gap: 0.86rem;
  width: min(360px, 100%);
`;

const ContactModalInput = styled.input`
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: rgba(215, 224, 230, 0.1);
  color: #f7fbfd;
  padding: 0.5rem 1.1rem;
  font-size: 0.98rem;
  line-height: 1;
  outline: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(243, 248, 252, 0.84);
  }
`;

const ContactModalTextarea = styled.textarea`
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: rgba(215, 224, 230, 0.1);
  color: #f7fbfd;
  padding: 0.5rem 1.1rem;
  font-size: 0.98rem;
  line-height: 1.2;
  min-height: 150px;
  resize: none;
  outline: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(243, 248, 252, 0.84);
  }
`;

const ContactModalActions = styled.div`
  margin-top: 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const ContactModalSuccess = styled.div`
  width: min(360px, 100%);
  padding: 0;
  color: #f4f8fa;
`;

const ContactModalSuccessTitle = styled.h4`
  margin: 0 0 0.38rem;
  font-size: 1.08rem;
  font-weight: 500;
  letter-spacing: -0.01em;
`;

const ContactModalSuccessText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.35;
`;

const ContactModalSend = styled.button`
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: rgba(215, 224, 230, 0.07);
  color: #f7fbfd;
  padding: 0.5rem 1.1rem;
  font-size: 0.98rem;
  line-height: 1;
  cursor: pointer;
`;

const ContactModalRight = styled.div`
  padding: clamp(0.95rem, 1.8vw, 1.2rem);
  display: flex;
  background: transparent;
  animation: ${modalPaneInRight} 460ms cubic-bezier(0.2, 0.72, 0.2, 1) 120ms both;
`;

const ContactModalImage = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  min-height: 100%;
  background:
    linear-gradient(130deg, rgba(23, 27, 33, 0.25) 0%, rgba(23, 27, 33, 0.05) 30%, rgba(23, 27, 33, 0.35) 100%),
    url('${CONTACT_MODAL_IMAGE_SRC}') center / cover no-repeat;
`;

const ChatFooterSection = styled.section`
  padding: clamp(2.8rem, 7vw, 5rem) clamp(0.85rem, 4vw, 3rem) clamp(4rem, 10vw, 8rem);
`;

const ChatBackground = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  min-height: clamp(540px, 72vh, 860px);
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(130deg, rgba(18, 20, 24, 0.36) 0%, rgba(18, 20, 24, 0.2) 32%, rgba(18, 20, 24, 0.56) 100%),
    url('/cta-image.png') center / cover no-repeat;
`;

const ChatOrbLogo = styled.img`
  width: 24px;
  height: auto;
  filter: brightness(0) invert(1);
  opacity: 0.96;
`;

const ChatGlassBox = styled.div`
  position: relative;
  z-index: 2;
  width: min(940px, calc(100% - 2rem));
  min-height: clamp(340px, 52vh, 520px);
  border-radius: 22px;
  padding: clamp(1rem, 2vw, 1.5rem);
  background: rgba(224, 231, 235, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.36);
  backdrop-filter: blur(16px) saturate(1.08);
  -webkit-backdrop-filter: blur(16px) saturate(1.08);
  box-shadow: 0 18px 44px rgba(8, 12, 16, 0.28);
  display: flex;
  flex-direction: column;
`;

const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 0.72rem;
  flex: 1;
  min-height: 0;
  max-height: 340px;
  overflow-y: auto;
  padding-right: 0.2rem;
`;

const ChatRow = styled.div`
  width: 100%;
`;

const ChatAssistantLane = styled.div`
  display: grid;
  grid-template-columns: 34px minmax(0, auto);
  align-items: center;
  gap: 0.42rem;
  width: 100%;
  max-width: 100%;
`;

const ChatUserLane = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 34px;
  align-items: center;
  gap: 0.42rem;
  width: 100%;
  max-width: 100%;
`;

const ChatMessageAvatar = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  font-size: 0.66rem;
  font-weight: 600;
  color: ${p => (p.$isUser ? '#f5fbff' : '#f5fbff')};
  background: ${p =>
    p.$isUser
      ? 'linear-gradient(145deg, rgba(152, 195, 236, 0.34), rgba(108, 165, 220, 0.28))'
      : 'rgba(229, 236, 240, 0.24)'};
  border: 1px solid ${p => (p.$isUser ? 'rgba(196, 225, 250, 0.6)' : 'rgba(255,255,255,0.52)')};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const UserAvatarIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: rgba(245, 252, 255, 0.96);
`;

const ChatBubble = styled.div`
  max-width: min(82%, 620px);
  border-radius: 18px;
  padding: 0.62rem 0.84rem;
  min-height: 34px;
  display: flex;
  align-items: center;
  font-size: 0.91rem;
  line-height: 1.33;
  color: ${p => (p.$isUser ? '#f4fbff' : '#f4fbff')};
  background: ${p =>
    p.$isUser
      ? 'linear-gradient(145deg, rgba(156, 199, 238, 0.36), rgba(112, 168, 221, 0.3))'
      : 'rgba(241, 246, 249, 0.22)'};
  border: 1px solid ${p => (p.$isUser ? 'rgba(205, 231, 253, 0.62)' : 'rgba(255, 255, 255, 0.48)')};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
`;

const ChatAssistantBubble = styled(ChatBubble)`
  justify-self: start;
`;

const ChatUserBubble = styled(ChatBubble)`
  justify-self: end;
`;

const messagePopInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-16px) translateY(8px) scale(0.9);
    filter: blur(1px);
  }
  60% {
    opacity: 1;
    transform: translateX(0) translateY(0) scale(1.02);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(0) scale(1);
    filter: blur(0);
  }
`;

const orbPopIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-8px) scale(0.84);
    filter: blur(1px);
  }
  70% {
    opacity: 1;
    transform: translateX(0) scale(1.04);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
    filter: blur(0);
  }
`;

const AnimatedAssistantBubble = styled(ChatAssistantBubble)`
  animation: ${messagePopInLeft} 420ms cubic-bezier(0.2, 0.75, 0.26, 1) both;
`;

const AnimatedAssistantAvatar = styled(ChatMessageAvatar)`
  animation: ${orbPopIn} 260ms cubic-bezier(0.2, 0.75, 0.26, 1) both;
`;

const ChatComposer = styled.form`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.55rem;
`;

const ChatInput = styled.input`
  flex: 1;
  min-width: 0;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.58);
  background: rgba(244, 248, 250, 0.42);
  color: #f6fbfe;
  padding: 0.78rem 1rem;
  font-size: 0.95rem;
  outline: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.42);

  &::placeholder {
    color: rgba(243, 249, 252, 0.78);
  }
`;

const ChatSendButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.56);
  display: grid;
  place-items: center;
  padding: 0;
  background: rgba(223, 233, 239, 0.26);
  backdrop-filter: blur(10px) saturate(1.08);
  -webkit-backdrop-filter: blur(10px) saturate(1.08);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  color: #f8fbfd;
  cursor: pointer;
`;

const ChatSendArrow = styled.svg`
  width: 14px;
  height: 14px;
  fill: #ffffff;
  transform: translateY(-0.5px);
`;

const StickyAccordionAnimatedItem = ({ section, isOpen, onToggle }) => {
  const innerRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (innerRef.current) {
      setHeight(innerRef.current.scrollHeight);
    }
  }, [section.content]);

  return (
    <StickyAccordionItem>
      <StickyAccordionHeader type="button" onClick={onToggle}>
        <span>{section.title}</span>
        <StickyAccordionIcon>{isOpen ? '⊗' : '⊕'}</StickyAccordionIcon>
      </StickyAccordionHeader>
      <StickyAccordionCollapse style={{ height: isOpen ? height : 0 }}>
        <StickyAccordionContent ref={innerRef}>
          <StoryText>{section.content}</StoryText>
        </StickyAccordionContent>
      </StickyAccordionCollapse>
    </StickyAccordionItem>
  );
};

function Funnel101() {
  const [criterionOpenIndex, setCriterionOpenIndex] = React.useState(0);
  const [bergOpenIndex, setBergOpenIndex] = React.useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const [contactModalTitle, setContactModalTitle] = React.useState('Get in Touch');
  const [contactForm, setContactForm] = React.useState({ name: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = React.useState(false);
  const [chatMessages, setChatMessages] = React.useState([
    { role: 'assistant', text: 'How can we help you?' },
  ]);
  const [chatInput, setChatInput] = React.useState('');
  const [chatStage, setChatStage] = React.useState('need');
  const [leadName, setLeadName] = React.useState('');
  const chatMessagesRef = React.useRef(null);
  const chatSectionRef = React.useRef(null);
  const [playIntroAvatarAnim, setPlayIntroAvatarAnim] = React.useState(false);
  const [playIntroMessageAnim, setPlayIntroMessageAnim] = React.useState(false);

  React.useEffect(() => {
    const section = chatSectionRef.current;
    if (!section || playIntroMessageAnim) return;
    let introTimer = null;
    let messageTimer = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          introTimer = setTimeout(() => {
            setPlayIntroAvatarAnim(true);
            messageTimer = setTimeout(() => {
              setPlayIntroMessageAnim(true);
            }, 180);
          }, 500);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (introTimer) clearTimeout(introTimer);
      if (messageTimer) clearTimeout(messageTimer);
    };
  }, [playIntroMessageAnim]);

  React.useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages]);

  React.useEffect(() => {
    document.body.style.overflow = isContactModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactModalOpen]);

  React.useEffect(() => {
    if (!isContactModalOpen) return;
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setIsContactModalOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isContactModalOpen]);

  const openContactModal = title => {
    setContactModalTitle(title || 'Get in Touch');
    setContactSubmitted(false);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleContactFieldChange = event => {
    const { name, value } = event.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = event => {
    event.preventDefault();
    setContactSubmitted(true);
  };

  const pushAssistant = text => {
    setChatMessages(prev => [...prev, { role: 'assistant', text }]);
  };

  const handleChatSubmit = event => {
    event.preventDefault();
    const value = chatInput.trim();
    if (!value) return;

    setChatMessages(prev => [...prev, { role: 'user', text: value }]);
    setChatInput('');

    if (chatStage === 'need') {
      pushAssistant('Great, we can help with that. What is your name?');
      setChatStage('name');
      return;
    }

    if (chatStage === 'name') {
      setLeadName(value);
      pushAssistant(`Nice to meet you, ${value}. What is your email?`);
      setChatStage('email');
      return;
    }

    if (chatStage === 'email') {
      const isValidEmail = /\S+@\S+\.\S+/.test(value);
      if (!isValidEmail) {
        pushAssistant('Please share a valid email so we can follow up.');
        return;
      }
      pushAssistant(
        `Perfect. Thanks ${leadName || 'there'} — we have your details and will follow up shortly.`
      );
      setChatStage('done');
      return;
    }

    pushAssistant('Got it. If you want, share more context and we can guide next steps.');
  };

  const renderStickyAccordion = (sections, openIndex, setOpenIndex, chipLabel) => (
    <StickyPanel>
      {sections.map((section, index) => {
        const isOpen = openIndex === index;
        return (
          <StickyAccordionAnimatedItem
            key={section.title}
            section={section}
            isOpen={isOpen}
            onToggle={() => setOpenIndex(isOpen ? null : index)}
          />
        );
      })}
      <SiteChip type="button" onClick={() => openContactModal(chipLabel)}>
        <span>{chipLabel}</span>
      </SiteChip>
    </StickyPanel>
  );

  return (
    <Page aria-label="Funnel 101 page">
      <TopNav>
        <Brand>
          <img src="/logo-navbar.png" alt="Hepta" />
        </Brand>
        <NavLinks aria-label="Primary heading">
          <span>WE ARE HEPTA</span>
        </NavLinks>
        <CTAButton type="button" onClick={() => openContactModal('Get in Touch')}>Get in Touch</CTAButton>
      </TopNav>

      <HeroFrame aria-label="Hero video section">
        <HeroVideo autoPlay muted loop playsInline preload="metadata" src={HERO_VIDEO_SRC} />
        <HeroOverlay>
          <HeroMainRow>
            <HeadlineColumn>
              <Headline>
                <span className="line">Built to win.</span>
                <span className="line">Online.</span>
              </Headline>
              <StartButton type="button" onClick={() => openContactModal('Get Started')}>
                Get Started <span aria-hidden="true">›</span>
              </StartButton>
            </HeadlineColumn>
            <BulletList>
              <li>Web Development</li>
              <li>Software</li>
              <li>Business Solutions</li>
              <li>Digital Identity</li>
            </BulletList>
          </HeroMainRow>
        </HeroOverlay>
      </HeroFrame>

      <SolutionsSection aria-label="NIS2 and cybersecurity web services">
        <SolutionsHeading>
          We build to the highest security standards, so you never have to worry.
        </SolutionsHeading>
        <SolutionsGrid>
          <SolutionCard>
            <CardVideoPlaceholder>
              <CardVideo autoPlay muted loop playsInline preload="metadata" src={SOLUTION_VIDEO_SRCS[0]} />
              <CardHoverShade />
              <CardHoverText type="button" onClick={() => openContactModal('Learn more')}>Learn more &#8250;</CardHoverText>
            </CardVideoPlaceholder>
            <CardTitle>NIS2-Ready Website Architecture</CardTitle>
            <CardBody>
              We design and build websites with secure foundations, documented controls, and
              operational structure aligned with NIS2 expectations.
            </CardBody>
            <CardLearnMoreButton type="button" onClick={() => openContactModal('Learn more')}>
              <span>Learn more</span>
            </CardLearnMoreButton>
          </SolutionCard>

          <SolutionCard>
            <CardVideoPlaceholder>
              <CardVideo autoPlay muted loop playsInline preload="metadata" src={SOLUTION_VIDEO_SRCS[1]} />
              <CardHoverShade />
              <CardHoverText type="button" onClick={() => openContactModal('Request a demo')}>Request a demo &#8250;</CardHoverText>
            </CardVideoPlaceholder>
            <CardTitle>Security-First Dev &amp; Hardening</CardTitle>
            <CardBody>
              From secure code and dependency hygiene to headers, segmentation, and access
              controls, we reduce attack surface before a single user lands on the page.
            </CardBody>
            <CardLearnMoreButton type="button" onClick={() => openContactModal('Request a demo')}>
              <span>Request a demo</span>
            </CardLearnMoreButton>
          </SolutionCard>

          <SolutionCard>
            <CardVideoPlaceholder>
              <CardVideo autoPlay muted loop playsInline preload="metadata" src={SOLUTION_VIDEO_SRCS[2]} />
              <CardHoverShade />
              <CardHoverText type="button" onClick={() => openContactModal('Get in Touch')}>Get in Touch &#8250;</CardHoverText>
            </CardVideoPlaceholder>
            <CardTitle>Governance, Policy, and Documentation</CardTitle>
            <CardBody>
              We help organizations formalize security processes, incident response pathways,
              and policy documentation required for regulated environments.
            </CardBody>
            <CardLearnMoreButton type="button" onClick={() => openContactModal('Get in Touch')}>
              <span>Get in Touch</span>
            </CardLearnMoreButton>
          </SolutionCard>

          <SolutionCard>
            <CardVideoPlaceholder>
              <CardVideo autoPlay muted loop playsInline preload="metadata" src={SOLUTION_VIDEO_SRCS[3]} />
              <CardHoverShade />
              <CardHoverText type="button" onClick={() => openContactModal('See how it works')}>See how it works &#8250;</CardHoverText>
            </CardVideoPlaceholder>
            <CardTitle>Monitoring, Response, and Continuity</CardTitle>
            <CardBody>
              We implement monitoring, alerting, backup, and continuity layers so your
              platform stays resilient and recoverable under real operational pressure.
            </CardBody>
            <CardLearnMoreButton type="button" onClick={() => openContactModal('See how it works')}>
              <span>See how it works</span>
            </CardLearnMoreButton>
          </SolutionCard>
        </SolutionsGrid>
      </SolutionsSection>

      <HighlightSection aria-label="Highlighted client work section">
        <HighlightInner>
          <HighlightEyebrow>Highlighted Clients</HighlightEyebrow>
          <HighlightTitle>A look at what we have built for Criterion</HighlightTitle>

          <HighlightLayout>
            <LeftMediaColumn>
              <HighlightMainMedia>
                <HighlightMainVideo
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  src={CRITERION_MAIN_VIDEO_SRC}
                  style={{ objectPosition: '50% 4%' }}
                />
              </HighlightMainMedia>

              <HighlightBottomGrid>
                <BottomMedia $image={CRITERION_VERTICAL_IMAGE_SRCS[0]} />
                <BottomMedia $image={CRITERION_VERTICAL_IMAGE_SRCS[1]} />
                <BottomMediaWide $image={CRITERION_WIDE_IMAGE_SRC} />
              </HighlightBottomGrid>
            </LeftMediaColumn>

            {renderStickyAccordion(
              CRITERION_SECTIONS,
              criterionOpenIndex,
              setCriterionOpenIndex,
              'Request a website'
            )}
          </HighlightLayout>
        </HighlightInner>
      </HighlightSection>

      <HighlightSection aria-label="Highlighted client work section 2">
        <HighlightInner>
          <HighlightEyebrow>Highlighted Clients</HighlightEyebrow>
          <HighlightTitle>A look at what we have built for BE:RG</HighlightTitle>

          <HighlightLayout>
            <LeftMediaColumn>
              <HighlightMainMedia>
                <HighlightMainVideo
                  $noTint
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  src={BERG_MAIN_VIDEO_SRC}
                />
              </HighlightMainMedia>

              <HighlightBottomGrid>
                <BottomMedia $image={BERG_VERTICAL_IMAGE_SRCS[0]} />
                <BottomMedia $image={BERG_VERTICAL_IMAGE_SRCS[1]} />
                <BottomMediaWide $image={BERG_WIDE_IMAGE_SRC} $position="center bottom" $size="130% auto" />
              </HighlightBottomGrid>
            </LeftMediaColumn>

            {renderStickyAccordion(BERG_SECTIONS, bergOpenIndex, setBergOpenIndex, 'Request a website')}
          </HighlightLayout>
        </HighlightInner>
      </HighlightSection>

      <ShowcaseSection aria-label="Service showcase section">
        <ShowcaseGrid>
          <ShowcaseCard>
            <ShowcaseImagePlaceholder aria-label="Image placeholder" $image={SHOWCASE_IMAGE_SRCS[0]} />
            <ShowcaseCardTitle>Visual Identity</ShowcaseCardTitle>
            <ShowcaseCardBody>
              From interactive components and payment flows to maps, notifications, and forms,
              we craft interfaces that are both functional and visually refined across every
              touchpoint.
            </ShowcaseCardBody>
            <ShowcaseCardButton type="button" onClick={() => openContactModal('Get in Touch')}>
              <span>Get in Touch</span>
            </ShowcaseCardButton>
          </ShowcaseCard>

          <ShowcaseCard>
            <ShowcaseImagePlaceholder aria-label="Image placeholder" $image={SHOWCASE_IMAGE_SRCS[1]} />
            <ShowcaseCardTitle>Tech Stack</ShowcaseCardTitle>
            <ShowcaseCardBody>
              Every tool we use is chosen for performance, security, and scalability. From
              frontend to infrastructure, our stack is production grade and built to hold up
              under heavy operational demand.
            </ShowcaseCardBody>
            <ShowcaseCardButton type="button" onClick={() => openContactModal('Learn more about our tech stack')}>
              <span>Learn more about our tech stack</span>
            </ShowcaseCardButton>
          </ShowcaseCard>
        </ShowcaseGrid>
      </ShowcaseSection>

      <FinalCtaSection aria-label="Final contact call to action">
        <FinalCtaCard $image={FINAL_CTA_BG_SRC}>
          <FinalCtaOverlay>
            <FinalCtaTitle>
              <span className="line">Want to work with us?</span>
              <span className="line">We&apos;d love to hear from you!</span>
            </FinalCtaTitle>
            <FinalCtaButtons>
              <FinalPrimaryButton type="button" onClick={() => openContactModal('Get in Touch')}>
                <span>Get in Touch</span>
              </FinalPrimaryButton>
              <FinalSecondaryButton type="button" onClick={() => openContactModal('Learn more')}>
                <span>Learn more</span>
              </FinalSecondaryButton>
            </FinalCtaButtons>
          </FinalCtaOverlay>
        </FinalCtaCard>
      </FinalCtaSection>

      <ChatFooterSection aria-label="Chat contact footer" ref={chatSectionRef}>
        <ChatBackground>
          <ChatGlassBox>
            <ChatMessages ref={chatMessagesRef}>
              {chatMessages.map((message, index) => {
                const isIntroAssistantMessage = message.role === 'assistant' && index === 0;
                if (isIntroAssistantMessage && !playIntroAvatarAnim) return null;

                return (
                  <ChatRow key={`${message.role}-${index}`} $isUser={message.role === 'user'}>
                    {message.role === 'user' ? (
                      <ChatUserLane>
                        <ChatUserBubble $isUser>{message.text}</ChatUserBubble>
                        <ChatMessageAvatar $isUser>
                          <UserAvatarIcon viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-3.9 0-7 2.3-7 5.2 0 .4.3.8.8.8h12.4c.5 0 .8-.4.8-.8C19 16.3 15.9 14 12 14Z" />
                          </UserAvatarIcon>
                        </ChatMessageAvatar>
                      </ChatUserLane>
                    ) : (
                      <ChatAssistantLane>
                        {isIntroAssistantMessage ? (
                          <AnimatedAssistantAvatar>
                            <ChatOrbLogo src="/logo-navbar.png" alt="Hepta" />
                          </AnimatedAssistantAvatar>
                        ) : (
                          <ChatMessageAvatar>
                            <ChatOrbLogo src="/logo-navbar.png" alt="Hepta" />
                          </ChatMessageAvatar>
                        )}
                        {isIntroAssistantMessage ? (
                          playIntroMessageAnim ? (
                            <AnimatedAssistantBubble>{message.text}</AnimatedAssistantBubble>
                          ) : null
                        ) : (
                          <ChatAssistantBubble>{message.text}</ChatAssistantBubble>
                        )}
                      </ChatAssistantLane>
                    )}
                  </ChatRow>
                );
              })}
            </ChatMessages>

            <ChatComposer onSubmit={handleChatSubmit}>
              <ChatInput
                type="text"
                placeholder={
                  chatStage === 'email'
                    ? 'Email'
                    : chatStage === 'name'
                      ? 'Name'
                      : 'Message'
                }
                value={chatInput}
                onChange={event => setChatInput(event.target.value)}
                aria-label="Message input"
              />
              <ChatSendButton type="submit" aria-label="Send message">
                <ChatSendArrow viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.7 4.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 1 0 1.4 1.4L11 7.4V19a1 1 0 1 0 2 0V7.4l3.3 3.3a1 1 0 0 0 1.4-1.4l-5-5Z" />
                </ChatSendArrow>
              </ChatSendButton>
            </ChatComposer>
          </ChatGlassBox>
        </ChatBackground>
      </ChatFooterSection>

      <SmallSiteFooter surface="white" topRule />

      {isContactModalOpen ? (
        <ContactModalOverlay onClick={closeContactModal}>
          <ContactModalCard onClick={event => event.stopPropagation()}>
            <ContactModalLeft>
              {contactSubmitted ? (
                <ContactModalSuccess>
                  <ContactModalSuccessTitle>Thank you.</ContactModalSuccessTitle>
                  <ContactModalSuccessText>
                    We&apos;ve received your message and we&apos;ll get back to you shortly.
                  </ContactModalSuccessText>
                </ContactModalSuccess>
              ) : (
                <>
                  <ContactModalHeader>
                    <ContactModalLogo src="/logo.png" alt="Hepta" />
                    <ContactModalTitle>{contactModalTitle}</ContactModalTitle>
                  </ContactModalHeader>
                  <ContactModalForm onSubmit={handleContactSubmit}>
                    <ContactModalInput
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={contactForm.name}
                      onChange={handleContactFieldChange}
                    />
                    <ContactModalInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={contactForm.email}
                      onChange={handleContactFieldChange}
                    />
                    <ContactModalTextarea
                      name="message"
                      placeholder="Message"
                      value={contactForm.message}
                      onChange={handleContactFieldChange}
                    />
                    <ContactModalActions>
                      <ContactModalSend type="submit">Send</ContactModalSend>
                    </ContactModalActions>
                  </ContactModalForm>
                </>
              )}
            </ContactModalLeft>

            <ContactModalRight>
              <ContactModalImage>
              </ContactModalImage>
            </ContactModalRight>
          </ContactModalCard>
        </ContactModalOverlay>
      ) : null}
    </Page>
  );
}

export default Funnel101;
