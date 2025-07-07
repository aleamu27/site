import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 320px;
  padding: 7rem 0 5rem 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: #fff;
  color: #222;
  font-size: 1.08rem;
  font-weight: 500;
  border-top: 1px solid #eee;
  @media (max-width: 600px) {
    padding: 3rem 0 2rem 12px;
    font-size: 0.98rem;
  }
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  @media (max-width: 600px) {
    gap: 1.1rem;
    font-size: 0.98rem;
  }
`;

const FooterLink = styled.a`
  color: #222;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    color: #184B54;
  }
`;

const XIcon = styled.svg`
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
`;

const slideUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;
const slideDown = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
`;
const slideBackDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
`;
const slideBackUp = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

const EmailCopyWrapper = styled.span`
  display: inline-block;
  min-width: 120px;
  height: 1.2em;
`;
const EmailText = styled.span``;
const EmailCopied = styled.span`
  color: #184B54;
  font-weight: 600;
`;

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e) => {
    e.preventDefault();
    if (copied) return;
    navigator.clipboard.writeText('hi@hepta.no');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <FooterWrapper>
      <FooterInner>
        <span>Oslo</span>
        <FooterLink href="#" onClick={handleCopy} tabIndex={0} aria-label="Copy email to clipboard">
          <EmailCopyWrapper>
            {copied ? (
              <EmailCopied>Email copied!</EmailCopied>
            ) : (
              <EmailText>hi@hepta.no</EmailText>
            )}
          </EmailCopyWrapper>
        </FooterLink>
        <FooterLink href="https://x.com/HeptaCreative" target="_blank" rel="noopener noreferrer" aria-label="HeptaCreative on X">
          <XIcon viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.53 3.00049H21.001L14.431 10.29L22.111 21.0005H15.609L10.797 14.6025L5.391 21.0005H1.929L8.929 13.21L1.609 3.00049H8.25L12.609 8.80149L17.53 3.00049ZM16.34 19.0005H18.13L7.75 4.00049H5.859L16.34 19.0005Z" />
          </XIcon>
        </FooterLink>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer; 