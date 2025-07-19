import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const TermsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const TermsTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #222;
  margin: 0 0 3rem 0;
  line-height: 1.2;
`;

const TermsSection = styled.section`
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

const SubSection = styled.div`
  margin-bottom: 2rem;
`;

const SubSectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1rem 0;
  line-height: 1.4;
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

const Terms = () => {
  return (
    <Layout>
      <TermsContainer>
        <TermsTitle>Terms of Use - Hepta AS</TermsTitle>

        <TermsSection>
          <SectionTitle>1. Introduction</SectionTitle>
          <SectionText>
            These terms of use ("Terms") apply to the use of the website of Hepta AS, organization number 934762002 ("Hepta", "we", "us", "our"). By using our website, you accept these terms in full. If you do not accept the terms, we ask you to refrain from using the website.
          </SectionText>
        </TermsSection>

        <TermsSection>
          <SectionTitle>2. Service Description</SectionTitle>
          <SectionText>The website offers:</SectionText>
          <List>
            <ListItem>Information about Hepta AS and our services</ListItem>
            <ListItem>Contact form for inquiries</ListItem>
            <ListItem>Customer portal with access to invoices and payment solution</ListItem>
            <ListItem>TikTok analytics dashboard for our customers</ListItem>
            <ListItem>Profile configurations for logged-in users</ListItem>
          </List>
        </TermsSection>

        <TermsSection>
          <SectionTitle>3. User Accounts</SectionTitle>
          
          <SubSection>
            <SubSectionTitle>3.1 Access to customer portal</SubSectionTitle>
            <SectionText>
              Customers of Hepta AS can get access to a personal customer portal. Access to this portal requires login with username and password assigned by Hepta AS.
            </SectionText>
          </SubSection>

          <SubSection>
            <SubSectionTitle>3.2 Responsibility for user account</SubSectionTitle>
            <SectionText>
              You are responsible for keeping your login credentials confidential. All activity that occurs under your user account is your responsibility. You must immediately notify Hepta AS of any unauthorized use of your account or other security breaches.
            </SectionText>
          </SubSection>

          <SubSection>
            <SubSectionTitle>3.3 Termination of account</SubSectionTitle>
            <SectionText>
              Hepta AS reserves the right to suspend or terminate your access to the customer portal if you violate these terms or if there are other legitimate reasons.
            </SectionText>
          </SubSection>
        </TermsSection>

        <TermsSection>
          <SectionTitle>4. Intellectual Property Rights</SectionTitle>
          
          <SubSection>
            <SubSectionTitle>4.1 Hepta's rights</SubSectionTitle>
            <SectionText>
              All content on the website, including but not limited to text, graphics, logos, images, audio, video and software, is the property of Hepta AS or used with permission from rights holders. This content is protected by Norwegian and international laws on copyright and other intellectual property rights.
            </SectionText>
          </SubSection>

          <SubSection>
            <SubSectionTitle>4.2 Limited license</SubSectionTitle>
            <SectionText>
              Hepta AS grants you a limited, non-exclusive and non-transferable license to access and use the website for personal, non-commercial purposes. You may not copy, modify, distribute, sell or exploit content from the website without written permission from Hepta AS.
            </SectionText>
          </SubSection>
        </TermsSection>

        <TermsSection>
          <SectionTitle>5. Privacy and Data Processing</SectionTitle>
          
          <SubSection>
            <SubSectionTitle>5.1 Personal data</SubSectionTitle>
            <SectionText>
              Hepta AS collects and processes personal data in accordance with the General Data Protection Regulation (GDPR) and other relevant legislation. We collect the following personal data:
            </SectionText>
            <List>
              <ListItem>Name and email address via the contact form on the website</ListItem>
              <ListItem>Message content from the contact form</ListItem>
              <ListItem>Invoice information for our customers</ListItem>
            </List>
          </SubSection>

          <SubSection>
            <SubSectionTitle>5.2 Cookies</SubSectionTitle>
            <SectionText>
              The website uses cookies to manage user sessions. By using the website, you consent to the use of such cookies.
            </SectionText>
          </SubSection>

          <SubSection>
            <SubSectionTitle>5.3 Third-party services</SubSectionTitle>
            <SectionText>
              We use Stripe as a payment solution and TikTok API for analytical services. These services may collect data according to their own privacy policies. We recommend that you read these services' privacy policies for more information.
            </SectionText>
          </SubSection>

          <SubSection>
            <SubSectionTitle>5.4 Privacy policy</SubSectionTitle>
            <SectionText>
              For more detailed information about how we process personal data, see our separate privacy policy.
            </SectionText>
          </SubSection>
        </TermsSection>

        <TermsSection>
          <SectionTitle>6. Payment and Billing</SectionTitle>
          
          <SubSection>
            <SubSectionTitle>6.1 Payment terms</SubSectionTitle>
            <SectionText>
              Payment terms are regulated through separate contracts between Hepta AS and the customer. The customer portal provides access to invoices and the ability to pay these.
            </SectionText>
          </SubSection>

          <SubSection>
            <SubSectionTitle>6.2 Payment security</SubSectionTitle>
            <SectionText>
              All payment information is processed by Stripe, a secure payment service provider. Hepta AS does not store credit card numbers or other payment information directly.
            </SectionText>
          </SubSection>
        </TermsSection>

        <TermsSection>
          <SectionTitle>7. Disclaimers</SectionTitle>
          
          <SubSection>
            <SubSectionTitle>7.1 Availability</SubSectionTitle>
            <SectionText>
              Hepta AS strives to keep the website available at all times, but cannot guarantee uninterrupted access. We reserve the right to change, suspend or terminate all or parts of the website without notice.
            </SectionText>
          </SubSection>

          <SubSection>
            <SubSectionTitle>7.2 Accuracy</SubSectionTitle>
            <SectionText>
              Although we do our best to ensure that the information on the website is accurate and up-to-date, we cannot guarantee this. Hepta AS disclaims any responsibility for any errors or omissions in the content.
            </SectionText>
          </SubSection>

          <SubSection>
            <SubSectionTitle>7.3 Limitation of liability</SubSectionTitle>
            <SectionText>
              To the extent permitted by applicable law, Hepta AS shall not be liable for indirect losses, consequential damages or special damages that arise as a result of use or inability to use the website.
            </SectionText>
          </SubSection>
        </TermsSection>

        <TermsSection>
          <SectionTitle>8. Changes to the terms</SectionTitle>
          <SectionText>
            Hepta AS reserves the right to change these terms at any time. Any changes will be published on the website. Your continued use of the website after changes are published constitutes your acceptance of the modified terms.
          </SectionText>
        </TermsSection>

        <TermsSection>
          <SectionTitle>9. Choice of law and jurisdiction</SectionTitle>
          <SectionText>
            These terms are subject to Norwegian law. Any disputes that arise in connection with these terms shall be sought resolved through negotiations. If negotiations do not lead to a solution, the dispute shall be decided by Norwegian courts with Romsdal District Court as the venue.
          </SectionText>
        </TermsSection>

        <TermsSection>
          <SectionTitle>10. Contact information</SectionTitle>
          <SectionText>
            If you have questions about these terms or the use of the website, you can contact us at:
          </SectionText>
          
          <ContactInfo>
            <ContactTitle>Hepta AS</ContactTitle>
            <ContactText>Organization number: 934762002</ContactText>
            <ContactText>Email: hey@hepta.biz</ContactText>
            <ContactText>Address: Setervegen 23</ContactText>
          </ContactInfo>
        </TermsSection>

        <LastUpdated>Last updated: 30-03-2025</LastUpdated>
      </TermsContainer>
    </Layout>
  );
};

export default Terms; 