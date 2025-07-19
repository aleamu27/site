import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import styled, { keyframes, css } from 'styled-components';
import { COLORS } from '../styles/colors';
import { Link, useNavigate } from 'react-router-dom';

const Section = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ServicesBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const BigHeading = styled.h2`
  color: #b3b3b3;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 600;
  margin-bottom: 0.4em;
  text-align: left;
  margin-left: 1px;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
  width: 100%;
  max-width: 480px;
`;

const ServiceButton = styled(Link)`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.15;
  color: #222;
  outline: none;
  text-decoration: none;
  &:hover {
    color: #184B54;
  }
`;

const Circle = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid #222;
  border-radius: 50%;
  margin-right: 0.6em;
  background: ${({ filled }) => (filled ? '#222' : 'transparent')};
  transition: background 0.18s;
`;

const MoreButton = styled.button`
  background: #222;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 2.1rem;
  margin-top: 1.7rem;
  cursor: pointer;
  transition: background 0.18s;
  &:hover {
    background: #444;
  }
`;

const ClientsRow = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 3rem 0;
`;

const ClientLogo = styled.div`
  width: 120px;
  height: 48px;
  background: ${COLORS.offWhite};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  color: #222;
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin: 2rem 0 3rem 0;
`;

const WorkCard = styled.div`
  background: ${COLORS.offWhite};
  border-radius: 1rem;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #222;
`;

const WhatWeDoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0 0 0;
`;

const WhatWeDoText = styled.p`
  font-size: 1.97rem;
  font-weight: 400;
  color: #222;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
`;

const WhatWeDoLead = styled.span`
  color: #b3b3b3;
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 7rem auto 0 auto;
  max-width: 600px;
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
  background: ${({ bg }) => bg || COLORS.offWhite};
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

const CardImage = styled.div`
  width: 120px;
  height: 120px;
  background: ${({ noBg }) => noBg ? 'transparent' : '#eee'};
  border-radius: 8px;
  margin-right: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: #bbb;
  @media (max-width: 700px) {
    margin-right: 0;
    margin-bottom: 1.1rem;
    width: 80px;
    height: 80px;
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
    title: 'Think',
    desc: 'We start by understanding your business, your users, and what actually needs to be built.',
    imgLabel: 'Think icon',
    bg: '#F5F5F5',
    highlight: false,
  },
  {
    title: 'Make',
    desc: 'Our team designs, develops, and assembles the solution with clarity and speed.',
    imgLabel: 'Make icon',
    bg: 'green', // will be replaced with COLORS.green on hover
    highlight: true,
  },
  {
    title: 'Move',
    desc: 'We launch, refine, and help you scale with tools that are built to adapt.',
    imgLabel: 'Move icon',
    bg: '#F5F5F5',
    highlight: false,
  },
];

const VideoGridWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  @media (max-width: 700px) {
    margin-bottom: 2.5rem;
  }
`;

const VideoGridSection = styled.section`
  margin: calc(7rem + 70px) 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  width: 100vw;
  max-width: 100vw;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.75rem;
    align-items: stretch;
  }
`;

const VideoPlaceholderBox = styled.div`
  flex: 1;
  aspect-ratio: 4 / 5;
  min-width: 0;
  width: 100%;
  min-height: 220px;
  background: #eee;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: 1.3rem;
  font-weight: 500;
  @media (max-width: 900px) {
    min-width: 0;
    min-height: 160px;
    font-size: 1.1rem;
  }
`;

const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 220px;
  @media (max-width: 900px) {
    min-height: 160px;
  }
`;

const VideoLabel = styled.div`
  text-align: left;
  font-size: 1.22rem;
  color: #b3b3b3;
  font-weight: 500;
  margin-top: 0.5rem;
`;

const VideoSectionHeadingWrapper = styled.div`
  width: 100%;
  padding-left: 15px;
  box-sizing: border-box;
`;

const VideoSectionHeading = styled.h2`
  font-size: 1.8rem;
  color: #222;
  font-weight: 700;
  margin: 0 0 1.1rem 0;
  text-align: left;
  line-height: 1.15;
  @media (max-width: 700px) {
    font-size: 1.3rem;
    margin: 0 0 0.7rem 0;
  }
`;

const CTASectionWrapper = styled.section`
  width: calc(100% - 30px); /* 15px left + 15px right */
  margin: 4.5rem auto;
  padding: 2rem;
  background: ${COLORS.green};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 2.5rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
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

