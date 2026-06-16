import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import Lenis from 'lenis';
import { colors, heroGradient, sectionGradient, fonts } from './theme';
import { images } from './assets';
import PilotClinicModal from './PilotClinicModal';

const DentoGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${colors.bg};
    color: ${colors.text};
    font-family: ${fonts.body};
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
  }

  html.lenis,
  html.lenis body {
    height: auto;
  }

  .lenis.lenis-smooth {
    scroll-behavior: auto !important;
  }

  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }

  .lenis.lenis-stopped {
    overflow: hidden;
  }

  @media (prefers-reduced-motion: no-preference) {
    [data-reveal] {
      opacity: 0;
      transform: translateY(30px);
      transition:
        opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      transition-delay: var(--reveal-delay, 0s);
      will-change: opacity, transform;
    }

    [data-reveal].is-visible {
      opacity: 1;
      transform: none;
    }
  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const reveal = css`
  animation: ${fadeUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Page = styled.div`
  min-height: 100vh;
  background: ${colors.bg};
  color: ${colors.text};
  font-family: ${fonts.body};
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;

  @media (max-width: 809px) {
    width: min(1120px, calc(100% - 32px));
  }
`;

const Eyebrow = styled.p`
  margin: 0 0 16px;
  font-family: ${fonts.mono};
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: lowercase;
  color: ${colors.textMuted};
  text-align: ${p => (p.$center ? 'center' : 'left')};
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.08;
  letter-spacing: -0.03em;
  font-weight: 600;
  color: ${colors.text};
  text-align: ${p => (p.$center ? 'center' : 'left')};
`;

/* ─── Navbar ─── */
const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  padding-top: ${p => (p.$scrolled ? '12px' : '0')};
  transition: padding-top 0.34s cubic-bezier(0.2, 0.72, 0.2, 1);
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin: 0 auto;
  width: ${p =>
    p.$scrolled ? 'min(880px, calc(100% - 24px))' : 'min(1120px, calc(100% - 48px))'};
  padding: ${p => (p.$scrolled ? '11px 12px 11px 22px' : '18px 0')};
  border-radius: ${p => (p.$scrolled ? '999px' : '0')};
  background: ${p => (p.$scrolled ? 'rgba(255, 255, 255, 0.72)' : 'transparent')};
  backdrop-filter: ${p => (p.$scrolled ? 'blur(16px)' : 'none')};
  box-shadow: ${p =>
    p.$scrolled ? '0 10px 34px rgba(26, 22, 21, 0.12)' : 'none'};
  transition: all 0.34s cubic-bezier(0.2, 0.72, 0.2, 1);
`;

const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

const LogoMark = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: block;
  flex-shrink: 0;
`;

const BrandName = styled.span`
  font-family: ${fonts.body};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${colors.text};
  line-height: 1;
`;

const FooterBrandMark = styled(Logo)`
  margin-bottom: 16px;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 809px) {
    display: none;
  }

  a {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.text};
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: ${colors.textMuted}; }
  }
