import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  width: 100%;
  background: #fff;
  color: #222;
  padding: 4rem 0 2rem 0;
  border-top: 1px solid #eee;
  @media (max-width: 768px) {
    padding: 3rem 0 1.5rem 0;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #222;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #b3b3b3;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  max-width: 300px;
`;

const FooterLink = styled(Link)`
  color: #b3b3b3;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #184B54;
  }
`;

const FooterExternalLink = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #184B54;
  }
`;

const EmailSection = styled.div`
  margin-bottom: 1rem;
`;

const EmailLabel = styled.div`
  font-size: 0.9rem;
  color: #b3b3b3;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const EmailAddress = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #184B54;
  }
`;

const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #eee;
  margin: 2rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.div`
  color: #b3b3b3;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #184B54;
  }
`;

const NewsletterSection = styled.div`
  margin-top: 1rem;
`;

const NewsletterHeading = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1rem 0;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  font-family: inherit;
  background: #fff;
  color: #222;
  
  &:focus {
    outline: none;
    border-color: #184B54;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const NewsletterButton = styled.button`
  background: #222;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background: #444;
  }
  
  &:disabled {
    background: #ccc;
    color: #999;
    cursor: not-allowed;
  }
`;

const NewsletterMessage = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  min-height: 1.2em;
`;

const SuccessMessage = styled(NewsletterMessage)`
  color: #184B54;
  font-weight: 600;
`;

const ErrorMessage = styled(NewsletterMessage)`
  color: #d32f2f;
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setMessage('');
    setMessageType('');

    console.log('📧 Newsletter signup attempt:', { email });

    try {
      const apiUrl = process.env.REACT_APP_API_URL || '/api/contact';
      console.log('🌐 Newsletter API URL:', apiUrl);
      
      const requestConfig = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          type: 'newsletter'
        }),
      };
      
      console.log('🚀 Making newsletter subscription request...');
      const response = await fetch(apiUrl, requestConfig);
      
      console.log('📡 Newsletter response received:', {
        status: response.status,
        ok: response.ok
      });

      let data;
      try {
        data = await response.json();
        console.log('📄 Newsletter response data:', data);
      } catch (parseError) {
        console.error('❌ Failed to parse newsletter response JSON:', parseError);
        throw new Error('Invalid response format from server');
      }

      if (!response.ok) {
        console.error('❌ Newsletter API request failed:', {
          status: response.status,
          error: data.error || 'Unknown error',
          fullResponse: data
        });
        throw new Error(data.error || 'Failed to subscribe to newsletter');
      }

      console.log('✅ Newsletter subscription successful:', data);
      setMessage('Thanks for subscribing to our newsletter!');
      setMessageType('success');
      setEmail('');
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);

    } catch (error) {
      console.error('💥 Unexpected newsletter signup error:', error);
      
      // Handle specific errors
      if (error.message.includes('duplicate') || error.message.includes('already subscribed')) {
        setMessage('You are already subscribed to our newsletter!');
        setMessageType('success');
      } else {
        setMessage('Something went wrong. Please try again later.');
        setMessageType('error');
      }
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          {/* Hepta Column */}
          <FooterColumn>
            <FooterHeading>Hepta</FooterHeading>
            <EmailSection>
              <EmailLabel>Email</EmailLabel>
              <EmailAddress href="mailto:j@hepta.no">j@hepta.no</EmailAddress>
            </EmailSection>
          </FooterColumn>

          {/* Newsletter Column */}
          <FooterColumn>
            <NewsletterSection>
              <NewsletterHeading>Join our newsletter</NewsletterHeading>
              <NewsletterForm onSubmit={handleNewsletterSubmit}>
                <NewsletterInput
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                <NewsletterButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </NewsletterButton>
              </NewsletterForm>
              {message && (
                messageType === 'success' ? (
                  <SuccessMessage>{message}</SuccessMessage>
                ) : (
                  <ErrorMessage>{message}</ErrorMessage>
                )
              )}
            </NewsletterSection>
          </FooterColumn>
        </FooterContent>

        {/* Legal Section */}
        <FooterColumn>
          <FooterHeading>Legal</FooterHeading>
          <FooterLink to="/terms">Terms of use</FooterLink>
          <FooterLink to="/privacy">Privacy policy</FooterLink>
        </FooterColumn>

        <FooterDivider />

        {/* Bottom Section */}
        <FooterBottom>
          <Copyright>© 2025 Hepta AS. All rights reserved.</Copyright>
          <SocialLinks>
            <SocialIcon href="https://x.com/HeptaCreative" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.53 3.00049H21.001L14.431 10.29L22.111 21.0005H15.609L10.797 14.6025L5.391 21.0005H1.929L8.929 13.21L1.609 3.00049H8.25L12.609 8.80149L17.53 3.00049ZM16.34 19.0005H18.13L7.75 4.00049H5.859L16.34 19.0005Z"/>
              </svg>
            </SocialIcon>
          </SocialLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer; 