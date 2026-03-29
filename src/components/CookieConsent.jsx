import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const SettingsButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9997;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    border-color: #222;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #666;
  }

  &:hover svg {
    fill: #222;
  }
`;

const CookieConsent = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');

    if (consent === null) {
      setShowModal(true);
    } else {
      setHasConsented(true);
      if (consent === 'accepted') {
        loadAnalytics();
      }
    }
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
    setShowModal(false);
    setHasConsented(true);
    loadAnalytics();
    // Dispatch event for Hero animation
    window.dispatchEvent(new CustomEvent('cookieConsentClosed'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowModal(false);
    setHasConsented(true);
    // Dispatch event for Hero animation
    window.dispatchEvent(new CustomEvent('cookieConsentClosed'));
  };

  const openSettings = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <>
          <Overlay onClick={() => {}} />
          <Modal>
            <Title>We value your privacy</Title>
            <Text>
              We use cookies to analyze traffic and improve your experience.
              By clicking "Accept", you consent to our use of analytics cookies.
              Read more in our <Link to="/privacy">privacy policy</Link>.
            </Text>
            <ButtonGroup>
              <DeclineButton onClick={handleDecline}>
                Decline
              </DeclineButton>
              <AcceptButton onClick={handleAccept}>
                Accept
              </AcceptButton>
            </ButtonGroup>
          </Modal>
        </>
      )}

      {hasConsented && (
        <SettingsButton onClick={openSettings} aria-label="Cookie settings">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C11.2 2 10.5 2.5 10.2 3.2L9.8 4.1C9.6 4.6 9.1 5 8.5 5.1L7.5 5.3C6.7 5.5 6.1 6.1 6 6.9C5.9 7.7 6.3 8.5 7 8.9L7.8 9.4C8.3 9.7 8.5 10.3 8.5 10.9L8.4 11.9C8.3 12.7 8.7 13.5 9.4 13.9C10.1 14.3 10.9 14.3 11.6 13.8L12.4 13.3C12.8 13 13.4 13 13.8 13.3L14.6 13.8C15.3 14.3 16.1 14.3 16.8 13.9C17.5 13.5 17.9 12.7 17.8 11.9L17.7 10.9C17.6 10.3 17.9 9.7 18.4 9.4L19.2 8.9C19.9 8.5 20.3 7.7 20.2 6.9C20.1 6.1 19.5 5.5 18.7 5.3L17.7 5.1C17.1 5 16.6 4.6 16.4 4.1L16 3.2C15.7 2.5 15 2 14.2 2H12ZM12 8C13.7 8 15 9.3 15 11C15 12.7 13.7 14 12 14C10.3 14 9 12.7 9 11C9 9.3 10.3 8 12 8Z"/>
            <path d="M4.5 15C4.1 15 3.7 15.2 3.5 15.6L3.3 16C3.1 16.4 2.7 16.6 2.3 16.7L1.8 16.8C1.4 16.9 1 17.2 0.9 17.6C0.8 18 1 18.4 1.3 18.7L1.7 19C2 19.2 2.1 19.6 2.1 20L2 20.5C2 20.9 2.1 21.3 2.5 21.5C2.9 21.7 3.3 21.7 3.6 21.5L4.1 21.2C4.4 21 4.8 21 5.1 21.2L5.6 21.5C5.9 21.7 6.3 21.7 6.7 21.5C7.1 21.3 7.2 20.9 7.2 20.5L7.1 20C7 19.6 7.2 19.2 7.5 19L7.9 18.7C8.2 18.4 8.4 18 8.3 17.6C8.2 17.2 7.8 16.9 7.4 16.8L6.9 16.7C6.5 16.6 6.1 16.4 5.9 16L5.7 15.6C5.5 15.2 5.1 15 4.7 15H4.5ZM4.5 18C5.1 18 5.5 18.4 5.5 19C5.5 19.6 5.1 20 4.5 20C3.9 20 3.5 19.6 3.5 19C3.5 18.4 3.9 18 4.5 18Z"/>
          </svg>
        </SettingsButton>
      )}
    </>
  );
};

export default CookieConsent;
