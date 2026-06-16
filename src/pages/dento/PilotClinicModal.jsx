import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { submitContact } from '../../utils/contactApi';
import { colors, fonts } from './theme';

const INQUIRY_SOURCE = 'Dento pilot clinic';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(26, 22, 21, 0.42);
  backdrop-filter: blur(6px);
  animation: ${fadeIn} 0.22s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Dialog = styled.div`
  position: relative;
  width: min(420px, 100%);
  padding: 32px;
  border-radius: 24px;
  background: ${colors.white};
  box-shadow: 0 24px 60px rgba(26, 22, 21, 0.2);
  animation: ${slideUp} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 809px) {
    padding: 28px 24px 24px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 999px;
  background: ${colors.bgAlt};
  color: ${colors.textMuted};
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover:not(:disabled) {
    background: ${colors.border};
    color: ${colors.text};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Title = styled.h2`
  margin: 0 36px 8px 0;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  font-weight: 600;
  color: ${colors.text};
`;

const Subtitle = styled.p`
  margin: 0 0 24px;
  font-size: 15px;
  line-height: 1.55;
  color: ${colors.textMuted};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${colors.textSecondary};
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 16px;
  border: 1px solid ${p => (p.$invalid ? '#d64545' : colors.border)};
  border-radius: 14px;
  background: ${colors.bgAlt};
  color: ${colors.text};
  font-family: ${fonts.body};
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${colors.textMuted};
  }

  &:focus {
    border-color: ${colors.blueDark};
    box-shadow: 0 0 0 3px rgba(21, 108, 194, 0.12);
    background: ${colors.white};
  }

  &:disabled {
    opacity: 0.65;
  }
`;

const SubmitBtn = styled.button`
  margin-top: 8px;
  width: 100%;
  padding: 14px 24px;
  border: none;
  border-radius: 999px;
  background: ${colors.text};
  color: ${colors.white};
  font-family: ${fonts.body};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 10px 28px rgba(26, 22, 21, 0.18);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FormError = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.45;
  color: #c0392b;
`;

const ThankYou = styled.div`
  padding: 8px 0 4px;
  text-align: center;

  strong {
    display: block;
    margin-bottom: 10px;
    font-size: 22px;
    letter-spacing: -0.03em;
    color: ${colors.text};
  }

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: ${colors.textMuted};
  }
`;

export default function PilotClinicModal({ open, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({ name: false, email: false });

  const resetForm = useCallback(() => {
    setName('');
    setEmail('');
    setError('');
    setSubmitted(false);
    setFieldErrors({ name: false, email: false });
  }, []);

  const handleClose = useCallback(() => {
    if (loading) return;
    onClose();
    window.setTimeout(resetForm, 280);
  }, [loading, onClose, resetForm]);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = e => {
      if (e.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, handleClose]);

  const handleSubmit = async e => {
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

    try {
      await submitContact({
        company: INQUIRY_SOURCE,
        project: `Pilot clinic signup — ${trimmedName}`,
        email: trimmedEmail,
        sourceDomain: 'heptatech.io',
      });
      setSubmitted(true);
      if (typeof window.heptaCapture === 'function') {
        window.heptaCapture(trimmedEmail, trimmedName, INQUIRY_SOURCE).catch(() => {});
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return createPortal(
    <Backdrop onClick={handleClose}>
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="pilot-modal-title"
        onClick={e => e.stopPropagation()}
        data-lenis-prevent
      >
        <CloseBtn type="button" onClick={handleClose} disabled={loading} aria-label="Close">
          ×
        </CloseBtn>

        {submitted ? (
          <ThankYou role="status">
            <strong>Thank you!</strong>
            <p>We&apos;ve received your details and will be in touch soon.</p>
          </ThankYou>
        ) : (
          <>
            <Title id="pilot-modal-title">Become a pilot clinic</Title>
            <Subtitle>
              Leave your name and email — we&apos;ll reach out about joining the Dento pilot program.
            </Subtitle>
            <Form onSubmit={handleSubmit} noValidate>
              <Field>
                <Label htmlFor="pilot-name">Name</Label>
                <Input
                  id="pilot-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  value={name}
                  $invalid={fieldErrors.name}
                  aria-invalid={fieldErrors.name || undefined}
                  onChange={e => {
                    setName(e.target.value);
                    if (fieldErrors.name) setFieldErrors(f => ({ ...f, name: false }));
                  }}
                  disabled={loading}
                />
              </Field>
              <Field>
                <Label htmlFor="pilot-email">Email</Label>
                <Input
                  id="pilot-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@clinic.no"
                  value={email}
                  $invalid={fieldErrors.email}
                  aria-invalid={fieldErrors.email || undefined}
                  onChange={e => {
                    setEmail(e.target.value);
                    if (fieldErrors.email) setFieldErrors(f => ({ ...f, email: false }));
                  }}
                  disabled={loading}
                />
              </Field>
              {error ? <FormError>{error}</FormError> : null}
              <SubmitBtn type="submit" disabled={loading}>
                {loading ? 'Sending…' : 'Send'}
              </SubmitBtn>
            </Form>
          </>
        )}
      </Dialog>
    </Backdrop>,
    document.body
  );
}