`;

const NavCtaWrap = styled.div`
  display: inline-flex;

  a {
    padding: 10px 18px;
    font-size: 14px;
    white-space: nowrap;
  }

  @media (max-width: 809px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  position: relative;
  z-index: 102;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: ${p => (p.$open ? 'rgba(255, 255, 255, 0.9)' : 'transparent')};
  padding: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: background 0.25s ease;
  box-shadow: ${p => (p.$open ? '0 8px 24px rgba(26, 22, 21, 0.1)' : 'none')};

  @media (max-width: 809px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  span {
    display: block;
    width: 20px;
    height: 2px;
    background: ${colors.text};
    border-radius: 2px;
    transition: transform 0.32s cubic-bezier(0.2, 0.72, 0.2, 1), opacity 0.2s ease;
  }

  ${p =>
    p.$open &&
    css`
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }
      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    `}
`;

const MobileBackdrop = styled.div`
  display: none;

  @media (max-width: 809px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 99;
    background: rgba(26, 22, 21, 0.28);
    backdrop-filter: blur(8px);
    opacity: ${p => (p.$open ? 1 : 0)};
    visibility: ${p => (p.$open ? 'visible' : 'hidden')};
    pointer-events: ${p => (p.$open ? 'auto' : 'none')};
    transition: opacity 0.35s ease, visibility 0.35s ease;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 809px) {
    display: block;
    position: fixed;
    top: 76px;
    left: 16px;
    right: 16px;
    z-index: 101;
    opacity: ${p => (p.$open ? 1 : 0)};
    visibility: ${p => (p.$open ? 'visible' : 'hidden')};
    transform: translateY(${p => (p.$open ? '0' : '-12px')}) scale(${p => (p.$open ? 1 : 0.98)});
    pointer-events: ${p => (p.$open ? 'auto' : 'none')};
    transition:
      opacity 0.38s cubic-bezier(0.2, 0.72, 0.2, 1),
      transform 0.38s cubic-bezier(0.2, 0.72, 0.2, 1),
      visibility 0.38s ease;
  }
`;

const MobileMenuCard = styled.div`
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 22px;
  padding: 10px;
  box-shadow: 0 20px 50px rgba(26, 22, 21, 0.16);
`;

const MobileMenuLink = styled.a`
  display: block;
  padding: 14px 16px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.text};
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover,
  &:active {
    background: rgba(26, 22, 21, 0.05);
    color: ${colors.text};
  }
`;

const MobileMenuDivider = styled.div`
  height: 1px;
  margin: 6px 12px;
  background: rgba(228, 226, 226, 0.9);
`;

/* ─── Buttons ─── */
const BtnRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: ${p => p.$center ? 'center' : 'flex-start'};
  margin-top: 32px;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 999px;
  background: ${colors.text};
  color: ${colors.white};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 28px rgba(26, 22, 21, 0.18);
  }
`;

const MobileMenuCta = styled(PrimaryBtn)`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 6px;
  padding: 15px 20px;
  font-size: 15px;
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(228, 226, 226, 0.9);
  color: ${colors.text};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  backdrop-filter: blur(8px);
  transition: background 0.2s;

  &:hover {
    background: ${colors.white};
  }
`;

/* Rolling-text button: signature Dreelio hover where the label rolls
   up and a second copy rolls in from below. */
const Roller = styled.span`
  position: relative;
  display: block;
  overflow: hidden;
  line-height: 1.2;

  span {
    display: block;
    transition: transform 0.42s cubic-bezier(0.2, 0.72, 0.2, 1);
  }

  span:last-child {
    position: absolute;
    inset: 0;
    transform: translateY(110%);
  }
`;

const rollerCss = css`
  &:hover ${Roller} span:first-child {
    transform: translateY(-110%);
  }
  &:hover ${Roller} span:last-child {
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    ${Roller} span {
      transition: none;
    }
  }
`;

const RollPrimary = styled(PrimaryBtn)`
  ${rollerCss}
`;

const RollSecondary = styled(SecondaryBtn)`
  ${rollerCss}
`;

function RollingButton({ as, children, variant = 'primary', ...rest }) {
  const Comp = variant === 'secondary' ? RollSecondary : RollPrimary;
  return (
    <Comp as={as} {...rest}>
      <Roller>
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </Roller>
    </Comp>
  );
}

/* ─── Hero ─── */
const HeroSection = styled.section`
  position: relative;
  padding: 168px 0 0;
  background: ${heroGradient};
  overflow: hidden;

  @media (max-width: 809px) {
    padding: 132px 0 0;
  }
`;

const cloudInLeft = keyframes`
  from {
    transform: translateX(-74%);
    opacity: 0;
  }
  to {
    transform: translateX(-50%);
    opacity: 1;
  }
`;

const cloudInRight = keyframes`
  from {
    transform: translateX(74%) scaleX(-1);
    opacity: 0;
  }
  to {
    transform: translateX(50%) scaleX(-1);
    opacity: 1;
  }
`;

const HeroCloudLeft = styled.img`
  position: absolute;
  left: 0;
  top: 24%;
  width: min(520px, 44vw);
  mix-blend-mode: screen;
  pointer-events: none;
  transform: translateX(-50%);
  will-change: translate, transform;
  animation: ${cloudInLeft} 1.1s cubic-bezier(0.2, 0.72, 0.2, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const HeroCloudRight = styled.img`
  position: absolute;
  right: 0;
  top: 16%;
  width: min(480px, 42vw);
  mix-blend-mode: screen;
  pointer-events: none;
  transform: translateX(50%) scaleX(-1);
  will-change: translate, transform;
  animation: ${cloudInRight} 1.1s cubic-bezier(0.2, 0.72, 0.2, 1) 0.08s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 1;
  text-align: center;
  padding-bottom: 0;
`;

const HeroTitle = styled.h1`
  margin: 0;
  max-width: 820px;
  margin-inline: auto;
  font-size: clamp(40px, 6.5vw, 72px);
  line-height: 1.04;
  letter-spacing: -0.04em;
  font-weight: 600;
  color: ${colors.text};
  ${reveal}
`;

const HeroSub = styled.p`
  margin: 24px auto 0;
  max-width: 620px;
  font-size: 18px;
  line-height: 1.65;
  color: ${colors.textMuted};
  ${reveal}
  animation-delay: 0.08s;
`;

const HeroImageStage = styled.div`
  perspective: 2000px;
  perspective-origin: 50% 50%;
  width: min(1040px, 92vw);
  margin: 28px auto 0;
  height: clamp(320px, 42vw, 440px);
  overflow: hidden;
  ${reveal}
  animation-delay: 0.16s;
`;

const HeroImageWrap = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transform-origin: 50% 100%;
  transform: rotateX(10deg);
  will-change: transform;

  img,
  > div {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }
`;

/* ─── Devices (scroll-zoom + toggle slider) ─── */
const DevicesSection = styled.section`
  padding: 180px 0 110px;
  background: ${colors.bgAlt};
  overflow: hidden;

  @media (max-width: 809px) {
    padding: 120px 0 80px;
  }
`;

const DeviceHead = styled(Container)`
  text-align: center;
  margin-bottom: 48px;
`;

const DeviceStage = styled.div`
  position: relative;
  width: min(1040px, 92vw);
  margin: 0 auto;
`;

const DeviceFrame = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 1024 / 720;
  background: ${colors.bgAlt};
  box-shadow: 0 30px 80px rgba(26, 22, 21, 0.12);
`;

const DeviceTrack = styled.div`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${p => (p.$index === 1 ? '-50%' : '0%')});
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.1, 1);
`;

const DeviceSlide = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(var(--zoom, 1));
    transform-origin: 50% 50%;
    will-change: transform;
  }
`;

const DevicePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: ${fonts.mono};
  font-size: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${colors.textMuted};
  background:
    repeating-linear-gradient(
      45deg,
      rgba(132, 185, 239, 0.08) 0,
      rgba(132, 185, 239, 0.08) 12px,
      rgba(132, 185, 239, 0.16) 12px,
      rgba(132, 185, 239, 0.16) 24px
    );
`;

const DeviceToggle = styled.div`
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  display: inline-flex;
  gap: 4px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px rgba(26, 22, 21, 0.16);
  z-index: 2;
`;

const ToggleBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  font-family: ${fonts.body};
  color: ${p => (p.$active ? colors.white : colors.text)};
  background: ${p => (p.$active ? colors.text : 'transparent')};
  transition: background 0.3s, color 0.3s;
  white-space: nowrap;

  &:hover {
    color: ${p => (p.$active ? colors.white : colors.textMuted)};
  }
`;

/* ─── Feature split (image + text) ─── */
const FeatureSection = styled.section`
  padding: 40px 0 110px;
  background: ${colors.bgAlt};

  @media (max-width: 809px) {
    padding: 24px 0 72px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: stretch;

  & + & {
    margin-top: 120px;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 40px;

    & + & {
      margin-top: 72px;
    }
  }
`;

const FeatureImageCard = styled.div`
  position: relative;
  background: ${sectionGradient};
  border-radius: 24px;
  padding: ${p => (p.$fit ? '20px' : '44px 44px 0')};
  overflow: hidden;
  min-height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${p =>
    p.$fit &&
    css`
      height: 640px;
      max-height: 640px;
      align-self: stretch;
    `}

  img {
    display: block;
    border-radius: 14px;
    box-shadow: 0 24px 60px rgba(26, 22, 21, 0.16);

    ${p =>
      p.$fit
        ? css`
            width: auto;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            object-position: center center;
          `
        : css`
            width: 100%;
            height: auto;
            border-radius: 14px 14px 0 0;
          `}
  }
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding: 12px 0;

  h2 {
    max-width: 16ch;
  }

  @media (max-width: 980px) {
    h2 {
      max-width: none;
    }
  }
`;

const FeatureEyebrow = styled.p`
  margin: 0 0 18px;
  font-family: ${fonts.mono};
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.textMuted};
`;

const FeatureLead = styled.p`
  margin: 22px 0 0;
  max-width: 460px;
  font-size: 17px;
  line-height: 1.6;
  color: ${colors.textMuted};

  strong {
    color: ${colors.text};
    font-weight: 600;
  }
`;

const PillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  max-width: 440px;
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
  border-radius: 999px;
  border: 1px solid ${colors.border};
  background: ${colors.white};
  font-size: 14px;
  font-weight: 500;
  color: ${colors.text};

  svg {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    color: ${colors.textMuted};
  }
