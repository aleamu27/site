import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const PrivacyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const PrivacyTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #222;
  margin: 0 0 3rem 0;
  line-height: 1.2;
`;

const PrivacySection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
`;

const List = styled.ul`
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ContactInfo = styled.div`
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1rem 0;
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin: 0 0 0.5rem 0;
`;

const LastUpdated = styled.div`
  font-size: 0.9rem;
  color: #999;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  text-align: center;
`;

const Privacy = () => {
  return (
    <Layout>
      <PrivacyContainer>
        <PrivacyTitle>Privacy Policy for Hepta AS</PrivacyTitle>
        <SectionText>
          This privacy policy explains how Hepta AS collects and uses personal data.
        </SectionText>

        <PrivacySection>
          <SectionTitle>1. Data Controller</SectionTitle>
          <SectionText>
            Hepta AS is the data controller for personal data collected and processed in connection with our services.
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>2. What personal data we collect</SectionTitle>
          <SectionText>We may collect the following personal data:</SectionText>
          <List>
            <ListItem>Contact information (name, email address, phone number)</ListItem>
            <ListItem>User information (username, password)</ListItem>
            <ListItem>Payment information</ListItem>
            <ListItem>Information about your use of our services</ListItem>
          </List>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>3. Purpose of processing</SectionTitle>
          <SectionText>We process personal data for the following purposes:</SectionText>
          <List>
            <ListItem>To deliver and improve our services</ListItem>
            <ListItem>To communicate with you</ListItem>
            <ListItem>To process payments</ListItem>
            <ListItem>To comply with legal obligations</ListItem>
          </List>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>4. Legal basis for processing</SectionTitle>
          <SectionText>We process personal data based on the following legal grounds:</SectionText>
          <List>
            <ListItem>Performance of contract</ListItem>
            <ListItem>Legitimate interest</ListItem>
            <ListItem>Consent</ListItem>
            <ListItem>Legal obligation</ListItem>
          </List>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>5. Sharing of personal data</SectionTitle>
          <SectionText>
            We only share personal data with third parties when necessary to deliver our services or when we are legally obligated to do so.
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>6. Storage of personal data</SectionTitle>
          <SectionText>
            We store personal data for as long as necessary to fulfill the purposes described in this privacy policy, or as long as we are required to do so according to applicable legislation.
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>7. Your rights</SectionTitle>
          <SectionText>You have the right to:</SectionText>
          <List>
            <ListItem>Access the personal data we have about you</ListItem>
            <ListItem>Request correction or deletion of personal data</ListItem>
            <ListItem>Request restriction of processing</ListItem>
            <ListItem>Object to processing</ListItem>
            <ListItem>Receive the personal data in a structured, commonly used and machine-readable format</ListItem>
          </List>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>8. Cookies</SectionTitle>
          <SectionText>
            We use cookies to improve the user experience on our website. You can manage your cookie preferences in your browser settings.
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>9. Changes to the privacy policy</SectionTitle>
          <SectionText>
            We may update this privacy policy from time to time. We will inform about significant changes on our website.
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>10. Contact information</SectionTitle>
          <SectionText>
            If you have questions about our processing of personal data, you can contact us at:
          </SectionText>
          
          <ContactInfo>
            <ContactTitle>Hepta AS</ContactTitle>
            <ContactText>Email: personvern@hepta.no</ContactText>
          </ContactInfo>
        </PrivacySection>

        <LastUpdated>Last updated: 30-03-2025</LastUpdated>
      </PrivacyContainer>
    </Layout>
  );
};

export default Privacy; 