import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Wrapper = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 5rem) clamp(1.25rem, 5vw, 2rem) clamp(4rem, 10vw, 6rem);
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
`;

const Lead = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #666;
  line-height: 1.65;
  margin: 0 0 2rem;
`;

const Block = styled.section`
  margin-bottom: 1.75rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const BlockTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #1a1a1a;
  margin: 0 0 0.6rem;
`;

const Body = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.65;
  margin: 0;
`;

const InlineLink = styled.a`
  color: #184b54;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: #0d2f36;
  }
`;

const Meta = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #999;
  margin: 2.5rem 0 0;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
`;

const Privacy = () => {
  useEffect(() => {
    document.title = 'Privacy | Hepta';
  }, []);

  return (
    <Layout>
      <Wrapper>
        <Title>Privacy</Title>
        <Lead>
          Hepta builds websites, web applications, and Calar OS. We work with organizations that need reliable digital
          infrastructure. This page explains what we collect on <strong>hepta.no</strong> (and our marketing site) and
          why.
        </Lead>

        <Block>
          <BlockTitle>Contact &amp; enquiries</BlockTitle>
          <Body>
            When you email us or use the contact form, we receive what you send (for example your email address and
            message). We use that only to respond, to work with you if there is a fit, and to keep ordinary business
            records—not to sell lists or spam you.
          </Body>
        </Block>

        <Block>
          <BlockTitle>Cookies &amp; analytics</BlockTitle>
          <Body>
            We ask for your choice in a cookie banner. If you accept, we may load analytics (such as Google Analytics
            and Microsoft Clarity) to understand how the site is used and to improve it. If you decline, those tools
            are not loaded. You can change your mind anytime using the cookie icon on the screen.
          </Body>
        </Block>

        <Block>
          <BlockTitle>Your rights</BlockTitle>
          <Body>
            Depending on where you live, you may have rights to access, correct, or delete personal data we hold about
            you, or to object to certain processing. For anything privacy-related, contact us at{' '}
            <InlineLink href="mailto:j@hepta.no">j@hepta.no</InlineLink> and we will help.
          </Body>
        </Block>

        <Block>
          <BlockTitle>Updates</BlockTitle>
          <Body>
            We may update this page occasionally. When we do, we will change the date below. It is not a full legal
            memorandum—if you need something formal for your organization, ask us and we can point you to the right
            documents.
          </Body>
        </Block>

        <Meta>Last updated: April 2026</Meta>
      </Wrapper>
    </Layout>
  );
};

export default Privacy;