`;

const pillIcons = {
  tasks: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  time: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
    </svg>
  ),
  sheets: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M9 4v16" />
    </svg>
  ),
  reports: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" /><rect x="7" y="11" width="3" height="6" /><rect x="13" y="7" width="3" height="10" />
    </svg>
  ),
  invoicing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" /><path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  ),
  budgets: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M14.5 9a2.5 2.5 0 0 0-2.5-1.5c-1.4 0-2.5.9-2.5 2s1.1 2 2.5 2 2.5.9 2.5 2-1.1 2-2.5 2A2.5 2.5 0 0 1 9.5 15M12 6v1.5M12 16.5V18" />
    </svg>
  ),
  forecasting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 7-7" /><path d="M17 7h4v4" />
    </svg>
  ),
  integrations: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 6a3 3 0 0 1 0 6M18 20a6 6 0 0 0-4-5.6" />
    </svg>
  ),
};

/* ─── Benefits (two big cards, bg fades to beige) ─── */
const BenefitsSection = styled.section`
  padding: 110px 0 120px;
  background: linear-gradient(180deg, ${colors.bgAlt} 0%, ${colors.bgAlt} 18%, #e3eaf1 55%, #c9ddf3 100%);

  @media (max-width: 809px) {
    padding: 72px 0 80px;
  }
`;

const BenefitsHead = styled(Container)`
  text-align: center;
  margin-bottom: 56px;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 809px) {
    grid-template-columns: 1fr;
  }
`;

const BigCard = styled.div`
  background: ${colors.warmAlt};
  border: 1px solid rgba(97, 74, 68, 0.08);
  border-radius: 28px;
  padding: 36px 36px 40px;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 440px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: ${colors.text};
`;

const CardVisual = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin: 28px 0;
`;

const CardBody = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: ${colors.textMuted};
  max-width: 400px;

  strong {
    color: ${colors.text};
    font-weight: 600;
  }
`;

const ShareList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${colors.white};
  border-radius: 16px;
  padding: 8px;
  box-shadow: 0 8px 22px rgba(26, 22, 21, 0.06);
`;

const ShareRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  background: ${p => (p.$off ? 'transparent' : colors.bgAlt)};
`;

const ShareControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const ShareInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

const ShareIcon = styled.span`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: ${colors.white};
  border: 1px solid ${colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${colors.textMuted};

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ShareText = styled.div`
  min-width: 0;

  strong {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.text};
  }

  span {
    display: block;
    margin-top: 2px;
    font-size: 12px;
    color: ${colors.textMuted};
  }
`;

const ShareToggle = styled.span`
  position: relative;
  width: 38px;
  height: 22px;
  border-radius: 999px;
  background: ${p => (p.$on ? colors.green : colors.border)};
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: ${p => (p.$on ? '19px' : '3px')};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.2s ease;
  }
`;

const ShareStatus = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: ${p => (p.$on ? colors.green : colors.textMuted)};
  white-space: nowrap;
`;

const IntRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
`;

const IntRow = styled.div`
  overflow: hidden;
  width: 100%;
`;

const IntTrack = styled.div`
  display: flex;
  width: max-content;
  will-change: transform;
`;

const IntTile = styled.span`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  margin-right: 12px;
  border-radius: 16px;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 22px rgba(26, 22, 21, 0.06);

  span {
    width: 50%;
    height: 50%;
    border-radius: 30%;
    background: ${p => p.$c};
  }
`;

const shareIcons = {
  journal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" /><path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  ),
  xray: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 16l4-5 4 5M12 11V7" />
    </svg>
  ),
  plan: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h10M4 18h14" />
    </svg>
  ),
  invoice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 9h10M7 13h6" />
    </svg>
  ),
};

const shareItems = [
  { label: 'Treatment journal', meta: 'Sent after visit', icon: shareIcons.journal, on: true },
  { label: 'X-ray images', meta: 'Shared with patient', icon: shareIcons.xray, on: true },
  { label: 'Treatment plan', meta: 'Clinic only', icon: shareIcons.plan, on: false },
  { label: 'Invoice', meta: 'Not shared', icon: shareIcons.invoice, on: false },
];

const intRowTop = ['#f06a6a', '#611f69', '#5865f2', '#00ac47', '#7b61ff', '#f5b400'];
const intRowBottom = ['#f5b400', '#f06a6a', '#611f69', '#5865f2', '#00ac47', '#7b61ff'];

/* ─── CTA + Footer (blue, clouds slide in on scroll) ─── */
const CtaSection = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #c9ddf3 0%, #c4d9f1 45%, #bdd6f0 100%);
`;

const CtaBody = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 140px 0 40px;

  @media (max-width: 809px) {
    padding: 110px 0 32px;
  }
`;

