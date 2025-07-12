import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../styles/colors';
import { Link } from 'react-router-dom';

// --- STYLED COMPONENTS ---

const PageWrapper = styled.main`
  background: #fff;
  color: #333;
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  border-bottom: 1px solid #f0f0f0;

  &:last-of-type {
    border-bottom: none;
  }
`;

const HeroSection = styled(Section)`
  text-align: center;
  padding-top: 6rem;
  padding-bottom: 6rem;
  background: #f8f9fa;
  // Placeholder for Oslo skyline image in the background
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${COLORS.darkTeal};
  margin-bottom: 1rem;
`;

const HeroSubheading = styled.p`
  font-size: 1.3rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
`;

const StorySection = styled(Section)`
  max-width: 800px;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${COLORS.darkTeal};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #444;
  }

  blockquote {
    font-size: 1.4rem;
    font-style: italic;
    color: ${COLORS.teal};
    border-left: 3px solid ${COLORS.lightBlue};
    padding-left: 1.5rem;
    margin: 2rem 0;
  }
`;

const ValuesSection = styled(Section)`
  background: #fdfdfd;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const ValueCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  padding: 2rem;
  border-radius: 8px;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

const TeamSection = styled(Section)`
  text-align: center;
`;

const CtaSection = styled(Section)`
  background: ${COLORS.darkTeal};
  text-align: center;
  color: #fff;

  h2 {
    color: #fff;
    font-size: 2.8rem;
  }

  p {
    color: #e0e0e0;
    max-width: 600px;
    margin: 1rem auto 2rem auto;
  }
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background: #fff;
  color: ${COLORS.darkTeal};
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;


const SectionHeading = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  color: ${COLORS.darkTeal};
  margin-bottom: 4rem;
`;


const About = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroHeading>Creating at the intersection of beauty and function.</HeroHeading>
        <HeroSubheading>Built in Oslo, crafted for the world. We're a creative technology studio that believes the best solutions are born where art and engineering meet.</HeroSubheading>
      </HeroSection>

      <StorySection>
        <h2>Our Story</h2>
        <p>It started in Oslo with a simple belief: technology should be beautiful, and beautiful things should work flawlessly. Born from late nights fueled by endless coffee, we were the ones debugging code while obsessing over pixel-perfect designs.</p>
        <blockquote>We couldn't find a studio that cared equally about elegant code and stunning visuals, so we became one.</blockquote>
        <p>Inspired by Nordic design principles and the vibrant energy of Oslo's tech scene, we set out to build a different kind of studio. One where there are no boundaries between disciplines—just a shared passion for solving impossible problems with elegant solutions.</p>
      </StorySection>

      <ValuesSection>
        <SectionHeading>What We Believe</SectionHeading>
        <ValuesGrid>
          <ValueCard>
            <ValueTitle>Renaissance Builders</ValueTitle>
            <ValueDescription>In a world of specialists, we are multi-disciplinary creators. We see every project as a single craft, whether it's a line of code, a frame of video, or a stroke of design.</ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueTitle>Obsessively Crafted</ValueTitle>
            <ValueDescription>We are relentless in our pursuit of quality, obsessing over the details others overlook. For us, every pixel is purposeful and every line of code is a brushstroke.</ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueTitle>Partners, Not Vendors</ValueTitle>
            <ValueDescription>We build relationships based on transparency, honesty, and a shared desire to create something extraordinary. Your vision becomes our mission.</ValueDescription>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>
      
      <TeamSection>
        <SectionHeading>Meet the Builders</SectionHeading>
        <div style={{ padding: '2rem', border: '2px dashed #ddd', borderRadius: '12px', color: '#888' }}>
          <h3>Team Showcase Coming Soon</h3>
          <p>Real humans who are exceptional at what they do.</p>
        </div>
      </TeamSection>
      
      <CtaSection>
        <h2>Ready to build something extraordinary?</h2>
        <p>We choose projects that excite us and clients who inspire us. If you have a vision that needs a passionate team to bring it to life, we'd love to hear from you.</p>
        <CtaButton to="/contact">Start the Conversation</CtaButton>
      </CtaSection>
    </PageWrapper>
  );
};

export default About;