import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import LandingContactSection from '../components/LandingContactSection';

/* Match LandingContactSection horizontal bleed so copy lines up with the grey strip */
const contactBleed = css`
  width: 100vw;
  position: relative;
  margin-left: calc(50% - 50vw);
  box-sizing: border-box;
  padding-left: clamp(0.65rem, 1.15vw, 1.5rem);
  padding-right: clamp(0.65rem, 1.15vw, 1.5rem);
`;

/* Sits above the grey ContactSection only (full width), not on top of the image column */
const ContactIntro = styled.div`
  ${contactBleed}
  background: #ffffff;
  padding-bottom: clamp(1rem, 2.5vh, 1.75rem);
`;

const IntroLine = styled.span`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.95rem, 2.55vw, 3.35rem);
  font-weight: 800;
  color: #262626;
  line-height: 1.06;
  letter-spacing: -0.045em;
  white-space: nowrap;

  @media (max-width: 520px) {
    white-space: normal;
    font-size: clamp(1rem, 4.5vw, 1.45rem);
  }
`;

/* Clear nav + push grey strip down so ~half sits below the fold on first paint */
const ContactBody = styled.div`
  padding-top: calc(5.5rem + clamp(34vh, 42vh, 48vh));
`;

function Contact() {
  const { t } = useTranslation('forms');

  useEffect(() => {
    document.title = t('contact.pageTitle');
  }, [t]);

  return (
    <Layout tightFooter>
      <ContactBody>
        <ContactIntro>
          <IntroLine>{t('contact.introLine1')}</IntroLine>
          <IntroLine>{t('contact.introLine2')}</IntroLine>
        </ContactIntro>
        <LandingContactSection
          tightFooter
          inquirySource="Get in touch page"
          heading={t('contact.heading')}
          subtext={
            <>
              {t('contact.subtext')}
              <br />
              {t('contact.subtextLine2')}
            </>
          }
          imageSrc="/cta-image.png"
          imageAlt="Mountain coastline"
        />
      </ContactBody>
    </Layout>
  );
}

export default Contact;