const CTAButton = styled(Link)`
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

const Home = () => {
  const serviceNames = [
    'Custom AI',
    'Development',
    'Automation',
    'Production',
    'Design + Animation',
  ];
  const [hoveredIdx, setHoveredIdx] = React.useState(null);
  const [openCard, setOpenCard] = React.useState(0);
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <Layout>
        <Section>
          <ServicesBlock>
            <BigHeading>What we do</BigHeading>
            <ServicesList>
              {serviceNames.map((name, idx) => {
                // Map service names to routes
                const routeMap = {
                  'Custom AI': '/custom-ai',
                  'Development': '/development',
                  'Automation': '/ai-automations',
                  'Production': '/production',
                  'Design + Animation': '/design',
                };
                return (
                  <li key={name} style={{margin: '0.7rem 0'}}>
                    <ServiceButton
                      to={routeMap[name]}
                      tabIndex={0}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      onFocus={() => setHoveredIdx(idx)}
                      onBlur={() => setHoveredIdx(null)}
                    >
                      <Circle filled={hoveredIdx === idx} aria-hidden="true" />
                      {name}
                    </ServiceButton>
                  </li>
                );
              })}
            </ServicesList>
          </ServicesBlock>
        </Section>
        <Section>
          {/* Testimonial removed as requested */}
        </Section>
        <Section>
          {/* Contact section removed as requested */}
        </Section>
        <WhatWeDoBlock>
          <WhatWeDoText>
            We <WhatWeDoLead>partner</WhatWeDoLead> with teams to launch new ideas, refine existing tools, and deliver better digital experiences.
          </WhatWeDoText>
        </WhatWeDoBlock>
        <CardGrid>
          {CARD_DATA.map((card, idx) => {
            const isOpen = openCard === idx;
            return (
              <Card
                key={card.title}
                bg={isOpen ? COLORS.green : '#F5F5F5'}
                onMouseEnter={() => setOpenCard(idx)}
                onFocus={() => setOpenCard(idx)}
                tabIndex={0}
                aria-label={card.title}
              >
                <CardImage aria-label={card.imgLabel} noBg={idx === 0 || idx === 1 || idx === 2}>
                  {idx === 0 ? (
                                          <img src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/think-icon-XcGhWi6uMZbYUDLdGOF4hrLt1iO84M.svg" alt="Think icon" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                  ) : idx === 1 ? (
                    <img src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/make-icon-E9ndRsk696DWH9VUZEoTB0QmT5C1Vf.svg" alt="Make icon" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', transform: 'scaleX(-1)' }} />
                  ) : idx === 2 ? (
                                          <img src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/move-icon-fkqWsTq0lrYTggEJCtQn6lc048iSWc.svg" alt="Move icon" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                  ) : (
                    '[img]'
                  )}
                </CardImage>
                <CardContent>
                  <CardTitle active={isOpen}>{card.title}</CardTitle>
                  {isOpen && (
                    <CardDesc>{card.desc}</CardDesc>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </CardGrid>
        <VideoGridWrapper>
          <VideoGridSection>
            <VideoSectionHeadingWrapper>
              <VideoSectionHeading>Work</VideoSectionHeading>
            </VideoSectionHeadingWrapper>
            <VideoGrid>
              <VideoItem>
                <VideoPlaceholderBox as="video"
                  src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-dashboard-DObhOMr87tQ2jCK3sTQ4vj8qNhqPyM.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate('/work')}
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/work'); }}
                  aria-label="Go to Work page"
                />
                <VideoLabel>Dashboard</VideoLabel>
              </VideoItem>
              <VideoItem>
                <VideoPlaceholderBox as="video"
                  src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-app-Te6qBTjygsEZsVgyXd7rw77M0Z2Fii.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate('/work')}
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/work'); }}
                  aria-label="Go to Work page"
                />
                <VideoLabel>App</VideoLabel>
              </VideoItem>
              <VideoItem>
                <VideoPlaceholderBox as="video"
                  src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-website-QNBdE8wnQSAV9Ge4ctXmqvY6Z2cVfA.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate('/work')}
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/work'); }}
                  aria-label="Go to Work page"
                />
                <VideoLabel>Website</VideoLabel>
              </VideoItem>
            </VideoGrid>
          </VideoGridSection>
        </VideoGridWrapper>
      </Layout>
      <CTASectionWrapper>
        <CTAImageContainer>
          <CTAContent>
            <CTAHeading>Want to work with us?</CTAHeading>
            <CTASubheading>We'd love to hear your ideas!</CTASubheading>
            <CTAButton to="/contact">Get in touch</CTAButton>
          </CTAContent>
          <CTAImage>
            <img src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/cta-image-rcmDlRliiqF8KckKKnj5vOTiTtsSOJ.jpg" alt="CTA" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '3px' }} />
          </CTAImage>
        </CTAImageContainer>
      </CTASectionWrapper>
    </>
  );
};

export default Home; 