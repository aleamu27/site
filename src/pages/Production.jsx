import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';
import { Link } from 'react-router-dom';

// --- STYLED COMPONENTS ---

const PageWrapper = styled.main`
  background-color: #111;
  color: #fff;
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  border-bottom: 1px solid #222;

  &:last-of-type {
    border-bottom: none;
  }
`;

const HeroSection = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  // Placeholder for a full-width video reel background
  background: #000; 
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2));
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroHeading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
`;

const HeroSubheading = styled.p`
  font-size: 1.5rem;
  color: #eee;
  max-width: 700px;
  margin: 0 auto 2.5rem auto;
`;

const CTAButton = styled(Link)`
  background: ${COLORS.green};
  color: #111;
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
    background: #00e09e;
    transform: translateY(-2px);
  }
`;

const SectionHeading = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubheading = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
  line-height: 1.6;
`;

// --- Services ---
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 2.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${COLORS.green};
  margin-bottom: 1rem;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceListItem = styled.li`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 0.75rem;
`;

// --- Portfolio ---
const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const PortfolioItem = styled.div`
  aspect-ratio: 16 / 9;
  background: #333;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #666;
  // Placeholder for hover-play video preview
`;

// --- The Component ---
const Production = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroHeading>Stories That Move</HeroHeading>
          <HeroSubheading>
            In a world of infinite scroll, we create videos that make people stop, watch, and remember. Your vision, elevated through cinematic excellence.
          </HeroSubheading>
          <CTAButton to="/contact">Book a Creative Consultation</CTAButton>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionHeading>Full-Service Video Production</SectionHeading>
        <SectionSubheading>
          We are visual storytellers who handle everything from script to screen. We don't just capture moments; we craft experiences that move your audience.
        </SectionSubheading>
        <ServicesGrid>
          <ServiceCard>
            <ServiceTitle>Pre-Production</ServiceTitle>
            <ServiceList>
              <ServiceListItem>Concept Development</ServiceListItem>
              <ServiceListItem>Scriptwriting & Storyboarding</ServiceListItem>
              <ServiceListItem>Location Scouting & Casting</ServiceListItem>
            </ServiceList>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Production</ServiceTitle>
            <ServiceList>
              <ServiceListItem>4K/8K Cinema Cameras</ServiceListItem>
              <ServiceListItem>Drone Cinematography</ServiceListItem>
              <ServiceListItem>Multi-Cam & Live Streaming</ServiceListItem>
            </ServiceList>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Post-Production</ServiceTitle>
            <ServiceList>
              <ServiceListItem>Cinematic Color Grading</ServiceListItem>
              <ServiceListItem>Motion Graphics & VFX</ServiceListItem>
              <ServiceListItem>Sound Design & Mixing</ServiceListItem>
            </ServiceList>
          </ServiceCard>
        </ServicesGrid>
      </Section>

      <Section>
        <SectionHeading>Our Work</SectionHeading>
        <SectionSubheading>
          From corporate brand films to creative music videos, we speak your visual language.
        </SectionSubheading>
        <PortfolioGrid>
          <PortfolioItem>[Video]</PortfolioItem>
          <PortfolioItem>[Video]</PortfolioItem>
          <PortfolioItem>[Video]</PortfolioItem>
          <PortfolioItem>[Video]</PortfolioItem>
          <PortfolioItem>[Video]</PortfolioItem>
          <PortfolioItem>[Video]</PortfolioItem>
        </PortfolioGrid>
      </Section>
      
      <Section>
        <SectionHeading>The Technology Behind the Story</SectionHeading>
        <SectionSubheading>
          We use cutting-edge technology, from AI-powered editing for faster turnarounds to advanced color science, to ensure your story is told flawlessly.
        </SectionSubheading>
        {/* Placeholder for tech stack/equipment showcase */}
      </Section>

      <Section style={{ background: '#000', textAlign: 'center' }}>
        <SectionHeading>Your competitors are telling stories. Are you?</SectionHeading>
        <SectionSubheading>
          Let's craft a visual experience that captures attention and drives results.
        </SectionSubheading>
        <CTAButton to="/contact">Start Your Visual Story</CTAButton>
      </Section>
    </PageWrapper>
  );
};

export default Production; 
