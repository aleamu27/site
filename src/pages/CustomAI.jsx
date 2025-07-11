import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';
import { Link } from 'react-router-dom';

// --- STYLED COMPONENTS ---

const PageWrapper = styled.main`
  background-color: #fcfcfc;
`;

const Section = styled.section`
  padding: 4rem 2rem;
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
  font-size: 2.5rem;
  font-weight: 600;
  color: #222;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubheading = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem auto;
`;

// --- Problem/Solution ---
const ProblemSolutionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextBlock = styled.div``;

const TextHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TextParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
`;

const DiagramPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: #f0f0f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #aaa;
  border: 2px dashed #ddd;
`;

// --- Industry Benefits ---
const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const BenefitCard = styled.div`
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
`;

const BenefitIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const BenefitText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
`;

// --- Comparison Table ---
const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 3rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  overflow: hidden;

  th, td {
    padding: 1.5rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: #f9f9f9;
    font-size: 1.1rem;
    font-weight: 600;
  }

  td {
    font-size: 1rem;
    color: #444;
  }

  tr:last-child td {
    border-bottom: none;
  }

  .check {
    color: ${COLORS.green};
    font-weight: bold;
  }

  .cross {
    color: #aaa;
  }
`;

// --- Security Section ---
const SecurityGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const Badge = styled.div`
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
`;

// --- The Component ---
const CustomAI = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroHeading>Own Your AI, Own Your Data.</HeroHeading>
        <HeroSubheading>
          Finally, enterprise AI that's as secure as your most sensitive data requires. We build custom, on-premise Large Language Models that give you total control.
        </HeroSubheading>
        <CTAButton to="/contact">Schedule a Security Assessment</CTAButton>
      </HeroSection>

      <Section>
        <SectionHeading>The Problem with Cloud-Based AI</SectionHeading>
        <SectionSubheading>
          For industries handling sensitive information, sending data to third-party cloud AI is not just a risk—it's a non-starter. Your data is your most valuable asset; it should never leave your control.
        </SectionSubheading>
        <ProblemSolutionGrid>
          <TextBlock>
            <TextHeading>The Privacy-First Advantage</TextHeading>
            <TextParagraph>
              Our in-house LLMs mean sensitive data never leaves your client's infrastructure. This is crucial for law firms, hospitals, financial institutions, and government agencies where data security is paramount. With 100% data sovereignty, you eliminate the risk of data leakage and ensure compliance with regulations like GDPR, HIPAA, and SOC 2.
            </TextParagraph>
          </TextBlock>
          <DiagramPlaceholder>
            [Visual Diagram: Data flowing within a secure perimeter]
          </DiagramPlaceholder>
        </ProblemSolutionGrid>
      </Section>

      <Section>
        <SectionHeading>AI Solutions for Your Industry</SectionHeading>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon>⚖️</BenefitIcon>
            <BenefitTitle>For Law Firms</BenefitTitle>
            <BenefitText>
              AI that can review thousands of legal documents, draft contracts, and perform due diligence while maintaining absolute attorney-client privilege.
            </BenefitText>
          </BenefitCard>
          <BenefitCard>
            <BenefitIcon>⚕️</BenefitIcon>
            <BenefitTitle>For Healthcare</BenefitTitle>
            <BenefitText>
              Medical AI assistants that analyze patient histories, suggest diagnoses, and help with treatment plans without ever violating HIPAA.
            </BenefitText>
          </BenefitCard>
          <BenefitCard>
            <BenefitIcon>🏦</BenefitIcon>
            <BenefitTitle>For Finance</BenefitTitle>
            <BenefitText>
              Risk assessment and fraud detection systems that process sensitive financial data entirely on-premise, ensuring full compliance and security.
            </BenefitText>
          </BenefitCard>
        </BenefitsGrid>
      </Section>

      <Section>
        <SectionHeading>In-House vs. Cloud AI</SectionHeading>
        <ComparisonTable>
          <thead>
            <tr>
              <th>Feature</th>
              <th>In-House LLM (Our Solution)</th>
              <th>Cloud-Based AI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Sovereignty</td>
              <td className="check">100% - Your data never leaves your servers</td>
              <td className="cross">Data sent to third-party providers</td>
            </tr>
            <tr>
              <td>Customization</td>
              <td className="check">Trained on your specific domain knowledge</td>
              <td className="cross">Generic models, limited customization</td>
            </tr>
            <tr>
              <td>Compliance</td>
              <td className="check">Ready for GDPR, HIPAA, SOC 2</td>
              <td className="cross">Complex and often insufficient</td>
            </tr>
            <tr>
              <td>Data Leakage Risk</td>
              <td className="check">Zero risk of third-party leakage</td>
              <td className="cross">High risk</td>
            </tr>
            <tr>
              <td>Workflow Integration</td>
              <td className="check">Fully customizable to your exact needs</td>
              <td className="cross">Limited by API capabilities</td>
            </tr>
          </tbody>
        </ComparisonTable>
      </Section>
      
      <Section>
        <SectionHeading>Secure, Compliant, and Trustworthy</SectionHeading>
        <SecurityGrid>
          <Badge>✓ GDPR</Badge>
          <Badge>✓ HIPAA</Badge>
          <Badge>✓ SOC 2 Ready</Badge>
          <Badge>✓ Data Sovereignty</Badge>
        </SecurityGrid>
      </Section>

      <Section style={{ textAlign: 'center', background: '#fff' }}>
        <SectionHeading>Ready to Take Control of Your AI?</SectionHeading>
        <SectionSubheading>
          Process 10,000 documents in minutes, not weeks, with an AI that understands your business.
        </SectionSubheading>
        <CTAButton to="/contact">See How It Works</CTAButton>
      </Section>

    </PageWrapper>
  );
};

export default CustomAI; 
