import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../styles/colors';
import { Link } from 'react-router-dom';

// --- KEYFRAMES ---
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

// --- STYLED COMPONENTS ---
const PageWrapper = styled.main`
  background-color: #fdfdfd;
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid #f0f0f0;
  &:last-of-type { border-bottom: none; }
  @media (max-width: 768px) { padding: 3.5rem 1.5rem; }
`;

const HeroSection = styled(Section)`
  text-align: center;
  padding-top: 6rem;
  padding-bottom: 6rem;
  background: #fff;
`;

const HeroHeading = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: ${COLORS.darkTeal};
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const HeroSubheading = styled.p`
  font-size: 1.4rem;
  color: #555;
  max-width: 750px;
  margin: 0 auto 2.5rem auto;
`;

const CTAButton = styled(Link)`
  background: ${COLORS.darkTeal};
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 1.2rem 2.8rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: #143e46;
    transform: translateY(-2px);
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

const StatHighlight = styled.div`
  background: ${COLORS.green};
  padding: 3rem;
  text-align: center;
  border-radius: 12px;
  margin: 2rem 0;
`;

const StatText = styled.p`
  font-size: 1.8rem;
  color: #222;
  font-weight: 500;
  margin: 0;
  strong { font-weight: 700; }
`;

const UseCaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const UseCaseCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const UseCaseIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const UseCaseTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const UseCaseText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
`;

const AgentShowcase = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-top: 3rem;
`;

const AgentCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2.5rem;
  width: 250px;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 0 5px 15px rgba(0,0,0,0.03);
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const AgentAvatar = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const AgentName = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
`;

const AgentDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

// --- THE COMPONENT ---
const AIAutomations = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroHeading>Stop Working IN Your Business. Start Working ON It.</HeroHeading>
        <HeroSubheading>
          Imagine what your business could achieve if nothing fell through the cracks and your team only worked on what truly matters. We build intelligent AI agents to make that a reality.
        </HeroSubheading>
        <CTAButton to="/contact">See AI Automation in Action</CTAButton>
      </HeroSection>

      <Section>
        <StatHighlight>
          <StatText>The average employee spends <strong>60%</strong> of their time on repetitive, mundane tasks. <br/>That's 3 days a week lost.</StatText>
        </StatHighlight>
        <SectionSubheading style={{marginTop: '4rem'}}>
          Your team's time is too valuable for copy-paste. We help you turn 40-hour headaches into 4-minute automated processes, unlocking your team's true potential and supercharging productivity.
        </SectionSubheading>
      </Section>

      <Section>
        <SectionHeading>Meet Your New Digital Workforce</SectionHeading>
        <SectionSubheading>These aren't just tools; they're AI employees trained on your business logic. They work 24/7, never make mistakes, and get smarter over time.</SectionSubheading>
        <AgentShowcase>
          <AgentCard delay="0s">
            <AgentAvatar>💬</AgentAvatar>
            <AgentName>Conversational Agent</AgentName>
            <AgentDescription>Handles 80% of customer support tickets and qualifies leads around the clock.</AgentDescription>
          </AgentCard>
          <AgentCard delay="0.5s">
            <AgentAvatar>📄</AgentAvatar>
            <AgentName>Document Processor</AgentName>
            <AgentDescription>Extracts data from invoices, forms, and contracts with perfect accuracy.</AgentDescription>
          </AgentCard>
          <AgentCard delay="1s">
            <AgentAvatar>⚙️</AgentAvatar>
            <AgentName>Workflow Orchestrator</AgentName>
            <AgentDescription>Connects your existing tools (Slack, Salesforce, etc.) to automate complex processes.</AgentDescription>
          </AgentCard>
          <AgentCard delay="1.5s">
            <AgentAvatar>📈</AgentAvatar>
            <AgentName>Analytical Agent</AgentName>
            <AgentDescription>Monitors your KPIs, detects anomalies, and surfaces opportunities in real-time.</AgentDescription>
          </AgentCard>
        </AgentShowcase>
      </Section>

      <Section>
        <SectionHeading>Transform Every Department</SectionHeading>
        <UseCaseGrid>
          <UseCaseCard>
            <UseCaseIcon>🤝</UseCaseIcon>
            <UseCaseTitle>Customer Service</UseCaseTitle>
            <UseCaseText>AI agents handle 80% of support tickets, answer common questions, and escalate only complex issues to your human experts.</UseCaseText>
          </UseCaseCard>
          <UseCaseCard>
            <UseCaseIcon>💰</UseCaseIcon>
            <UseCaseTitle>Finance & Accounting</UseCaseTitle>
            <UseCaseText>Automate invoice processing, expense reports, and financial reconciliation without human touch, eliminating costly errors.</UseCaseText>
          </UseCaseCard>
          <UseCaseCard>
            <UseCaseIcon>📈</UseCaseIcon>
            <UseCaseTitle>Sales & Marketing</UseCaseTitle>
            <UseCaseText>Automate lead qualification, personalized email campaigns, and follow-ups so your sales team can focus on closing deals.</UseCaseText>
          </UseCaseCard>
          <UseCaseCard>
            <UseCaseIcon>📋</UseCaseIcon>
            <UseCaseTitle>HR & Recruiting</UseCaseTitle>
            <UseCaseText>Screen resumes, schedule interviews, and manage onboarding workflows automatically, finding the best talent faster.</UseCaseText>
          </UseCaseCard>
        </UseCaseGrid>
      </Section>

      <Section style={{ textAlign: 'center', background: '#fff' }}>
        <SectionHeading>Ready for the Time Revolution?</SectionHeading>
        <SectionSubheading>
          Most of our clients see over 300% productivity gains within 90 days. Let's calculate the time and money you could be saving.
        </SectionSubheading>
        <CTAButton to="/contact">Calculate Your Time Savings</CTAButton>
      </Section>
    </PageWrapper>
  );
};

export default AIAutomations; 