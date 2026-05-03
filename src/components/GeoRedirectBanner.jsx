import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  max-width: 480px;
  width: 90%;
  z-index: 9999;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1rem 0;
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  flex: 1;
  padding: 0.8rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
`;

const PrimaryButton = styled(Button)`
  background: #222;
  color: #fff;
  border: none;

  &:hover {
    background: #444;
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: #666;
  border: 1px solid #ddd;

  &:hover {
    border-color: #222;
    color: #222;
  }
`;

// Check if geo preference is still valid (not expired)
const getGeoPreference = () => {
  const stored = localStorage.getItem('geo_redirect_preference');
  if (!stored) return null;

  try {
    const { value, expiry } = JSON.parse(stored);
    if (Date.now() > expiry) {
      localStorage.removeItem('geo_redirect_preference');
      return null;
    }
    return value;
  } catch {
    return null;
  }
};

// Store preference with 1 month expiry
const setGeoPreference = (value) => {
  const expiry = Date.now() + (30 * 24 * 60 * 60 * 1000); // 30 days
  localStorage.setItem('geo_redirect_preference', JSON.stringify({ value, expiry }));
};

const GeoRedirectBanner = ({ onDismiss }) => {
  const [show, setShow] = useState(false);
  const [suggestion, setSuggestion] = useState(null);

  useEffect(() => {
    // Check if user already made a choice (and it hasn't expired)
    const preference = getGeoPreference();
    if (preference) {
      onDismiss?.();
      return;
    }

    const hostname = window.location.hostname;
    const isHeptatech = hostname.includes('heptatech.io');
    const isHepta = hostname.includes('hepta.no');

    // Only run on production domains
    if (!isHeptatech && !isHepta) {
      onDismiss?.();
      return;
    }

    // Fetch user's country from Vercel geo headers via API
    fetch('/api/geo')
      .then(res => res.json())
      .then(data => {
        const country = data.country;

        if (isHeptatech && country === 'NO') {
          // User is from Norway but on English site
          setSuggestion({
            title: 'Welcome!',
            message: 'It looks like you\'re visiting from Norway. Would you like to visit the Norwegian site?',
            primaryText: 'Go to hepta.no',
            secondaryText: 'Stay here',
            url: 'https://hepta.no' + window.location.pathname
          });
          setShow(true);
        } else if (isHepta && country !== 'NO') {
          // User is not from Norway but on Norwegian site
          setSuggestion({
            title: 'Welcome!',
            message: 'It looks like you\'re visiting from outside Norway. Would you like to visit our English site?',
            primaryText: 'Go to heptatech.io',
            secondaryText: 'Stay here',
            url: 'https://heptatech.io' + window.location.pathname
          });
          setShow(true);
        } else {
          // No redirect needed
          onDismiss?.();
        }
      })
      .catch(() => {
        // Geo detection failed, skip
        onDismiss?.();
      });
  }, [onDismiss]);

  const handleRedirect = () => {
    setGeoPreference('redirected');
    window.location.href = suggestion.url;
  };

  const handleStay = () => {
    setGeoPreference('stayed');
    setShow(false);
    onDismiss?.();
  };

  if (!show || !suggestion) return null;

  return (
    <>
      <Overlay />
      <Modal>
        <Title>{suggestion.title}</Title>
        <Text>{suggestion.message}</Text>
        <ButtonGroup>
          <SecondaryButton onClick={handleStay}>
            {suggestion.secondaryText}
          </SecondaryButton>
          <PrimaryButton onClick={handleRedirect}>
            {suggestion.primaryText}
          </PrimaryButton>
        </ButtonGroup>
      </Modal>
    </>
  );
};

export default GeoRedirectBanner;
