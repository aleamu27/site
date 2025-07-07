import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { COLORS } from '../styles/colors';

const HERO_HEADING = (
  <>
    <span style={{ display: 'inline-block', minWidth: '56px', verticalAlign: 'baseline' }}>
      <span className="hero-grey" style={{ fontSize: '1.7rem' }}>Hello!</span>
    </span>
    <span className="hero-black" style={{ fontFamily: 'JetBrains Mono, Fira Mono, Menlo, monospace', fontWeight: 700, fontSize: '2.7rem', verticalAlign: 'baseline', marginLeft: '0.5rem' }}>
      Ready to Develop?
    </span>
  </>
);
const HERO_SUBTITLE = 'We engineer robust, scalable digital solutions.';
const HERO_BUTTON = "Let's Build";
const HERO_IMAGE_ALT = 'Development Illustration';

const HeroSection = styled.section`
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafbfa;
  padding: 6vw 0 2vw 0;
  overflow: visible;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    min-height: 0;
    padding: 2.5rem 0 1.5rem 0;
  }
`;

const HeroContentBlock = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 4px 32px 0 rgba(24,75,84,0.07);
  padding: 3.5rem 3.5rem 2.5rem 3.5rem;
  min-width: 0;
  max-width: 540px;
  margin-right: 3vw;
  margin-left: 40px;
  @media (max-width: 900px) {
    margin: 0 auto 2.5rem auto;
    padding: 2.2rem 1.2rem 1.5rem 1.2rem;
    max-width: 98vw;
    align-items: center;
    text-align: center;
  }
