import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getDomainConfig } from '../utils/domainConfig';

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
  /* Reserve enough height so the card / image do NOT change size between closed and open states */
  min-height: ${p => (p.$bookCall ? 'clamp(600px, 68vh, 720px)' : '40vh')};
  margin-bottom: 7rem;

  ${p =>
    p.$tightFooter &&
    css`
      margin-bottom: 0;
    `}

  @media (max-width: 900px) {
    min-height: ${p => (p.$bookCall ? 'clamp(620px, 84vh, 780px)' : 'auto')};
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
  max-width: 520px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ContactInput = styled.input`
  width: min(100%, 320px);
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

const InputWithMark = styled.div`
  position: relative;
  width: min(100%, 320px);
  display: flex;
  align-items: center;

  & > input {
    width: 100%;
    padding-right: 28px;
  }
`;

const ErrorMark = styled.span`
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(176, 0, 32, 0.08);
  border: 1px solid rgba(176, 0, 32, 0.45);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: ${p => (p.$visible ? 1 : 0)};
  transition: opacity 0.18s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 1.1px;
    background: #b00020;
    border-radius: 1px;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

const ContactTextarea = styled.textarea`
  width: min(100%, 320px);
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

  strong {
    display: block;
    font-size: 1.12rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
  }
`;

const BookCallExpand = styled.div`
  display: grid;
  grid-template-rows: ${p => (p.$open ? '1fr' : '0fr')};
  transition: grid-template-rows 0.35s ease;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  & > .book-call-expand-inner {
    overflow: hidden;
    min-height: 0;
  }
`;

const BookCallFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  /* extra bottom padding gives the Send button clearance inside the overflow-clipped expander */
  padding: 0.25rem 4px 0.5rem;
`;

/* Absolute position so a submission error never resizes the card */
const BookCallFormError = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  color: #b00020;
  margin: 0;
  text-align: center;
  position: absolute;
  bottom: -1.4rem;
  left: 0;
  right: 0;
  pointer-events: none;
`;

const glassCtaButtonStyles = css`
  padding: 0.7rem 1.75rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #141a1c;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 14px;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.58) 0%,
    rgba(255, 255, 255, 0.32) 45%,
    rgba(232, 246, 249, 0.42) 100%
  );
  backdrop-filter: blur(18px) saturate(1.25);
  -webkit-backdrop-filter: blur(18px) saturate(1.25);
  box-shadow:
    0 4px 28px rgba(24, 75, 84, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    inset 0 0 0 1px rgba(24, 75, 84, 0.06);
  transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, color 0.2s ease,
    transform 0.2s ease;

  &:hover:not(:disabled) {
    color: #0d1214;
    border-color: rgba(255, 255, 255, 0.92);
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.78) 0%,
      rgba(255, 255, 255, 0.48) 45%,
      rgba(220, 242, 247, 0.55) 100%
    );
    box-shadow:
      0 8px 36px rgba(24, 75, 84, 0.14),
      0 2px 8px rgba(0, 0, 0, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 1),
      inset 0 0 0 1px rgba(24, 75, 84, 0.08);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:active:not(:disabled) {
      transform: none;
    }
  }
`;

const BookCallPrimaryButton = styled.button`
  ${glassCtaButtonStyles}
  margin-top: 0;
`;

const BookCallSubmitButton = styled.button`
  ${glassCtaButtonStyles}
  margin-top: 1rem;
  /* No outer drop shadow here so it never appears clipped by the expander */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    inset 0 0 0 1px rgba(24, 75, 84, 0.06);

  &:hover:not(:disabled) {
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 1),
      inset 0 0 0 1px rgba(24, 75, 84, 0.08);
  }
`;

async function submitContact({ company, project, email, sourceDomain }) {
  const apiUrl = process.env.REACT_APP_API_URL || '/api/contact';
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ company, project, email, sourceDomain }),
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
 * ctaVariant="bookCall": single "Book a call" control that expands to name + email.
 */
