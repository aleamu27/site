import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-top: 1px solid #eee;
  padding: 1.5rem 2rem;
  z-index: 9999;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 600px) {
    padding: 1.2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: #444;
  margin: 0;
  line-height: 1.5;
  flex: 1;

  a {
    color: #222;
    text-decoration: underline;

    &:hover {
      color: #184B54;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  @media (max-width: 768px) {
    flex: 1;
    padding: 0.8rem 1rem;
  }
`;

const AcceptButton = styled(Button)`
  background: #222;
  color: #fff;
  border: none;

  &:hover {
    background: #444;
  }
`;

const DeclineButton = styled(Button)`
  background: transparent;
  color: #666;
  border: 1px solid #ddd;

  &:hover {
    border-color: #222;
    color: #222;
  }
`;

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');

    if (consent === null) {
      // Bruker har ikke valgt enda - vis banner
      setShowBanner(true);
    } else if (consent === 'accepted') {
      // Bruker har godtatt - last analytics
      loadAnalytics();
    }
    // Hvis consent === 'declined', ikke gjør noe
  }, []);

  const loadAnalytics = () => {
    // Google Analytics
    if (!window.gtag) {
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-RGNSP5M80C';
      document.head.appendChild(gtagScript);

      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-RGNSP5M80C');
    }

    // Microsoft Clarity
    if (!window.clarity) {
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "w335zf32r0");
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    loadAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <Banner>
      <Container>
        <Text>
          Vi bruker cookies for å analysere trafikk og forbedre brukeropplevelsen.
          Les mer i vår <Link to="/privacy">personvernerklæring</Link>.
        </Text>
        <ButtonGroup>
          <DeclineButton onClick={handleDecline}>
            Avslå
          </DeclineButton>
          <AcceptButton onClick={handleAccept}>
            Godta
          </AcceptButton>
        </ButtonGroup>
      </Container>
    </Banner>
  );
};

export default CookieConsent;
