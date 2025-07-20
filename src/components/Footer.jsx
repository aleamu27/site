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
  grid-template-columns: 2fr 1fr 1fr 1fr;
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
            <FooterText>
              With roots in Molde and base in Oslo, Hepta is a marketing and technology company dedicated to creating digital solutions that make a difference.
            </FooterText>
            <FooterLink to="/about">About Hepta</FooterLink>
            <FooterLink to="/contact">Contact us</FooterLink>
          </FooterColumn>

          {/* Services Column */}
          <FooterColumn>
            <FooterHeading>Services</FooterHeading>
            <FooterLink to="/work">All services</FooterLink>
            <FooterLink to="/development">Technology</FooterLink>
            <FooterLink to="/development">App development</FooterLink>
            <FooterLink to="/custom-ai">AI</FooterLink>
          </FooterColumn>

          {/* About us Column */}
          <FooterColumn>
            <FooterHeading>About us</FooterHeading>
            <FooterLink to="/about">About Hepta</FooterLink>
            <FooterLink to="/contact">Contact us</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
          </FooterColumn>

          {/* Contact Column */}
          <FooterColumn>
            <FooterHeading>Contact</FooterHeading>
            <EmailSection>
              <EmailLabel>Email</EmailLabel>
              <EmailAddress href="mailto:j@hepta.no">j@hepta.no</EmailAddress>
            </EmailSection>
            
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
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://x.com/HeptaCreative" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.53 3.00049H21.001L14.431 10.29L22.111 21.0005H15.609L10.797 14.6025L5.391 21.0005H1.929L8.929 13.21L1.609 3.00049H8.25L12.609 8.80149L17.53 3.00049ZM16.34 19.0005H18.13L7.75 4.00049H5.859L16.34 19.0005Z"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialIcon>
          </SocialLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer; 