function LandingContactSection({
  inquirySource = 'Website contact',
  heading,
  subtext,
  imageSrc = '/cta-image.png',
  imageAlt = '',
  tightFooter = false,
  ctaVariant = 'default',
}) {
  const { t } = useTranslation('forms');
  const isBookCall = ctaVariant === 'bookCall';
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [bookCallOpen, setBookCallOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({ name: false, email: false });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedEmail || !/\S+@\S+\.\S+/.test(trimmedEmail)) {
      setError(t('validation.emailRequired'));
      return;
    }
    if (!trimmedMessage) {
      setError(t('validation.messageRequired'));
      return;
    }
    setLoading(true);
    const { domain } = getDomainConfig();
    try {
      await submitContact({
        company: inquirySource,
        project: trimmedMessage,
        email: trimmedEmail,
        sourceDomain: domain,
      });
      setSubmitted(true);
      if (window.heptaCapture) {
        window.heptaCapture(trimmedEmail, null, inquirySource).catch(() => {});
      }
    } catch (err) {
      setError(err.message || t('errors.generic'));
    } finally {
      setLoading(false);
    }
  };

  const handleBookCallSubmit = async e => {
    e.preventDefault();
    setError('');
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const nextFieldErrors = {
      name: !trimmedName,
      email: !trimmedEmail || !/\S+@\S+\.\S+/.test(trimmedEmail),
    };
    if (nextFieldErrors.name || nextFieldErrors.email) {
      setFieldErrors(nextFieldErrors);
      return;
    }
    setFieldErrors({ name: false, email: false });
    setLoading(true);
    const { domain } = getDomainConfig();
    try {
      await submitContact({
        company: inquirySource,
        project: `20-minute call request — ${trimmedName}`,
        email: trimmedEmail,
        sourceDomain: domain,
      });
      setSubmitted(true);
      setBookCallOpen(false);
      if (window.heptaCapture) {
        window.heptaCapture(trimmedEmail, trimmedName, inquirySource).catch(() => {});
      }
    } catch (err) {
      setError(err.message || t('errors.generic'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactSection aria-label="Contact" $tightFooter={tightFooter} $bookCall={isBookCall}>
      <ContactImage>
        <img src={imageSrc} alt={imageAlt} />
      </ContactImage>
      <ContactCard>
        {!submitted && (
          <>
            <ContactHeading>{heading}</ContactHeading>
            {subtext ? <ContactSubtext>{subtext}</ContactSubtext> : null}
          </>
        )}
        {submitted ? (
          <ThankYou role="status">
            {isBookCall ? (
              <>
                <strong>{t('success.thankYouTitle')}</strong>
                <br />
                {t('success.thankYouBookCall')}
              </>
            ) : (
              t('success.thankYou')
            )}
          </ThankYou>
        ) : isBookCall ? (
          <ContactForm onSubmit={handleBookCallSubmit} noValidate>
            <BookCallPrimaryButton
              type="button"
              aria-expanded={bookCallOpen}
              aria-controls="book-call-fields"
              id="book-call-toggle"
              onClick={() => setBookCallOpen(o => {
                if (o) setFieldErrors({ name: false, email: false });
                return !o;
              })}
              disabled={loading}
            >
              {t('buttons.bookCall')}
            </BookCallPrimaryButton>
            <BookCallExpand $open={bookCallOpen} id="book-call-fields" aria-labelledby="book-call-toggle">
              <div className="book-call-expand-inner">
                <BookCallFields>
                  <InputWithMark>
                    <ContactInput
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder={t('labels.name')}
                      aria-invalid={fieldErrors.name || undefined}
                      value={name}
                      onChange={e => {
                        setName(e.target.value);
                        if (fieldErrors.name) setFieldErrors(f => ({ ...f, name: false }));
                      }}
                      disabled={loading}
                    />
                    <ErrorMark $visible={fieldErrors.name} aria-hidden="true" />
                  </InputWithMark>
                  <InputWithMark>
                    <ContactInput
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder={t('labels.email')}
                      aria-invalid={fieldErrors.email || undefined}
                      value={email}
                      onChange={e => {
                        setEmail(e.target.value);
                        if (fieldErrors.email) setFieldErrors(f => ({ ...f, email: false }));
                      }}
                      disabled={loading}
                    />
                    <ErrorMark $visible={fieldErrors.email} aria-hidden="true" />
                  </InputWithMark>
                  <BookCallSubmitButton type="submit" disabled={loading}>
                    {loading ? t('buttons.sending') : t('buttons.send')}
                  </BookCallSubmitButton>
                  {error ? <BookCallFormError>{error}</BookCallFormError> : null}
                </BookCallFields>
              </div>
            </BookCallExpand>
          </ContactForm>
        ) : (
          <ContactForm onSubmit={handleSubmit} noValidate>
            <ContactInput
              type="email"
              name="email"
              autoComplete="email"
              placeholder={t('labels.email')}
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
            <ContactTextarea
              name="message"
              placeholder={t('labels.message')}
              rows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
              disabled={loading}
            />
            {error ? <FormError>{error}</FormError> : null}
            <ContactButton type="submit" disabled={loading}>
              {loading ? t('buttons.sending') : t('buttons.send')}
            </ContactButton>
          </ContactForm>
        )}
      </ContactCard>
    </ContactSection>
  );
}

export default LandingContactSection;