const CtaCloud = styled.img`
  position: absolute;
  ${p => p.$side}: 0;
  top: ${p => p.$top};
  width: ${p => p.$w};
  mix-blend-mode: screen;
  pointer-events: none;
  transform: ${p => (p.$side === 'right' ? 'scaleX(-1)' : 'none')};
  opacity: ${p => (p.$in ? 1 : 0)};
  translate: ${p => {
    if (p.$side === 'left') return p.$in ? '-42% 0' : '-100% 0';
    return p.$in ? '42% 0' : '100% 0';
  }};
  transition: translate 1.2s cubic-bezier(0.2, 0.72, 0.2, 1), opacity 0.9s ease;
  will-change: translate, opacity;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const CtaInner = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

const CtaTitle = styled.h2`
  margin: 0;
  font-size: clamp(34px, 5.5vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  font-weight: 600;
  color: ${colors.text};
`;

const CtaSub = styled.p`
  margin: 18px 0 0;
  font-size: 17px;
  color: ${colors.textSecondary};
`;

const FooterCard = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 24px;
  padding: 40px 44px 26px;
  backdrop-filter: blur(6px);

  @media (max-width: 809px) {
    padding: 32px 24px 22px;
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 809px) {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }
`;

const FooterBrand = styled.div`
  grid-column: 1;

  @media (max-width: 809px) {
    grid-column: 1 / -1;
  }
`;

const FooterTagline = styled.p`
  margin: 0;
  max-width: 250px;
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.textMuted};
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  a {
    font-size: 14px;
    color: ${colors.textSecondary};
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: ${colors.text}; }
  }
`;

const FooterColTitle = styled.p`
  margin: 0 0 4px;
  font-family: ${fonts.mono};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.textMuted};
`;

const FooterDivider = styled.div`
  height: 1px;
  background: rgba(26, 22, 21, 0.1);
  margin: 32px 0 20px;
`;

const FooterMeta = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
  color: ${colors.textMuted};

  strong {
    color: ${colors.text};
    font-weight: 600;
  }
`;

function useDentoFonts() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Fragment+Mono:ital@0;1&family=Inter:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
  }, []);
}

function useScrollReveal(checkRef) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let observer = null;
    let cancelled = false;

    const isInView = el => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const margin = vh * 0.08;
      return rect.top <= vh - margin && rect.bottom >= margin;
    };

    const reveal = el => {
      if (el.classList.contains('is-visible')) return;
      el.classList.add('is-visible');
      if (observer) observer.unobserve(el);
    };

    const checkAll = () => {
      if (cancelled) return;
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(el => {
        if (isInView(el)) reveal(el);
      });
    };

    if (checkRef) checkRef.current = checkAll;

    const setup = () => {
      if (cancelled) return;

      const els = Array.from(document.querySelectorAll('[data-reveal]'));
      if (!els.length) return;

      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) reveal(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
      );

      els.forEach(el => {
        if (el.classList.contains('is-visible')) return;
        if (isInView(el)) {
          reveal(el);
        } else {
          observer.observe(el);
        }
      });
    };

    const onLoad = () => {
      setup();
      checkAll();
    };

    const onScroll = () => checkAll();

    const raf1 = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setup();
        checkAll();
      });
    });

    window.addEventListener('load', onLoad);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', checkAll);

    return () => {
      cancelled = true;
      if (checkRef) checkRef.current = null;
      window.cancelAnimationFrame(raf1);
      window.removeEventListener('load', onLoad);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', checkAll);
      if (observer) observer.disconnect();
    };
  }, [checkRef]);
}

export default function DentoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pilotModalOpen, setPilotModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [deviceTab, setDeviceTab] = useState(0);
  const [ctaInView, setCtaInView] = useState(false);
  const revealCheckRef = useRef(null);
  const lenisRef = useRef(null);
  useDentoFonts();
  useScrollReveal(revealCheckRef);

  const ctaRef = useRef(null);

  const cloudLeftRef = useRef(null);
  const cloudRightRef = useRef(null);
  const heroImgRef = useRef(null);
  const deviceFrameRef = useRef(null);
  const benefitsRef = useRef(null);
  const intTopRef = useRef(null);
  const intBottomRef = useRef(null);

  useEffect(() => {
    if (menuOpen || pilotModalOpen) {
      lenisRef.current?.stop();
      if (!lenisRef.current) {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = prev;
        };
      }
      return undefined;
    }

    lenisRef.current?.start();
    return undefined;
  }, [menuOpen, pilotModalOpen]);

  useEffect(() => {
    const START_ANGLE = 10;
    const DISTANCE = 280;
    let frame = null;

    const apply = () => {
      frame = null;
      const y = window.scrollY;
      if (cloudLeftRef.current) {
        cloudLeftRef.current.style.translate = `0 ${y * 0.12}px`;
      }
      if (cloudRightRef.current) {
        cloudRightRef.current.style.translate = `0 ${y * 0.2}px`;
      }
      if (heroImgRef.current) {
        const p = Math.min(Math.max(y / DISTANCE, 0), 1);
        const angle = START_ANGLE * (1 - p);
        heroImgRef.current.style.transform = `rotateX(${angle}deg)`;
      }
      if (deviceFrameRef.current) {
        const rect = deviceFrameRef.current.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const p = Math.min(Math.max(1 - rect.top / vh, 0), 1);
        const zoom = 1 + (1 - p) * 0.24;
        deviceFrameRef.current.style.setProperty('--zoom', zoom.toFixed(4));
      }
      if (benefitsRef.current && intTopRef.current && intBottomRef.current) {
        const rect = benefitsRef.current.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const center = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (vh / 2 - center) / vh));
        const base = -228;
        const delta = progress * 150;
        intTopRef.current.style.transform = `translateX(${(base + delta).toFixed(1)}px)`;
        intBottomRef.current.style.transform = `translateX(${(base - delta).toFixed(1)}px)`;
      }
      setScrolled(y > 30);
      revealCheckRef.current?.();
    };

    const onScroll = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({
      lerp: 0.075,
      wheelMultiplier: 0.9,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId = null;
    const raf = time => {
      try {
        lenis.raf(time);
        revealCheckRef.current?.();
      } catch (err) {
        console.error('Lenis scroll error:', err);
      }
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCtaInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollTo = id => e => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const openPilotModal = e => {
    e.preventDefault();
    setMenuOpen(false);
    setPilotModalOpen(true);
  };

  const closePilotModal = useCallback(() => setPilotModalOpen(false), []);

  useEffect(() => {
    document.title = 'Dento — Your dental history, all in one place';
    return () => {
      document.title = 'Hepta — software, design, and Calar OS analytics';
    };
  }, []);

  return (
    <Page>
      <DentoGlobalStyle />
      <Nav $scrolled={scrolled}>
        <NavInner $scrolled={scrolled}>
          <Logo href="#hero">
            <LogoMark src={images.logo} alt="" />
            <BrandName>Dento</BrandName>
          </Logo>
          <NavLinks>
            <a href="#hvordan" onClick={scrollTo('hvordan')}>How it works</a>
            <a href="#pasient" onClick={scrollTo('pasient')}>For patients</a>
            <a href="#klinikk" onClick={scrollTo('klinikk')}>For clinics</a>
            <a href="#fordeler" onClick={scrollTo('fordeler')}>Benefits</a>
            <a href="#kontakt" onClick={scrollTo('kontakt')}>Contact</a>
          </NavLinks>
          <NavCtaWrap>
            <RollingButton href="#" onClick={openPilotModal}>Become a pilot clinic</RollingButton>
          </NavCtaWrap>
          <MenuButton
            $open={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </MenuButton>
        </NavInner>
        <MobileBackdrop $open={menuOpen} onClick={() => setMenuOpen(false)} aria-hidden />
        <MobileMenu $open={menuOpen} data-lenis-prevent>
          <MobileMenuCard>
            <MobileMenuLink href="#hvordan" onClick={scrollTo('hvordan')}>How it works</MobileMenuLink>
            <MobileMenuLink href="#pasient" onClick={scrollTo('pasient')}>For patients</MobileMenuLink>
            <MobileMenuLink href="#klinikk" onClick={scrollTo('klinikk')}>For clinics</MobileMenuLink>
            <MobileMenuLink href="#fordeler" onClick={scrollTo('fordeler')}>Benefits</MobileMenuLink>
            <MobileMenuLink href="#kontakt" onClick={scrollTo('kontakt')}>Contact</MobileMenuLink>
            <MobileMenuDivider />
            <MobileMenuCta href="#" onClick={openPilotModal}>
              Become a pilot clinic
            </MobileMenuCta>
          </MobileMenuCard>
        </MobileMenu>
      </Nav>

      <HeroSection id="hero">
        <HeroCloudLeft ref={cloudLeftRef} src={images.cloud} alt="" aria-hidden />
        <HeroCloudRight ref={cloudRightRef} src={images.cloud} alt="" aria-hidden />
        <HeroContent>
          <HeroTitle>Your dental history, all in one place</HeroTitle>
          <HeroSub>
            Dento is a network for the future of dental care. Clinics send journals, X-rays and
            documentation straight to the patient — secure, simple and paper-free.
          </HeroSub>
          <BtnRow $center>
            <RollingButton href="#" onClick={openPilotModal}>Become a pilot clinic</RollingButton>
            <RollingButton variant="secondary" href="#hvordan" onClick={scrollTo('hvordan')}>
              How it works
            </RollingButton>
          </BtnRow>
          <HeroImageStage>
            <HeroImageWrap ref={heroImgRef}>
              <img src={images.heroDashboard} alt="Dento dashboard" />
            </HeroImageWrap>
          </HeroImageStage>
        </HeroContent>
      </HeroSection>

      <DevicesSection id="hvordan">
        <DeviceHead data-reveal>
          <Eyebrow $center>Patient and clinic</Eyebrow>
          <SectionTitle $center>Available when it's needed,</SectionTitle>
          <SectionTitle $center>for life</SectionTitle>
        </DeviceHead>
        <DeviceStage data-reveal style={{ '--reveal-delay': '0.1s' }}>
          <DeviceFrame ref={deviceFrameRef}>
            <DeviceTrack $index={deviceTab}>
              <DeviceSlide>
                {images.mobileApp ? (
                  <img src={images.mobileApp} alt="Dreelio mobile app" />
                ) : (
                  <DevicePlaceholder>Mobile App image</DevicePlaceholder>
                )}
              </DeviceSlide>
              <DeviceSlide>
                {images.clinicDashboard ? (
                  <img src={images.clinicDashboard} alt="Dento clinic dashboard" />
                ) : (
                  <DevicePlaceholder>Web App image</DevicePlaceholder>
                )}
              </DeviceSlide>
            </DeviceTrack>
          </DeviceFrame>
          <DeviceToggle role="tablist" aria-label="Choose device view">
            <ToggleBtn
              role="tab"
              aria-selected={deviceTab === 0}
              $active={deviceTab === 0}
              onClick={() => setDeviceTab(0)}
            >
              Patient app
            </ToggleBtn>
            <ToggleBtn
              role="tab"
              aria-selected={deviceTab === 1}
              $active={deviceTab === 1}
              onClick={() => setDeviceTab(1)}
            >
              Clinic dashboard
            </ToggleBtn>
          </DeviceToggle>
        </DeviceStage>
      </DevicesSection>

      <FeatureSection id="pasient">
        <Container>
          <FeatureGrid>
            <FeatureImageCard $fit data-reveal>
              <img src={images.projectMgmt} alt="Dento patient app" />
            </FeatureImageCard>
            <FeatureText data-reveal style={{ '--reveal-delay': '0.12s' }}>
              <div>
                <FeatureEyebrow>For patients</FeatureEyebrow>
                <SectionTitle>Your whole dental history in one app</SectionTitle>
                <FeatureLead>
                  <strong>X-rays and treatment history, together.</strong> Your documentation is
                  there when you need it and follows you for life. No more digging for old records
                  or chasing previous clinics to get your own history.
                </FeatureLead>
                <BtnRow>
                  <RollingButton href="#" onClick={openPilotModal}>Become a pilot clinic</RollingButton>
                </BtnRow>
              </div>
              <PillGrid>
                <Pill>{pillIcons.reports}X-rays</Pill>
                <Pill>{pillIcons.tasks}Treatments</Pill>
                <Pill>{pillIcons.sheets}Documents</Pill>
                <Pill>{pillIcons.time}History</Pill>
              </PillGrid>
            </FeatureText>
          </FeatureGrid>

          <FeatureGrid id="klinikk">
            <FeatureText data-reveal>
              <div>
                <FeatureEyebrow>For clinics</FeatureEyebrow>
                <SectionTitle>Send documentation straight to the patient</SectionTitle>
                <FeatureLead>
                  <strong>No printouts or email attachments.</strong> The clinic sends journals,
                  X-rays and documentation directly to the patient's Dento account. The history
                  becomes available the moment it's sent.
                </FeatureLead>
                <BtnRow>
                  <RollingButton href="#" onClick={openPilotModal}>Become a pilot clinic</RollingButton>
                </BtnRow>
              </div>
              <PillGrid>
                <Pill>{pillIcons.sheets}Journals</Pill>
                <Pill>{pillIcons.reports}X-rays</Pill>
                <Pill>{pillIcons.invoicing}Documentation</Pill>
                <Pill>{pillIcons.forecasting}Paper-free</Pill>
              </PillGrid>
            </FeatureText>
            <FeatureImageCard $fit data-reveal style={{ '--reveal-delay': '0.12s' }}>
              <img src={images.financial} alt="Send documentation to patient — John Smith upload UI" />
            </FeatureImageCard>
          </FeatureGrid>
        </Container>
      </FeatureSection>

      <BenefitsSection id="fordeler" ref={benefitsRef}>
        <BenefitsHead data-reveal>
          <Eyebrow $center>benefits</Eyebrow>
          <SectionTitle $center>Built for clinics,</SectionTitle>
          <SectionTitle $center>made for patients</SectionTitle>
        </BenefitsHead>
        <Container>
          <BenefitsGrid>
            <BigCard data-reveal>
              <CardTitle>The clinic decides what the patient can access</CardTitle>
              <CardVisual>
                <ShareList>
                  {shareItems.map(item => (
                    <ShareRow key={item.label} $off={!item.on}>
                      <ShareInfo>
                        <ShareIcon>{item.icon}</ShareIcon>
                        <ShareText>
                          <strong>{item.label}</strong>
                          <span>{item.meta}</span>
                        </ShareText>
                      </ShareInfo>
                      <ShareControls>
                        <ShareStatus $on={item.on}>{item.on ? 'Visible' : 'Hidden'}</ShareStatus>
                        <ShareToggle $on={item.on} aria-hidden />
                      </ShareControls>
                    </ShareRow>
                  ))}
                </ShareList>
              </CardVisual>
              <CardBody>
                <strong>Full control over sharing.</strong> The clinic chooses which journals,
                X-rays and documents are sent to the patient's Dento account. Secure, safe and
                clear.
              </CardBody>
            </BigCard>

            <BigCard data-reveal style={{ '--reveal-delay': '0.12s' }}>
              <CardTitle>Works alongside the systems you already have</CardTitle>
              <CardVisual>
                <IntRows>
                  <IntRow>
                    <IntTrack ref={intTopRef}>
                      {[...intRowTop, ...intRowTop].map((c, i) => (
                        <IntTile key={`t-${c}-${i}`} $c={c}>
                          <span />
                        </IntTile>
                      ))}
                    </IntTrack>
                  </IntRow>
                  <IntRow>
                    <IntTrack ref={intBottomRef}>
                      {[...intRowBottom, ...intRowBottom].map((c, i) => (
                        <IntTile key={`b-${c}-${i}`} $c={c}>
                          <span />
                        </IntTile>
                      ))}
                    </IntTrack>
                  </IntRow>
                </IntRows>
              </CardVisual>
              <CardBody>
                <strong>Dento doesn't replace your journal system.</strong> Your clinic keeps using
                the systems it already has. Dento sits on top and makes sharing with the patient
                effortless.
              </CardBody>
            </BigCard>
          </BenefitsGrid>
        </Container>
      </BenefitsSection>

      <CtaSection id="kontakt" ref={ctaRef}>
        <CtaCloud src={images.cloud} alt="" aria-hidden $side="left" $top="14%" $w="min(380px, 32vw)" $in={ctaInView} />
        <CtaCloud src={images.cloud} alt="" aria-hidden $side="right" $top="18%" $w="min(380px, 32vw)" $in={ctaInView} />
        <CtaBody>
          <CtaInner data-reveal>
            <CtaTitle>Become one of the first pilot clinics</CtaTitle>
            <CtaSub>
              We're now opening Dento to five selected pilot clinics. Get in touch to learn more.
            </CtaSub>
            <BtnRow $center>
              <RollingButton href="#" onClick={openPilotModal}>Get in touch</RollingButton>
            </BtnRow>
          </CtaInner>

          <FooterCard data-reveal style={{ '--reveal-delay': '0.1s' }}>
            <FooterTop>
              <FooterBrand>
                <FooterBrandMark href="#hero">
                  <LogoMark src={images.logo} alt="" />
                  <BrandName>Dento</BrandName>
                </FooterBrandMark>
                <FooterTagline>
                  A network for the future of dental care. Your dental history, all in one place.
                </FooterTagline>
              </FooterBrand>
              <FooterCol>
                <FooterColTitle>Dento</FooterColTitle>
                <a href="#hero">Home</a>
                <a href="#hvordan" onClick={scrollTo('hvordan')}>How it works</a>
                <a href="#pasient" onClick={scrollTo('pasient')}>For patients</a>
                <a href="#klinikk" onClick={scrollTo('klinikk')}>For clinics</a>
              </FooterCol>
              <FooterCol>
                <FooterColTitle>Company</FooterColTitle>
                <a href="#kontakt" onClick={scrollTo('kontakt')}>Contact</a>
                <a href="#fordeler" onClick={scrollTo('fordeler')}>Benefits</a>
                <a href="#personvern">Privacy</a>
                <a href="#vilkar">Terms</a>
              </FooterCol>
            </FooterTop>
            <FooterDivider />
            <FooterMeta>
              <span>© 2026 Dento. All rights reserved.</span>
              <span>A network for the future of dental care</span>
            </FooterMeta>
          </FooterCard>
        </CtaBody>
      </CtaSection>
      <PilotClinicModal open={pilotModalOpen} onClose={closePilotModal} />
    </Page>
  );
}
