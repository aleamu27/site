import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 90vw;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    gap: 0.75rem;
  }
`;

const BannerText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #333;
  margin: 0;
  line-height: 1.4;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
`;

const Button = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  ${props => props.$primary ? `
    background: #184B54;
    color: #fff;
    &:hover {
      background: #0d3a42;
    }
  ` : `
    background: #f0f0f0;
    color: #333;
    &:hover {
      background: #e0e0e0;
    }
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #999;
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;

  &:hover {
    color: #333;
  }

  @media (min-width: 601px) {
    display: none;
  }
`;

const GeoRedirectBanner = () => {
  const [show, setShow] = useState(false);
  const [suggestion, setSuggestion] = useState(null);

  useEffect(() => {
    // Check if user already dismissed or chose
    const dismissed = localStorage.getItem('geo_redirect_dismissed');
    if (dismissed) return;

    const hostname = window.location.hostname;
    const isHeptatech = hostname.includes('heptatech.io');
    const isHepta = hostname.includes('hepta.no');

    // Only run on production domains
    if (!isHeptatech && !isHepta) return;

    // Fetch user's country from Vercel geo headers via API
    fetch('/api/geo')
      .then(res => res.json())
      .then(data => {
        const country = data.country;

        if (isHeptatech && country === 'NO') {
          // User is from Norway but on English site
          setSuggestion({
            message: 'Det ser ut som du er fra Norge. Vil du besøke den norske siden?',
            buttonText: 'Gå til hepta.no',
            url: 'https://hepta.no' + window.location.pathname,
            stayText: 'Bli her'
          });
          setShow(true);
        } else if (isHepta && country !== 'NO') {
          // User is not from Norway but on Norwegian site
          setSuggestion({
            message: 'It looks like you\'re not from Norway. Would you like to visit the English site?',
            buttonText: 'Go to heptatech.io',
            url: 'https://heptatech.io' + window.location.pathname,
            stayText: 'Stay here'
          });
          setShow(true);
        }
      })
      .catch(() => {
        // Silently fail - geo detection is not critical
      });
  }, []);

  const handleRedirect = () => {
    localStorage.setItem('geo_redirect_dismissed', 'redirected');
    window.location.href = suggestion.url;
  };

  const handleDismiss = () => {
    localStorage.setItem('geo_redirect_dismissed', 'true');
    setShow(false);
  };

  if (!show || !suggestion) return null;

  return (
    <Banner>
      <CloseButton onClick={handleDismiss} aria-label="Close">×</CloseButton>
      <BannerText>{suggestion.message}</BannerText>
      <ButtonGroup>
        <Button $primary onClick={handleRedirect}>
          {suggestion.buttonText}
        </Button>
        <Button onClick={handleDismiss}>
          {suggestion.stayText}
        </Button>
      </ButtonGroup>
    </Banner>
  );
};

export default GeoRedirectBanner;