`;

const FloatingIcon = styled.div`
  position: absolute;
  left: 12px;
  top: calc(-2.7rem + 5px);
  width: 54px;
  height: 54px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(24,75,84,0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
  color: #184B54;
  font-family: 'JetBrains Mono', 'Fira Mono', 'Menlo', 'monospace';
  z-index: 2;
  @media (max-width: 900px) {
    left: 50%;
    transform: translateX(-50%);
    top: -2.7rem;
  }
`;

const HeroHeading = styled.h1`
  font-family: 'JetBrains Mono', 'Fira Mono', 'Menlo', 'monospace';
  font-size: 2.7rem;
  font-weight: 700;
  color: #222;
  margin: 0 0 1.1rem 0;
  line-height: 1.08;
  letter-spacing: -0.01em;
  .hero-grey {
    color: #b3b3b3;
    font-weight: 400;
  }
  .hero-black {
    color: #222;
    font-weight: 700;
  }
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.13rem;
  color: #555;
  margin: 0 0 1.7rem 0;
  font-weight: 400;
  max-width: 420px;
  @media (max-width: 700px) {
    font-size: 1.01rem;
    margin-bottom: 1.1rem;
  }
`;

const HeroButton = styled.a`
  background: #fff;
  color: #222;
  font-size: 1.1rem;
  font-family: 'JetBrains Mono', 'Fira Mono', 'Menlo', 'monospace';
  font-weight: 600;
  border: none;
  border-radius: 14px;
  padding: 0.85rem 2.1rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  box-shadow: 0 2px 12px rgba(24,75,84,0.10);
  transition: background 0.18s, color 0.18s;
  margin-top: 1.1rem;
  &:hover {
    background: #184B54;
    color: #fff;
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  min-width: 0;
  @media (max-width: 900px) {
    position: static;
    margin-top: 2.2rem;
    width: 100%;
    justify-content: center;
  }
`;

const HeroImage = styled.div`
  width: 390px;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: 1.2rem;
  font-weight: 500;
  @media (max-width: 700px) {
    width: 90vw;
    max-width: 340px;
    height: 260px;
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 7rem auto 0 auto;
  max-width: 600px;
  margin-bottom: 18rem;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pushUp = keyframes`
  from {
    transform: translateY(18px);
  }
  to {
    transform: translateY(0);
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  background: ${({ bg }) => bg || '#F5F5F5'};
  border-radius: 2px;
  padding: 2.2rem 2.5rem;
  min-height: 135px;
  box-sizing: border-box;
  transition: background 0.22s cubic-bezier(0.4, 0.2, 0.2, 1);
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.2rem 1rem;
    min-height: 160px;
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.7rem 0;
  ${({ active }) =>
    active &&
    css`
      animation: ${pushUp} 0.22s cubic-bezier(0.4, 0.2, 0.2, 1);
    `}
`;

const CardDesc = styled.p`
  font-size: 1rem;
  margin: 0;
  min-height: 3.6em;
  max-height: 3.6em;
  overflow: hidden;
  transition: color 0.22s cubic-bezier(0.4, 0.2, 0.2, 1);
  animation: ${fadeInUp} 0.22s cubic-bezier(0.4, 0.2, 0.2, 1);
`;

const CARD_DATA = [
  {
    title: 'Architecture',
    desc: 'We design robust, scalable systems tailored to your business goals.',
    bg: '#F5F5F5',
  },
  {
    title: 'Full Stack',
    desc: 'From frontend to backend, we build seamless digital experiences.',
    bg: '#F5F5F5',
  },
  {
    title: 'Web Development',
    desc: 'We design and build fast, reliable websites and web apps tailored to your product, brand, and backend.',
    bg: '#F5F5F5',
  },
];

const CTACenter = styled.div`
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  margin-top: -50px;
`;

const CTASectionWrapper = styled.section`
  width: 100%;
  padding: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 2.5rem;
  background: ${COLORS.green};
  border-radius: 3px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }
`;

const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const CTAHeading = styled.h2`
  color: #222;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 0.7rem 0;
  line-height: 1.1;
`;

const CTASubheading = styled.div`
  color: #222;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2.2rem;
`;

const CTAButton = styled.a`
  background: #222;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 1.1rem 2.5rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin-top: 0.5rem;
`;

const CTAImage = styled.div`
  width: 370px;
  height: 260px;
  background: #eee;
  border-radius: 3px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #bbb;
  @media (max-width: 700px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    min-width: 0;
  }
`;

const CTAImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }
`;

const Development = () => {
  const [openCard, setOpenCard] = React.useState(0);
  return (
    <>
  <main>
        <HeroSection>
          <HeroContentBlock>
            <FloatingIcon>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="12" stroke="#184B54" strokeWidth="3" fill="none" />
              </svg>
            </FloatingIcon>
            <HeroHeading>{HERO_HEADING}</HeroHeading>
            <HeroSubtitle>{HERO_SUBTITLE}</HeroSubtitle>
            <HeroButton href="mailto:hello@example.com">{HERO_BUTTON}</HeroButton>
          </HeroContentBlock>
          <HeroImageWrapper>
            <HeroImage aria-label={HERO_IMAGE_ALT}></HeroImage>
          </HeroImageWrapper>
        </HeroSection>

        <CardGrid>
          {CARD_DATA.map((card, idx) => {
            const isOpen = openCard === idx;
            return (
              <Card
                key={card.title}
                bg={isOpen ? '#00C48C' : card.bg}
                onMouseEnter={() => setOpenCard(idx)}
                onFocus={() => setOpenCard(idx)}
                tabIndex={0}
                aria-label={card.title}
              >
                <CardContent>
                  <CardTitle active={isOpen}>{card.title}</CardTitle>
                  {isOpen && <CardDesc>{card.desc}</CardDesc>}
                </CardContent>
              </Card>
            );
          })}
        </CardGrid>
  </main>
      <CTACenter>
        <CTASectionWrapper>
          <CTAImageContainer>
            <CTAContent>
              <CTAHeading>Want to build your next product?</CTAHeading>
              <CTASubheading>We'll help you design, develop, and launch it.</CTASubheading>
              <CTAButton href="mailto:hello@example.com">Get in touch</CTAButton>
            </CTAContent>
            <CTAImage>
              <img src="/cta-image.jpg" alt="CTA" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '3px' }} />
            </CTAImage>
          </CTAImageContainer>
        </CTASectionWrapper>
      </CTACenter>
    </>
);
};

export default Development; 