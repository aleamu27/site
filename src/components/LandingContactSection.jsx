import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const contactBleedGrid = css`
  width: 100vw;
  position: relative;
  margin-left: calc(50% - 50vw);
  box-sizing: border-box;
  padding-left: clamp(0.65rem, 1.15vw, 1.5rem);
  padding-right: clamp(0.65rem, 1.15vw, 1.5rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5vw;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactSection = styled.section`
  ${contactBleedGrid}
  background: #f0f0f0;
  padding-top: 5vh;
  padding-bottom: 5vh;
  min-height: 40vh;
  margin-bottom: 7rem;

  ${p =>
    p.$tightFooter &&
    css`
      margin-bottom: 0;
    `}

  @media (max-width: 900px) {
    min-height: auto;
    margin-bottom: 4rem;

    ${p =>
      p.$tightFooter &&
      css`
        margin-bottom: 0;
      `}
  }
`;

const ContactImage = styled.div`
  border-radius: 0.3vw;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    min-height: 38vh;
  }

  @media (max-width: 900px) {
    img {
      min-height: 30vh;
    }
  }
`;

const ContactCard = styled.div`
  background: #fff;
  border-radius: 0.3vw;
  padding: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 5vw;
  }
`;

const ContactHeading = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  text-align: center;
`;

const ContactSubtext = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #1a1a1a;
  text-align: center;
  margin: 0 auto 2rem;
  line-height: 1.5;
  max-width: 480px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ContactInput = styled.input`
  width: 200px;
  padding: 0.5rem 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  border: none;
  border-bottom: 1px solid #1a1a1a;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #1a1a1a;
  }
`;

const ContactTextarea = styled.textarea`
  width: 200px;
  padding: 0.5rem 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  border: none;
  border-bottom: 1px solid #1a1a1a;
  background: transparent;
  outline: none;
  resize: none;
  min-height: 24px;

  &::placeholder {
    color: #1a1a1a;
  }
`;

const ContactButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: #1a1a1a;
  background: transparent;
  border: 1px solid #1a1a1a;
  border-radius: 0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover:not(:disabled) {
    background: #1a1a1a;
    color: #fff;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

const FormError = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  color: #b00020;
  margin: 0.25rem 0 0;
  text-align: center;
  max-width: 280px;
`;

const ThankYou = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #184b54;
  text-align: center;
  margin: 0 auto;
  line-height: 1.5;
  max-width: 420px;
`;

async function submitContact({ company, project, email }) {
  const apiUrl = process.env.REACT_APP_API_URL || '/api/contact';
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ company, project, email }),
  });
  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error('Invalid response from server');
  }
  if (!response.ok) {
    throw new Error(data.error || 'Failed to send message');
  }
  return data;
}

/**
 * Home-style contact strip: image + card, posts to /api/contact
 * (company = inquirySource, project = message).
 */
function LandingContactSection({
  inquirySource = 'Website contact',
  heading,
  subtext,
  imageSrc = '/cta-image.png',
  imageAlt = '',
  tightFooter = false,
}) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedEmail || !/\S+@\S+\.\S+/.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!trimmedMessage) {
      setError('Please enter a message.');
      return;
    }
    setLoading(true);
    try {
      await submitContact({
        company: inquirySource,
        project: trimmedMessage,
        email: trimmedEmail,
      });
      setSubmitted(true);
      if (window.heptaCapture) {
        window.heptaCapture(trimmedEmail, null, inquirySource).catch(() => {});
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactSection aria-label="Contact" $tightFooter={tightFooter}>
      <ContactImage>
        <img src={imageSrc} alt={imageAlt} />
      </ContactImage>
      <ContactCard>
        <ContactHeading>{heading}</ContactHeading>
        {subtext && <ContactSubtext>{subtext}</ContactSubtext>}
        {submitted ? (
          <ThankYou>Thank you for reaching out. We will get back to you shortly.</ThankYou>
        ) : (
          <ContactForm onSubmit={handleSubmit} noValidate>
            <ContactInput
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
            <ContactTextarea
              name="message"
              placeholder="Message"
              rows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
              disabled={loading}
            />
            {error ? <FormError>{error}</FormError> : null}
            <ContactButton type="submit" disabled={loading}>
              {loading ? 'Sending…' : 'Send'}
            </ContactButton>
          </ContactForm>
        )}
      </ContactCard>
    </ContactSection>
  );
}

export default LandingContactSection;
