import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../styles/colors';
import { Link } from 'react-router-dom';

// --- KEYFRAMES for animations ---
const morph = keyframes`
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`;

// --- STYLED COMPONENTS ---

const PageWrapper = styled.main`
  background: #fff;
  color: #1a1a1a;
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid #f0f0f0;
  &:last-of-type { border-bottom: none; }
`;

const HeroSection = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: radial-gradient(circle, #f5f7fa, #eef2f7);
  overflow: hidden;
`;

const HeroContent = styled.div`
  z-index: 2;
  position: relative;
`;

const HeroHeading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: ${COLORS.darkTeal};
  margin-bottom: 0.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const HeroSubheading = styled.p`
  font-size: 1.5rem;
  color: #555;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto 2rem auto;
`;

const AnimatedBlob = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.lightBlue} 100%);
  opacity: 0.15;
  animation: ${morph} 15s ease-in-out infinite;
  z-index: 1;
`;

const ProblemStatementSection = styled(Section)`
  text-align: center;
  background: #fcfdff;
`;

const Stat = styled.p`
  font-size: 3rem;
  font-weight: 700;
  color: ${COLORS.darkBlue};
  margin: 0;
`;

const StatContext = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 1rem auto 0 auto;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled.div`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0, 70, 100, 0.08);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${COLORS.teal};
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(45deg, ${COLORS.darkBlue}, ${COLORS.teal});
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 100, 150, 0.3);
  }
`;

const SectionHeading = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  font-weight: 700;
  color: ${COLORS.darkTeal};
  margin-bottom: 1rem;
`;

const SectionSubheading = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  max-width: 700px;
  margin: 0 auto 4rem auto;
`;

const Design = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <AnimatedBlob />
        <HeroContent>
          <HeroHeading>Design That Converts</HeroHeading>
          <HeroSubheading>We blend user psychology with aesthetic excellence to create designs that don't just decorate—they deliver.</HeroSubheading>
          <CtaButton to="/contact">Transform Your Visual Identity</CtaButton>
        </HeroContent>
      </HeroSection>

      <ProblemStatementSection>
        <Stat>50ms</Stat>
        <StatContext>That's all the time you have to make a first impression. In a world of infinite scroll, we create design that demands attention, builds trust, and drives action.</StatContext>
      </ProblemStatementSection>

      <Section>
        <SectionHeading>Strategy Meets Beauty</SectionHeading>
        <SectionSubheading>Our design services are built on a foundation of strategic thinking. Every color, shape, and space has a purpose, ensuring your visual identity works as hard as you do.</SectionSubheading>
        <ServiceGrid>
          <ServiceCard>
            <ServiceIcon>🎨</ServiceIcon>
            <ServiceTitle>Brand Identity</ServiceTitle>
            <ServiceDescription>From logos to comprehensive brand guidelines, we build visual systems that tell your story and scale with your success.</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>📱</ServiceIcon>
            <ServiceTitle>UI/UX Design</ServiceTitle>
            <ServiceDescription>We craft intuitive, accessible, and delightful interfaces for websites and applications that users love to use.</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>📈</ServiceIcon>
            <ServiceTitle>Marketing & Ads</ServiceTitle>
            <ServiceDescription>Creative campaigns that capture attention, communicate value, and convert prospects into loyal customers.</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>📦</ServiceIcon>
            <ServiceTitle>Product & Packaging</ServiceTitle>
            <ServiceDescription>Designs that sell themselves off the shelf, creating a memorable unboxing experience and lasting brand loyalty.</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>🏢</ServiceIcon>
            <ServiceTitle>Environmental Design</ServiceTitle>
            <ServiceDescription>Transforming physical spaces with signage and wayfinding that guides, informs, and inspires.</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>✨</ServiceIcon>
            <ServiceTitle>Motion & Data Viz</ServiceTitle>
            <ServiceDescription>Bringing brands to life with compelling animations and making complex data instantly understandable.</ServiceDescription>
          </ServiceCard>
        </ServiceGrid>
      </Section>
      
      {/* Placeholder for Design Principles / Process Section */}
      <Section style={{ background: '#f8f9fa' }}>
        <SectionHeading>Our Design Philosophy</SectionHeading>
        <SectionSubheading>Beautiful is baseline. Effective is everything. Our process ensures we deliver design that achieves real business goals.</SectionSubheading>
        {/* Interactive Showcase Placeholder */}
        <div style={{ textAlign: 'center', padding: '2rem', border: '2px dashed #ddd', borderRadius: '12px' }}>
          <h3 style={{ color: '#888' }}>Interactive Design Principles Showcase Coming Soon</h3>
          <p style={{ color: '#aaa' }}>(e.g., Color Psychology Demo, Typography Playground, Grid Visualization)</p>
        </div>
      </Section>

      {/* Placeholder for Case Studies Section */}
      <Section>
        <SectionHeading>Results You Can See</SectionHeading>
        <SectionSubheading>We measure our success by the success of our clients. Here’s how our designs have made a measurable impact.</SectionSubheading>
        <div style={{ textAlign: 'center', padding: '2rem', border: '2px dashed #ddd', borderRadius: '12px' }}>
          <h3 style={{ color: '#888' }}>Before & After Case Studies Coming Soon</h3>
          <p style={{ color: '#aaa' }}>(e.g., +200% Conversion, -50% Bounce Rate)</p>
        </div>
      </Section>

      <Section style={{ background: COLORS.darkTeal, color: '#fff' }}>
        <SectionHeading style={{ color: '#fff' }}>Ready to Redefine Your Brand?</SectionHeading>
        <SectionSubheading style={{ color: '#e0e0e0', maxWidth: '600px' }}>Stop losing customers to better-looking competitors. Let's build a visual identity that wins hearts, minds, and markets.</SectionSubheading>
        <div style={{ textAlign: 'center' }}>
          <CtaButton as="a" href="/contact" style={{ background: '#fff', color: COLORS.darkTeal }}>
            Get a Free Design Audit
          </CtaButton>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default Design; 