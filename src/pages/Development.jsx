import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';
import { Link } from 'react-router-dom';

// --- STYLED COMPONENTS ---

const PageWrapper = styled.main`
  background-color: #fcfcfc;
`;

const Section = styled.section`
  padding: 4.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid #eee;

  &:last-of-type {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const HeroSection = styled(Section)`
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: #fff;
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${COLORS.darkTeal};
  margin-bottom: 1rem;
  line-height: 1.1;
`;

const HeroSubheading = styled.p`
  font-size: 1.5rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 2rem auto;
`;

const CTAButton = styled(Link)`
  background: ${COLORS.darkTeal};
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 1.1rem 2.5rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  transition: background 0.2s;

  &:hover {
    background: #143e46;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  color: #222;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubheading = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
  line-height: 1.6;
`;

// --- Platform Showcase ---
const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
`;

const PlatformCard = styled.div`
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
`;

const PlatformIcon = styled.div`
  font-size: 3rem;
  color: ${COLORS.darkTeal};
  margin-bottom: 1.5rem;
`;

const PlatformTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const PlatformText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
`;

// --- Methodology ---
const ProcessGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 4rem;
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ProcessStep = styled.div`
  flex: 1;
  text-align: center;
`;

const ProcessNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${COLORS.green};
  color: #222;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
`;

const ProcessTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProcessText = styled.p`
  font-size: 1rem;
  color: #666;
`;

// --- Tech & Craftsmanship ---
const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const TechCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid #eee;
`;

const TechTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TechListItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &::before {
    content: '✓';
    color: ${COLORS.green};
    margin-right: 0.75rem;
    font-weight: bold;
  }
`;

// --- Security Stack ---
const StackGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StackItem = styled.div`
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: 500;
  font-size: 1rem;
`;

// --- The Component ---
const Development = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroHeading>Build Fast. Build Secure. Build Everywhere.</HeroHeading>
        <HeroSubheading>
          We are security experts who build amazing applications. In a world of constant cyber threats, we build digital fortresses, not houses of cards.
        </HeroSubheading>
        <CTAButton to="/contact">Start Your Secure Development Journey</CTAButton>
      </HeroSection>

      <Section>
        <SectionHeading>Security-First Development</SectionHeading>
        <SectionSubheading>
          Data breaches cost millions and broken trust costs everything. That's why we don't bolt on security as an afterthought. We bake cybersecurity into every line of code, from day one.
        </SectionSubheading>
        <ProcessGrid>
          <ProcessStep>
            <ProcessNumber>1</ProcessNumber>
            <ProcessTitle>Secure by Design</ProcessTitle>
            <ProcessText>Architecture built on zero-trust principles and threat modeling.</ProcessText>
          </ProcessStep>
          <ProcessStep>
            <ProcessNumber>2</ProcessNumber>
            <ProcessTitle>Secure Code</ProcessTitle>
            <ProcessText>OWASP Top 10 compliance and end-to-end encryption are standard.</ProcessText>
          </ProcessStep>
          <ProcessStep>
            <ProcessNumber>3</ProcessNumber>
            <ProcessTitle>Secure Deployment</ProcessTitle>
            <ProcessText>Automated security testing and real-time threat monitoring in CI/CD.</ProcessText>
          </ProcessStep>
          <ProcessStep>
            <ProcessNumber>4</ProcessNumber>
            <ProcessTitle>Secure Operations</ProcessTitle>
            <ProcessText>Regular penetration tests, patch management, and incident response.</ProcessText>
          </ProcessStep>
        </ProcessGrid>
      </Section>

      <Section>
        <SectionHeading>Cross-Platform Development</SectionHeading>
        <SectionSubheading>
          We build high-performance, secure applications for every major platform, ensuring a seamless experience for your users everywhere.
        </SectionSubheading>
        <PlatformGrid>
          <PlatformCard>
            <PlatformIcon>🌐</PlatformIcon>
            <PlatformTitle>Web Applications</PlatformTitle>
            <PlatformText>Secure, scalable, and fast progressive web apps, dynamic dashboards, and complex data-intensive platforms using modern frameworks.</PlatformText>
          </PlatformCard>
          <PlatformCard>
            <PlatformIcon>📱</PlatformIcon>
            <PlatformTitle>Mobile Apps</PlatformTitle>
            <PlatformText>Native iOS and Android applications with a focus on performance, user experience, and ironclad security for sensitive user data.</PlatformText>
          </PlatformCard>
          <PlatformCard>
            <PlatformIcon>💻</PlatformIcon>
            <PlatformTitle>Desktop Apps</PlatformTitle>
            <PlatformText>Cross-platform desktop solutions with secure, signed code and automated update mechanisms for reliable enterprise deployment.</PlatformText>
          </PlatformCard>
          <PlatformCard>
            <PlatformIcon>☁️</PlatformIcon>
            <PlatformTitle>Cloud & Enterprise</PlatformTitle>
            <PlatformText>Robust backend systems, secure microservices architecture, and scalable containerized deployments for enterprise-grade applications.</PlatformText>
          </PlatformCard>
        </PlatformGrid>
      </Section>

      <Section>
        <SectionHeading>Technology & Craftsmanship</SectionHeading>
        <SectionSubheading>
          Secure code is just the beginning. We write clean, maintainable, and scalable code using modern technologies to build solutions that last.
        </SectionSubheading>
        <TechGrid>
          <TechCard>
            <TechTitle>Frontend Development</TechTitle>
            <TechList>
              <TechListItem>React & Next.js</TechListItem>
              <TechListItem>Performance Optimization</TechListItem>
              <TechListItem>UI/UX Implementation</TechListItem>
              <TechListItem>Component-Based Architecture</TechListItem>
            </TechList>
          </TechCard>
          <TechCard>
            <TechTitle>Backend Development</TechTitle>
            <TechList>
              <TechListItem>Node.js, Python, Go</TechListItem>
              <TechListItem>REST & GraphQL APIs</TechListItem>
              <TechListItem>SQL & NoSQL Databases</TechListItem>
              <TechListItem>Serverless Architecture</TechListItem>
            </TechList>
          </TechCard>
          <TechCard>
            <TechTitle>Cloud & DevOps</TechTitle>
            <TechList>
              <TechListItem>AWS, GCP, Vercel</TechListItem>
              <TechListItem>Docker & Kubernetes</TechListItem>
              <TechListItem>CI/CD Automation</TechListItem>
              <TechListItem>Infrastructure as Code (IaC)</TechListItem>
            </TechList>
          </TechCard>
        </TechGrid>
      </Section>

      <Section>
        <SectionHeading>Our Security Stack & Practices</SectionHeading>
        <SectionSubheading>
          We use industry-leading tools and proven methodologies to protect your applications at every level.
        </SectionSubheading>
        <StackGrid>
          <StackItem>Static Analysis (SAST)</StackItem>
          <StackItem>Dynamic Analysis (DAST)</StackItem>
          <StackItem>Dependency Scanning</StackItem>
          <StackItem>Penetration Testing</StackItem>
          <StackItem>End-to-End Encryption</StackItem>
          <StackItem>Zero-Trust Architecture</StackItem>
          <StackItem>CI/CD Security Gates</StackItem>
          <StackItem>OWASP Top 10</StackItem>
        </StackGrid>
      </Section>

      <Section style={{ textAlign: 'center', background: '#fff' }}>
        <SectionHeading>Ready to Build Your Fortress?</SectionHeading>
        <SectionSubheading>
          Our applications pass security audits on the first try. Let's build a solution you can trust, from the architecture up.
        </SectionSubheading>
        <CTAButton to="/contact">Get a Security Architecture Review</CTAButton>
      </Section>

    </PageWrapper>
  );
};

export default Development; 