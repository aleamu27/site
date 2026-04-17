import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import SmallSiteFooter from './SmallSiteFooter';
import { getDomainConfig } from '../utils/domainConfig';

const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 80vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url('https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/FOOTERP/Alternativer%20til%20nettside%20(1).png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  margin-bottom: 3rem;
`;

const Headline = styled.h2`
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.08em;
  line-height: 1.3;
  max-width: 1100px;
  margin: 0;
  flex: 1;
`;

const EmailButton = styled.a`
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: #666;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.6rem 1.2rem;
  border-radius: 2px;
  text-decoration: none;
  margin-top: auto;
  align-self: flex-start;
  border: none;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #fff;
    color: #1a1a1a;
  }
`;

const FooterPrivacyLink = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  margin-top: 1rem;
  align-self: flex-start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: #fff;
    border-bottom-color: rgba(255, 255, 255, 0.6);
  }
`;

const Footer = () => {
  const { pathname } = useLocation();
  const { email } = getDomainConfig();

  if (pathname === '/contact' || pathname === '/visual-identity') {
    return <SmallSiteFooter surface="white" topRule />;
  }

  return (
    <FooterWrapper>
      <FooterContent>
        <Logo>
          <img
            src="/logo.png"
            alt="Hepta"
            style={{
              width: '24px',
              height: '24px',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)',
            }}
          />
          HEPTA
        </Logo>
        <Divider />
        <Headline>
          The Infrastructure Beneath<br />
          Digital Trust
        </Headline>
        <EmailButton href={`mailto:${email}`}>{email}</EmailButton>
        <FooterPrivacyLink to="/privacy">Privacy</FooterPrivacyLink>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
